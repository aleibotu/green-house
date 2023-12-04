import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import {read} from 'xlsx'

export async function GET(request) {
    try {
        read('')
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const pets = await sql`SELECT * FROM TestWeathers;`;
    return NextResponse.json({ pets }, { status: 200 });
}