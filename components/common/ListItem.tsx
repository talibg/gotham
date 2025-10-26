import type React from 'react'

type Props = {
    title: string
    sub1?: string
    sub2?: string
    href?: string
    extra?: React.ReactNode
}

const ExtLink = ({ href, children, title }: { href: string; children: React.ReactNode; title?: string }) => (
    <a
        aria-label={title}
        className="underline underline-offset-4 decoration-[#65581b] hover:text-[#65581b]"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        title={title}
    >
        {children}
    </a>
)

export default function ListItem({ title, sub1, sub2, href, extra }: Props) {
    return (
        <div>
            <h3 className="text-lg leading-6 font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">
                {href ? <ExtLink href={href}>{title}</ExtLink> : title}
                {extra ? <span className="ml-2 text-neutral-300">{extra}</span> : null}
            </h3>
            {sub1 ? (
                <p className="mt-1 leading-5 text-neutral-300 whitespace-nowrap overflow-hidden text-ellipsis">
                    {sub1}
                </p>
            ) : null}
            {sub2 ? (
                <p className="mt-1 text-sm leading-5 text-neutral-400 whitespace-nowrap overflow-hidden text-ellipsis">
                    {sub2}
                </p>
            ) : null}
        </div>
    )
}
