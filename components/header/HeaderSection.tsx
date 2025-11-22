import { Github, Linkedin, X } from 'lucide-react'
import header from '@/data/header.json'

export default function HeaderSection() {
    const h = header ?? { name: '', links: [] }
    return (
        <header className="mb-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <svg
                    aria-label={`${h.name} logo`}
                    className="logo text-[#65581b]"
                    fill="none"
                    height="32"
                    role="img"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>{`${h.name} logo`}</title>
                    <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <h1 className="text-3xl font-bold text-white">{h.name}</h1>
            </div>
            <nav className="flex items-center gap-4 text-neutral-300">
                {h.links.map((l) => {
                    const label = (l.label || '').toLowerCase()
                    const Icon = label === 'github' ? Github : label === 'linkedin' ? Linkedin : X
                    return (
                        <a
                            aria-label={l.label}
                            className="no-underline hover:text-[#65581b]"
                            href={l.href}
                            key={l.href}
                        >
                            {Icon ? <Icon aria-hidden="true" size={20} /> : l.label}
                        </a>
                    )
                })}
            </nav>
        </header>
    )
}
