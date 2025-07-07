import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Server, Activity, AlertTriangle } from "lucide-react"
import Image from "next/image"

export function PlatformDashboard() {
  return (
    <section id="platform" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Real-Time <span className="text-[#00B3E6]">Healthcare Intelligence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access your hospital data anywhere, anytime through our comprehensive platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800/75 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                <Monitor className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <CardTitle className="text-gray-500">Web Portal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Comprehensive dashboard for administrators.</p>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              >
                Launch Portal
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800/85 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                <Server className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <CardTitle className="text-gray-500">API Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Integrate with existing internal infrastructure.</p>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              >
                View Docs
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Live Dashboard Preview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/50 rounded-xl border border-gray-800">
                  <div className="flex items-center space-x-3">
                    <Activity className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Patient Monitor - Room 204</span>
                  </div>
                  <span className="text-green-400 font-semibold">Online</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-black/50 rounded-xl border border-gray-800">
                  <div className="flex items-center space-x-3">
                    <Activity className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Infusion Pump - ICU-3</span>
                  </div>
                  <span className="text-green-400 font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-black/50 rounded-xl border border-gray-800">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300">Glucose Meter - Ward A</span>
                  </div>
                  <span className="text-yellow-400 font-semibold">Low Battery</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* <img
                src="/dashdemo.webp"
                alt="MediLink Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              /> */}

                            <Image
                                            height={400}
                                            width={500}
                                            src="/dashdemo.webp"
                                            alt="MediLink Dashboard"
                                            className="w-full h-auto rounded-2xl shadow-2xl"
                                          />


              <div className="absolute top-4 right-4 bg-[#00B3E6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Live Data
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
