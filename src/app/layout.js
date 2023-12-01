import {Inter} from 'next/font/google'
import BasicLayout from "@/app/BasicLayout";

import './globals.css'
import "@ant-design/charts/dist/index.css"

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'green-house',
    description: 'bla bla bla...',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <BasicLayout>
                    {children}
                </BasicLayout>
            </body>
        </html>
    )
}
