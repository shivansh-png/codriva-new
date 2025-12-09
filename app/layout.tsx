import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Codriva - Digital Transformation & Custom Software Development',
    description: 'Codriva is a digital transformation and custom software development company dedicated to helping businesses scale smarter by reimagining customer experience, streamlining operations, and leveraging technology for measurable growth.',
    keywords: 'digital transformation, custom software development, UI/UX design, mobile app development, cloud solutions, data analytics, business intelligence, IoT, API integrations',
    authors: [{ name: 'Codriva Team' }],
    openGraph: {
        title: 'Codriva - Digital Transformation & Custom Software Development',
        description: 'Helping businesses scale smarter through innovation, integrity, and collaboration.',
        type: 'website',
        locale: 'en_US',
    },
icons: {
  icon: [
    { url: '/favicon.ico' },            // Chrome prefers this simple one
    { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    { url: '/favicon.png', sizes: '16x16', type: 'image/png' }
  ]
},

    metadataBase: new URL('https://codriva.com'),
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex flex-col min-h-screen`}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    )
}
