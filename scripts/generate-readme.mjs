#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

async function loadJson(relPath) {
    const file = resolve(process.cwd(), relPath)
    const raw = await readFile(file, 'utf8')
    return JSON.parse(raw)
}

function linkLine(links = []) {
    if (!Array.isArray(links) || links.length === 0) return ''
    const parts = links.map((l) => `[${l.label}](${l.href})`).join(' · ')
    return parts
}

function sectionExperience(experience = []) {
    const lines = ['## experience', '']
    for (const item of experience) {
        const company = item.company ?? ''
        const metaParts = [item.position, item.type, item.location].filter(Boolean)
        const meta = metaParts.join(' • ')
        const role = item.role ?? ''
        const sub1 = meta || role
        const dates = item.dates ?? ''
        lines.push(`- **${company}**  `)
        if (sub1) lines.push(`  ${sub1}  `)
        if (dates) lines.push(`  ${dates}`)
        lines.push('')
    }
    return lines.join('\n').trimEnd()
}

function sectionProjects(projects = []) {
    const lines = ['## Projects', '']
    for (const p of projects) {
        const name = p.name ?? ''
        const desc = p.desc ?? ''
        const href = p.href
        const title = href ? `**[${name}](${href})**` : `**${name}**`
        const codename = p.codename
            ? p.codeHref
                ? `(codename [${p.codename}](${p.codeHref}))`
                : `(codename ${p.codename})`
            : ''
        const line = desc ? `${title} — ${desc}` : title
        const withCodename = codename ? `${line} ${codename}` : line
        lines.push(`- ${withCodename}`)
    }
    return lines.join('\n').trimEnd()
}

async function main() {
    const header = await loadJson('data/header.json').catch(() => ({ name: '', links: [] }))
    const experience = await loadJson('data/experience.json').catch(() => [])
    const projects = await loadJson('data/projects.json').catch(() => [])

    const parts = []
    const name = header.name || 'Portfolio'
    parts.push(`# ${name}`)
    const links = linkLine(header.links)
    if (links) parts.push('', links)
    parts.push('')
    parts.push(sectionExperience(experience))
    parts.push('')
    parts.push(sectionProjects(projects))
    parts.push('')

    const content = parts.join('\n')
    await writeFile(resolve(process.cwd(), 'README.md'), content)
}

main().catch((err) => {
    console.error('Failed to generate README:', err)
    process.exit(1)
})
