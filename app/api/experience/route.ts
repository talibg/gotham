import { NextResponse } from 'next/server'
import experience from '../../../data/experience.json'

export async function GET() {
    return NextResponse.json(experience, {
        headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=86400',
        },
    })
}
