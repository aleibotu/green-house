import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const result =
            await sql`CREATE TABLE TestWeathers ( 
                            Date varchar(255),
                            HourlyTime varchar(255),
                            Comp1AirT varchar(255),
                            Comp1AirRH varchar(255),
                            Comp1Airppm varchar(255),
                            CommonIglobValue varchar(255),
                            Comp1LAIValue varchar(255),
                            Comp1HarvestCumFruitDW varchar(255), 
                            Comp1HarvestCumFruitFW varchar(255), 
                            Comp1HarvestCumFruitCount varchar(255), 
                            CommonConBoilerGasUse varchar(255), 
                            GasUse varchar(255)
                   );`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}