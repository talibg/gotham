import { NextResponse } from 'next/server'
import projects from '../../../data/projects.json'

export async function GET() {
    return NextResponse.json(projects, {
        headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=86400',
        },
    })
}
