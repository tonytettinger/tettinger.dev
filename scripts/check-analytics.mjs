import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

let stored = null
const scripts = []
const context = vm.createContext({
    exports: {},
    window: {},
    localStorage: {
        getItem: () => stored,
        setItem: (_, value) => {
            stored = value
        },
    },
    location: { origin: 'https://tettinger.dev', pathname: '/privacy/' },
    document: {
        title: 'Privacy notice',
        referrer: 'https://example.com/?private=value',
        createElement: () => ({}),
        head: { appendChild: (script) => scripts.push(script) },
    },
})
const source = readFileSync(new URL('../src/analytics.ts', import.meta.url), 'utf8')
vm.runInContext(
    ts.transpileModule(source, {
        compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    }).outputText,
    context
)
const { readConsent, saveConsent, trackPage } = context.exports

assert.equal(readConsent(), null)
stored = '{broken'
assert.equal(readConsent(), null)
stored = JSON.stringify({ choice: 'granted', expiresAt: 0 })
assert.equal(readConsent(), null, 'Expired permission must not enable analytics')
assert.equal(saveConsent('granted'), true)
assert.equal(readConsent(), 'granted')
assert.equal(saveConsent('denied'), true)
assert.equal(readConsent(), 'denied')
assert.equal(scripts.length, 0, 'Reading and saving consent must not load a tag')

trackPage()
trackPage()
assert.equal(scripts.length, 1, 'Page navigation must reuse the tag')
// Google's parser distinguishes Arguments from ordinary arrays.
for (const command of context.window.dataLayer) {
    assert.equal(Object.prototype.toString.call(command), '[object Arguments]')
}
assert.equal(context.window.dataLayer.at(-1)[2].page_location, 'https://tettinger.dev/privacy/')
console.log('Verified consent expiry, preference persistence and Google command compatibility.')
