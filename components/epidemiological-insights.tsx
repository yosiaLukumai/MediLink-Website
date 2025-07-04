import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, AlertTriangle, MapPin, Brain, BarChart3, Globe } from "lucide-react"

export function EpidemiologicalInsights() {
  return (
    <section id="insights" className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            See the <span className="text-[#00B3E6]">Big Picture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use AI to detect equipment failure patterns, outbreaks, and regional care gaps. Integrate seamlessly with
            Ministries of Health dashboards across East Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <CardTitle className="text-gray-900">Equipment Failure Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                AI-powered predictive maintenance alerts help prevent critical equipment failures before they impact
                patient care.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Predictive maintenance scheduling</p>
                <p>• Failure pattern recognition</p>
                <p>• Cost optimization insights</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle className="text-gray-900">Outbreak Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Early warning systems identify potential disease outbreaks through pattern analysis of patient data and
                vital signs.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Real-time trend analysis</p>
                <p>• Automated alert systems</p>
                <p>• Public health integration</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <CardTitle className="text-gray-900">Regional Care Gaps</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Identify underserved areas and resource allocation opportunities to improve healthcare equity across
                regions.
              </p>
              <div className="text-sm text-gray-500">
                <p>• Resource distribution mapping</p>
                <p>• Care quality metrics</p>
                <p>• Policy recommendation engine</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Ministry of Health Integration</h3>
              <p className="text-gray-600 text-lg">
                Seamlessly connect with national health information systems to provide real-time insights for policy
                makers and public health officials.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Brain className="h-6 w-6 text-[#00B3E6]" />
                  <span className="text-gray-700">AI-powered health analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-6 w-6 text-[#00B3E6]" />
                  <span className="text-gray-700">Real-time dashboard integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-[#00B3E6]" />
                  <span className="text-gray-700">Multi-country deployment ready</span>
                </div>
              </div>

              <Button className="bg-[#00B3E6] hover:bg-[#008CC4] text-white">Request Integration Demo</Button>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Epidemiological Insights Dashboard"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute top-4 left-4 bg-[#00B3E6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Live Analytics
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm">
            <Globe className="h-5 w-5 text-[#00B3E6]" />
            <span className="text-sm font-medium text-gray-700">
              Starting in Tanzania • Expanding across East Africa
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
