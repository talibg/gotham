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
            {data.map((p) => (
                <ListItem href={p.href} key={p.href ?? p.name} sub1={p.desc} title={p.name} />
            ))}
        </div>
    )
}
