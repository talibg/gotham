import { Suspense } from 'react'
import { SWRConfig } from 'swr'
import experienceData from '@/data/experience.json'
import type { ExperienceItem } from '@/lib/types'
import ExperienceClient from './ExperienceClient'

export default function ExperienceSection() {
    const items = (experienceData as ExperienceItem[]) ?? []
    return (
        <section className="mt-10">
            <h2 className="text-xl font-semibold text-white">experience</h2>
            <hr className="my-6 border-[#65581b]" />
            <SWRConfig value={{ fallback: { '/api/experience': items } }}>
                <Suspense
                    fallback={
                        <output aria-busy="true" aria-live="polite" className="space-y-6">
                            <span className="sr-only">Loading experience</span>
                            {items.length === 0
                                ? null
                                : items.map((item) => (
                                      <div className="space-y-1" key={`${item.company}-${item.dates}`}>
                                          <div className="h-6 w-40 bg-neutral-800" />
                                          <div className="h-5 w-full bg-neutral-900" />
                                          <div className="h-5 w-2/3 bg-neutral-900" />
                                      </div>
                                  ))}
                        </output>
                    }
                >
                    <ExperienceClient />
                </Suspense>
            </SWRConfig>
        </section>
    )
}
