import { Button } from "@/components/ui/button"
import { ArrowRight, Wifi, Shield, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Digitize Hospital Devices. <span className="text-[#00B3E6]">Empower Better Care.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                {/* MediLink connects any hospital machine to the cloud — turning analog readings into actionable insight
                for healthcare transformation across East Africa. */}
                MediLink connects any hospital machine to configurable endpoints or MediLink Platform—transforming analog signals into real-time insights for smarter, faster care delivery.

              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#00B3E6] cursor-grab hover:bg-[#008CC4] text-white px-8 py-4 text-lg rounded-xl">
                <Link
                  href={"/#waitlist"}
                  target="_parent"
                >
                  <div className="flex items-center justify-center">
                    <span>
                      Join the Waitlist
                    </span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-gray-700 cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg rounded-xl bg-transparent"
              >

                <Link
                  href={"https://wa.me/255624445123"}
                  target="_blank"
                >
                  <span>
                    Book a Demo
                  </span>
                </Link>

              </Button>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Wifi className="h-5 w-5 text-[#00B3E6]" />
                </div>
                <div>
                  <p className="font-semibold">Works Offline</p>
                  <p className="text-sm text-gray-500">No Internet? No problem</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-[#00B3E6]" />
                </div>
                <div>
                  <p className="font-semibold">Secure & Encrypted</p>
                  <p className="text-sm text-gray-500">Hospital-grade security</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-[#00B3E6]" />
                </div>
                <div>
                  <p className="font-semibold">Plug & Play</p>
                  <p className="text-sm text-gray-500">Works with legacy devices</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              {/* <Image
                src="/demo_medlink.jpg"
                alt="MediLink Device"
                className="w-full h-auto rounded-2xl shadow-2xl"
              /> */}
                    <Image
                    width={600}
                  height={500}
                  src="/demo_medlink.jpg"
                  alt="MediLink Device"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#007BFF] rounded-full animate-pulse"></div>
                <span className="text-black font-semibold">Live Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
