import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

// Eagerly import every markdown file in src/posts as raw text
const modules = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: raw }

  const [, frontmatter, content] = match
  const meta = {}
  frontmatter.split('\n').forEach((line) => {
    const idx = line.indexOf(':')
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()
    meta[key] = value
  })

  return { meta, content }
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

const posts = Object.entries(modules).map(([path, raw]) => {
  const { meta, content } = parseFrontmatter(raw)
  return {
    slug: meta.slug || slugFromPath(path),
    title: meta.title || 'Untitled Post',
    date: meta.date || '',
    excerpt: meta.excerpt || '',
    html: md.render(content),
  }
})

posts.sort((a, b) => new Date(b.date) - new Date(a.date))

export default posts
