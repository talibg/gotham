import { Suspense } from 'react'
import { SWRConfig } from 'swr'
import projectsData from '@/data/projects.json'
import type { ProjectItem } from '@/lib/types'
import ProjectsClient from './ProjectsClient'

export default function ProjectsSection() {
    const items = (projectsData as ProjectItem[]) ?? []
    return (
        <section className="mt-10">
            <h2 className="text-xl font-semibold text-white">Projects</h2>
            <hr className="my-6 border-[#65581b]" />
            <SWRConfig value={{ fallback: { '/api/projects': items } }}>
                <Suspense
                    fallback={
                        <output aria-busy="true" aria-live="polite" className="space-y-6">
                            <span className="sr-only">Loading projects</span>
                            {items.length === 0
                                ? null
                                : items.map((item) => (
                                      <div className="space-y-1" key={item.href ?? item.name}>
                                          <div className="h-6 w-40 bg-neutral-800" />
                                          <div className="h-5 w-full bg-neutral-900" />
                                          <div className="h-5 w-5/6 bg-neutral-900" />
                                      </div>
                                  ))}
                        </output>
                    }
                >
                    <ProjectsClient />
                </Suspense>
            </SWRConfig>
        </section>
    )
}
