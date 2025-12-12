'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Providers } from '../components/Providers'
import { LanguageProvider } from '../contexts/LanguageContext'
import ChatBotPopup from '../components/PopUp'

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Prevent hydration mismatch by not rendering until mounted on client
    if (!mounted) {
        // Return null or a simple loading skeleton
        return (
            <div className="min-h-screen bg-white dark:bg-gray-900">
                {/* Simple loading state that matches your layout structure */}
                <div className="flex flex-col min-h-screen">
                    {/* Header placeholder */}
                    <div className="h-16 bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                    
                    {/* Main content placeholder */}
                    <main className="flex-grow">
                        <div className="container-max py-8">
                            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4 animate-pulse"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse"></div>
                        </div>
                    </main>
                    
                    {/* Footer placeholder */}
                    <div className="h-20 bg-gray-100 dark:bg-gray-800 animate-pulse"></div>
                </div>
            </div>
        )
    }

    return (
        <Providers>
            <LanguageProvider>
                <I18nextProvider i18n={i18n}>
                    <Navigation />
                    <main className="flex-grow">{children}</main>
                    <ChatBotPopup />
                    <Footer />
                </I18nextProvider>
            </LanguageProvider>
        </Providers>
    )
}