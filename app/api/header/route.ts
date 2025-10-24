import { NextResponse } from 'next/server'
import header from '../../../data/header.json'

export async function GET() {
    return NextResponse.json(header ?? { name: '', links: [] }, {
        headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=86400',
        },
    })
}
