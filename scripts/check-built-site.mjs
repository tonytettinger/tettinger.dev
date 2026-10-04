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
console.log(`Verified generated content, metadata, headings and sitemap for ${pages.length} pages.`)
