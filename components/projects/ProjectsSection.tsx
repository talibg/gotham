import { Suspense } from 'react'
import { SWRConfig } from 'swr'
import projectsData from '@/data/projects.json'
import type { ProjectItem } from '@/lib/types'
import ProjectsClient from './ProjectsClient'
import ProjectsSkeleton from './ProjectsSkeleton'

export default function ProjectsSection() {
    const items = (projectsData as ProjectItem[]) ?? []
    return (
        <section className="mt-10">
            <h2 className="text-xl font-semibold text-white">Projects</h2>
            <hr className="my-6 border-[#65581b]" />
            <SWRConfig value={{ fallback: { '/api/projects': items } }}>
                <Suspense fallback={<ProjectsSkeleton items={items} />}>
                    <ProjectsClient />
                </Suspense>
            </SWRConfig>
        </section>
    )
}
