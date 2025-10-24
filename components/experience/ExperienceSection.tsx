import { Suspense } from 'react'
import { SWRConfig } from 'swr'
import experienceData from '@/data/experience.json'
import type { ExperienceItem } from '@/lib/types'
import ExperienceClient from './ExperienceClient'
import ExperienceSkeleton from './ExperienceSkeleton'

export default function ExperienceSection() {
    const items = (experienceData as ExperienceItem[]) ?? []
    return (
        <section className="mt-10">
            <h2 className="text-xl font-semibold text-white">experience</h2>
            <hr className="my-6 border-[#65581b]" />
            <SWRConfig value={{ fallback: { '/api/experience': items } }}>
                <Suspense fallback={<ExperienceSkeleton items={items} />}>
                    <ExperienceClient />
                </Suspense>
            </SWRConfig>
        </section>
    )
}
