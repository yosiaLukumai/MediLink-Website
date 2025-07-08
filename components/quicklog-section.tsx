import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Clock, User, FileText } from "lucide-react"

export function QuickLogSection() {
  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#00B3E6]">QuickLog:</span> Instant Medical Logging
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Like a quick photo, QuickLog captures &apos;who-what-when&apos; in a second — ensuring no data is missed. Inspired by
            social media simplicity for healthcare precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Camera className="h-6 w-6 text-[#00B3E6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Instant Capture</h3>
                  <p className="text-gray-600">Tag patient readings without storing full device data</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-[#00B3E6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Real-Time Timestamps</h3>
                  <p className="text-gray-600">Automatic time and location tracking for every entry</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <User className="h-6 w-6 text-[#00B3E6]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Patient-Centric</h3>
                  <p className="text-gray-600">Link readings directly to patient records seamlessly</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <h4 className="text-lg font-semibold mb-2">Perfect for:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Quick vital sign documentation</li>
                <li>• Equipment maintenance logs</li>
                <li>• Medication administration records</li>
                <li>• Emergency response tracking</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-[#00B3E6]" />
                  <span>QuickLog Entry</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Patient ID</label>
                  <Input
                    placeholder="Enter patient ID or scan barcode"
                    className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Device Reading</label>
                  <Input
                    placeholder="e.g., BP: 120/80 mmHg"
                    className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Notes (Optional)</label>
                  <Textarea
                    placeholder="Additional observations..."
                    className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-500"
                    rows={3}
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-sm text-gray-500">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Auto-timestamp: Now
                  </div>
                  <Button className="bg-[#00B3E6] hover:bg-[#008CC4] text-white">Log Entry</Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-gray-500">
              <p>Inspired by Instagram-style interaction for healthcare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
