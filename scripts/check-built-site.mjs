import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const pages = [
    ['index.html', '/', 'Antal Tettinger · Product Engineer', 'Senior Product Engineer'],
    ['projects/index.html', '/projects/', 'Projects · Antal Tettinger', 'Xentral homepage'],
    [
        'about/index.html',
        '/about/',
        'About · Antal Tettinger',
        'My software engineering principles',
    ],
    ['articles/index.html', '/articles/', 'Articles · Antal Tettinger', 'How Big Things Get Done'],
    [
        'articles/big-things-done/index.html',
        '/articles/big-things-done/',
        'How Big Things Get Done · Antal Tettinger',
        'Haste makes waste',
    ],
]

for (const [file, pathname, title, content] of pages) {
    const html = readFileSync(`public/${file}`, 'utf8')
    const visibleHtml = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, '')
    assert.ok(visibleHtml.includes(content), `${file}: content must be in generated HTML`)
    assert.ok(
        html.includes(`<title data-react-helmet="true">${title}</title>`),
        `${file}: page title`
    )
    assert.ok(
        html.includes(`rel="canonical" href="https://tettinger.dev${pathname}"`),
        `${file}: canonical`
    )
    assert.ok(
        html.includes('name="twitter:card" content="summary_large_image"'),
        `${file}: social preview`
    )
    assert.equal((visibleHtml.match(/<h1\b/g) || []).length, 1, `${file}: one primary heading`)
}

const article = readFileSync('public/articles/big-things-done/index.html', 'utf8')
assert.ok(article.includes('property="og:type" content="article"'))
assert.match(
    article,
    /property="og:image" content="https:\/\/tettinger\.dev\/static\/[^"<>]+\.png"/
)
assert.ok(readFileSync('public/404.html', 'utf8').includes('content="noindex, follow"'))
assert.ok(!readFileSync('public/404.html', 'utf8').includes('rel="canonical"'))

const sitemap = readFileSync('public/sitemap/sitemap-0.xml', 'utf8')
for (const [, pathname] of pages) {
    assert.ok(
        sitemap.includes(`<loc>https://tettinger.dev${pathname}</loc>`),
        `Sitemap: ${pathname}`
    )
}
for (const [file] of [...pages, ['privacy/index.html'], ['404.html']]) {
    const html = readFileSync(`public/${file}`, 'utf8')
    assert.ok(
        !/<script[^>]+src=["'][^"']*(googletagmanager|google-analytics)/.test(html),
        `${file}: analytics must not load before consent`
    )
    assert.ok(html.includes('Analytics settings'), `${file}: consent can be changed`)
    assert.ok(html.includes('href="/privacy/"'), `${file}: privacy notice is linked`)
}
const privacy = readFileSync('public/privacy/index.html', 'utf8')
assert.ok(privacy.includes('tettinger.dev@gmail.com'))
assert.ok(privacy.includes('rel="canonical" href="https://tettinger.dev/privacy/"'))
console.log(`Verified generated content, metadata, headings, sitemap and privacy boundaries.`)
