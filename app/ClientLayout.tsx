'use client'

import { usePathname } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Providers } from '@/components/Providers'
import ChatBotPopup from '@/components/PopUp'

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <Providers>
            <Navigation />
            <main className="flex-grow">{children}</main>
            <ChatBotPopup />
            <Footer />
        </Providers>
    )
}
