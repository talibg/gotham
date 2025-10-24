import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Permanent_Marker } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const permanentMarker = Permanent_Marker({
    variable: '--font-marker',
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'talibg',
    description: 'a minimalist dark themed portfolio',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} antialiased bg-neutral-950 text-neutral-200`}
            >
                <main className="mx-auto max-w-[767px] px-6 py-16">{children}</main>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
