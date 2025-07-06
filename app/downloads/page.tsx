"use client"

import { DownloadsSection } from "@/components/downloads-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"


export default function DownloadPage() {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <main className="">
                <DownloadsSection />
            </main>
            <Footer />
        </div>
    )

}