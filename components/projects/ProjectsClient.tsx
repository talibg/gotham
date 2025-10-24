'use client'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

import ListItem from '@/components/common/ListItem'
import type { ProjectItem } from '@/lib/types'
import ProjectsEmpty from './ProjectsEmpty'

const _Divider = () => <hr className="my-6 border-[#65581b]" />

const ExtLink = ({ href, children, title }: { href: string; children: React.ReactNode; title?: string }) => (
    <a
        aria-label={title}
        className="underline underline-offset-4 hover:text-white"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        title={title}
    >
        {children}
    </a>
)

const _Project = ({ name, desc, href }: { name: string; desc: string; href?: string }) => (
    <div>
        <h3 className="text-lg font-medium text-white">{href ? <ExtLink href={href}>{name}</ExtLink> : name}</h3>
        <p className="mt-1 text-neutral-300">{desc}</p>
    </div>
)

export default function ProjectsClient() {
    const { data } = useSWR<ProjectItem[]>('/api/projects', fetcher, { suspense: true })
    const [ready, setReady] = useState(false)
    useEffect(() => {
        let active = true
        ;(async () => {
            await sleep(3000)
            if (active) setReady(true)
        })()
        return () => {
            active = false
        }
    }, [])
    if (!ready) {
        const items = data ?? []
        return (
            <output aria-busy="true" aria-live="polite" className="space-y-6">
                <span className="sr-only">Loading projects</span>
                {items.map((p) => (
                    <div className="space-y-1" key={p.href ?? p.name}>
                        <div className="h-6 w-40 bg-neutral-800" />
                        <div className="h-5 w-full bg-neutral-900" />
                        <div className="h-5 w-5/6 bg-neutral-900" />
                    </div>
                ))}
            </output>
        )
    }
    if (!data || data.length === 0) {
        return <ProjectsEmpty />
    }
    return (
        <div className="space-y-6">
            {data.map((p) => (
                <ListItem href={p.href} key={p.href ?? p.name} sub1={p.desc} title={p.name} />
            ))}
        </div>
    )
}
