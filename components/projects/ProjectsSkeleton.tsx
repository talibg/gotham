import type { ProjectItem } from '@/lib/types'

export default function ProjectsSkeleton({ items }: { items: ProjectItem[] }) {
    if (!items || items.length === 0) return null
    return (
        <output aria-busy="true" aria-live="polite" className="space-y-6">
            <span className="sr-only">Loading projects</span>
            {items.map((item) => (
                <div className="space-y-1" key={item.href ?? item.name}>
                    <div className="h-6 w-40 bg-neutral-800" />
                    <div className="h-5 w-full bg-neutral-900" />
                    <div className="h-5 w-5/6 bg-neutral-900" />
                </div>
            ))}
        </output>
    )
}
