import type { ReactNode } from 'react'
import header from '@/data/header.json'

// Brand icons were removed from lucide-react in 1.0; paths copied from lucide-static@0.547.0 (ISC).
const iconPaths: Record<string, ReactNode> = {
    github: (
        <>
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </>
    ),
    linkedin: (
        <>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect height="12" width="4" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </>
    ),
}

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
                    const paths = iconPaths[label]
                    return (
                        <a
                            aria-label={l.label}
                            className="no-underline hover:text-[#65581b]"
                            href={l.href}
                            key={l.href}
                        >
                            {paths ? (
                                <svg
                                    aria-hidden="true"
                                    fill="none"
                                    height={20}
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    width={20}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {paths}
                                </svg>
                            ) : (
                                l.label
                            )}
                        </a>
                    )
                })}
            </nav>
        </header>
    )
}
