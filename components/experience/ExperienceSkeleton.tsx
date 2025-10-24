import type { ExperienceItem } from '@/lib/types'

export default function ExperienceSkeleton({ items }: { items: ExperienceItem[] }) {
    if (!items || items.length === 0) return null
    return (
        <output aria-busy="true" aria-live="polite" className="space-y-6">
            <span className="sr-only">Loading experience</span>
            {items.map((item) => (
                <div className="space-y-1" key={`${item.company}-${item.dates}`}>
                    <div className="h-6 w-40 bg-neutral-800" />
                    <div className="h-5 w-full bg-neutral-900" />
                    <div className="h-5 w-2/3 bg-neutral-900" />
                </div>
            ))}
        </output>
    )
}
