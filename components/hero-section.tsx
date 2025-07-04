import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Wifi, Shield, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Digitize Hospital Devices. <span className="text-[#00B3E6]">Empower Better Care.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                MediLink connects any hospital machine to the cloud — turning analog readings into actionable insight
                for healthcare transformation across East Africa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#00B3E6] hover:bg-[#008CC4] text-white px-8 py-4 text-lg rounded-xl">
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-8 py-4 text-lg rounded-xl bg-transparent"
              >
                Book a Demo
              </Button>
              <Button size="lg" variant="ghost" className="text-gray-600 hover:text-gray-900 px-8 py-4 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Wifi className="h-5 w-5 text-[#00B3E6]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Works Offline</p>
                  <p className="text-sm text-gray-500">No Wi-Fi? No problem</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-[#00B3E6]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Secure & Encrypted</p>
                  <p className="text-sm text-gray-500">Hospital-grade security</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-[#00B3E6]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Plug & Play</p>
                  <p className="text-sm text-gray-500">Works with legacy devices</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-lg">
              <img
                src="/demo_medlink.jpg"
                alt="MediLink Device"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#00B3E6] rounded-full animate-pulse"></div>
                <span className="text-gray-900 font-semibold">Live Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
