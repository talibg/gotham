import { NextResponse } from 'next/server'
import data from '../../data.json'

// Serve the page data JSON at /api/data
export async function GET() {
    return NextResponse.json(data, {
        headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=86400',
        },
    })
}
