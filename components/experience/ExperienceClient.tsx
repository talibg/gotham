'use client'
import useSWR from 'swr'
import ListItem from '@/components/common/ListItem'
import { fetcher } from '@/lib/fetcher'
import type { ExperienceItem } from '@/lib/types'
import ExperienceEmpty from './ExperienceEmpty'

export default function ExperienceClient() {
    const { data } = useSWR<ExperienceItem[]>('/api/experience', fetcher, { suspense: true })
    if (!data || data.length === 0) {
        return <ExperienceEmpty />
    }
    return (
        <div className="space-y-6">
            {data.map((job) => {
                const meta = [job.position, job.type, job.location].filter(Boolean).join(' • ')
                const sub1 = meta || job.role || undefined
                return <ListItem key={`${job.company}-${job.dates}`} sub1={sub1} sub2={job.dates} title={job.company} />
            })}
        </div>
    )
}
