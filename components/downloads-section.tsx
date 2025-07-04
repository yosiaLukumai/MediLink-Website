import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Monitor, Smartphone, Cpu, FileText, QrCode, Settings } from "lucide-react"

export function DownloadsSection() {
  return (
    <section id="downloads" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Get Set Up in <span className="text-[#00B3E6]">Minutes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download tools to configure and deploy your MediLink and Gateway devices. Everything you need to get started
            with digital healthcare transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                <Settings className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <CardTitle className="text-gray-900">MediLink Config Tool</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm">
                Configure device settings, network parameters, and device mappings for your MediLink units.
              </p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
                >
                  <Monitor className="mr-2 h-4 w-4" />
                  Windows
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
                >
                  <Monitor className="mr-2 h-4 w-4" />
                  macOS
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
                >
                  <Monitor className="mr-2 h-4 w-4" />
                  Linux
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                <Cpu className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <CardTitle className="text-gray-900">Gateway Setup Utility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm">
                Easy setup wizard for Gateway Hub configuration, network settings, and device pairing.
              </p>
              <div className="space-y-2">
                <Button className="w-full bg-[#00B3E6] hover:bg-[#008CC4] text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Utility
                </Button>
                <div className="text-xs text-gray-500 text-center">Version 2.1.0 • 45MB</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                <Smartphone className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <CardTitle className="text-gray-900">Mobile App</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm">
                Monitor devices and access QuickLog features on the go with our mobile application.
              </p>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
                >
                  <Smartphone className="mr-2 h-4 w-4" />
                  iOS App Store
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
                >
                  <Smartphone className="mr-2 h-4 w-4" />
                  Google Play
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900">
                <Download className="h-5 w-5 text-[#00B3E6]" />
                <span>Firmware & Updates</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">MediLink Firmware v3.2.1</p>
                    <p className="text-sm text-gray-500">Latest stable release</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
                  >
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Gateway Hub Firmware v2.8.0</p>
                    <p className="text-sm text-gray-500">Enhanced connectivity</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
                  >
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900">
                <FileText className="h-5 w-5 text-[#00B3E6]" />
                <span>Documentation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Installation Guide</p>
                    <p className="text-sm text-gray-500">Step-by-step setup</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
                  >
                    PDF
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">API Documentation</p>
                    <p className="text-sm text-gray-500">Integration reference</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
                  >
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200 shadow-sm">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto">
              <QrCode className="h-8 w-8 text-[#00B3E6]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Over-the-Air Updates</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Keep your devices up-to-date automatically with OTA updates. Scan QR codes for instant firmware updates
                or enable automatic updates for seamless maintenance.
              </p>
            </div>
            <Button className="bg-[#00B3E6] hover:bg-[#008CC4] text-white">Enable Auto-Updates</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
