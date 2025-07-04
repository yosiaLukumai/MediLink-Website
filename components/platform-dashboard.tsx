import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Server, Activity, AlertTriangle } from "lucide-react"

export function PlatformDashboard() {
  return (
    <section id="platform" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Real-Time <span className="text-[#00B3E6]">Healthcare Intelligence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access your hospital data anywhere, anytime through our comprehensive platform designed for healthcare
            professionals and administrators.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                <Monitor className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <CardTitle className="text-gray-900">Web Portal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Comprehensive dashboard for hospital administrators and biomedical engineers.
              </p>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
              >
                Launch Portal
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                <Smartphone className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <CardTitle className="text-gray-900">Mobile App</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                On-the-go access for healthcare providers to monitor patient vitals and device status.
              </p>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
              >
                Download App
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                <Server className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <CardTitle className="text-gray-900">API Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Server-to-server integration for hospitals with existing internal infrastructure.
              </p>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
              >
                View Docs
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Live Dashboard Preview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Activity className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Patient Monitor - Room 204</span>
                  </div>
                  <span className="text-green-500 font-semibold">Online</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Activity className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Infusion Pump - ICU-3</span>
                  </div>
                  <span className="text-green-500 font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-700">Glucose Meter - Ward A</span>
                  </div>
                  <span className="text-yellow-500 font-semibold">Low Battery</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="MediLink Dashboard"
                className="w-full h-auto rounded-2xl shadow-xl"
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
