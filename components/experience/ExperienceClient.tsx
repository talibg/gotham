'use client'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

import ListItem from '@/components/common/ListItem'
import type { ExperienceItem } from '@/lib/types'
import ExperienceEmpty from './ExperienceEmpty'

const _Divider = () => <hr className="my-6 border-[#65581b]" />

export default function ExperienceClient() {
    const { data } = useSWR<ExperienceItem[]>('/api/experience', fetcher, { suspense: true })
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
                <span className="sr-only">Loading experience</span>
                {items.map((job) => (
                    <div className="space-y-1" key={`${job.company}-${job.dates}`}>
                        <div className="h-6 w-40 bg-neutral-800" />
                        <div className="h-5 w-full bg-neutral-900" />
                        <div className="h-5 w-2/3 bg-neutral-900" />
                    </div>
                ))}
            </output>
        )
    }
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
