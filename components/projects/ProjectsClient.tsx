'use client'

import useSWR from 'swr'
import ListItem from '@/components/common/ListItem'
import { fetcher } from '@/lib/fetcher'
import type { ProjectItem } from '@/lib/types'
import ProjectsEmpty from './ProjectsEmpty'

export default function ProjectsClient() {
    const { data } = useSWR<ProjectItem[]>('/api/projects', fetcher, { suspense: true })
    if (!data || data.length === 0) {
        return <ProjectsEmpty />
    }
    return (
        <div className="space-y-6">
            {data.map((p) => {
                const extra = p.codename ? (
                    <>
                        (codename{' '}
                        {p.codeHref ? (
                            <a
                                className="underline underline-offset-4 decoration-[#65581b] hover:text-[#65581b]"
                                href={p.codeHref}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {p.codename}
                            </a>
                        ) : (
                            <span>{p.codename}</span>
                        )}
                        )
                    </>
                ) : undefined
                return <ListItem extra={extra} href={p.href} key={p.href ?? p.name} sub1={p.desc} title={p.name} />
            })}
        </div>
    )
}
