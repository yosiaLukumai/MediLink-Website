import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Usb, Radio, Shield, Globe, Cpu } from "lucide-react"

export function ProductOverview() {
  return (
    <section id="product" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            One Device. <span className="text-[#00B3E6]">Infinite Possibilities.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MediLink transforms any hospital machine into a smart, connected device with our modular interface system
            designed for African healthcare infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="MediLink Gateway Hub"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">MediLink Device</h3>
            <p className="text-gray-600 text-lg">
              Our flagship device connects to any hospital machine through multiple interfaces, ensuring compatibility
              with both legacy and modern equipment.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Usb className="h-6 w-6 text-[#00B3E6]" />
                <span className="text-gray-700">RS232 + USB Host</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wifi className="h-6 w-6 text-[#00B3E6]" />
                <span className="text-gray-700">Wi-Fi + Ethernet</span>
              </div>
              <div className="flex items-center space-x-3">
                <Radio className="h-6 w-6 text-[#00B3E6]" />
                <span className="text-gray-700">LoRa Long Range</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-[#00B3E6]" />
                <span className="text-gray-700">Encrypted Data</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900">Gateway Hub</h3>
            <p className="text-gray-600 text-lg">
              The central hub that aggregates data from multiple MediLink devices and ensures reliable connectivity even
              in challenging network conditions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Globe className="h-6 w-6 text-[#00B3E6]" />
                <span className="text-gray-700">4G + Ethernet</span>
              </div>
              <div className="flex items-center space-x-3">
                <Radio className="h-6 w-6 text-[#00B3E6]" />
                <span className="text-gray-700">LoRa Gateway</span>
              </div>
              <div className="flex items-center space-x-3">
                <Cpu className="h-6 w-6 text-[#00B3E6]" />
                <span className="text-gray-700">Edge Processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-[#00B3E6]" />
                <span className="text-gray-700">Offline Sync</span>
              </div>
            </div>
          </div>
          <div className="lg:order-1">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Gateway Hub"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="bg-gray-50 border-gray-200 hover:bg-gray-100 transition-colors shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">No Wi-Fi? No Problem</h4>
              <p className="text-gray-600">
                Works offline and syncs data when connectivity is restored. Perfect for rural hospitals.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-gray-200 hover:bg-gray-100 transition-colors shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Modular Interface</h4>
              <p className="text-gray-600">
                Compatible with legacy and modern hospital machines through multiple connection types.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-gray-200 hover:bg-gray-100 transition-colors shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Secure Transmission</h4>
              <p className="text-gray-600">
                Hospital-grade encryption ensures patient data remains private and secure.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
