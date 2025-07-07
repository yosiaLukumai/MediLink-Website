import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, AlertTriangle, MapPin, Brain, BarChart3, Globe } from "lucide-react"

export function EpidemiologicalInsights() {
  return (
    <section id="insights" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            See the <span className="text-[#00B3E6]">Big Picture</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leverage AI to predict equipment failures, detect disease trends, and map care inequities. Sync effortlessly across health systems with a bold vision for transformative impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
              <CardTitle className="text-gray-300">Equipment Failure Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
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

          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-yellow-400" />
              </div>
              <CardTitle className="text-gray-400">Outbreak Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
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

          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 text-[#007BFF]" />
              </div>
              <CardTitle className="text-gray-400">Regional Care Gaps</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
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

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Epidomilogy Insights</h3>
              <p className="text-gray-400 text-lg">
                Seamlessly connect with large health information systems to provide real-time insights for policy
                makers and public health officials.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Brain className="h-6 w-6 text-[#00B3E6]" />
                  <span className="text-gray-300">AI-powered health analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-6 w-6 text-[#00B3E6]" />
                  <span className="text-gray-300">Real-time dashboard integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-[#00B3E6]" />
                  <span className="text-gray-300">Better Decision Making</span>
                </div>
              </div>

              <Button className="bg-[#00B3E6] hover:bg-[#008CC4] text-white">Request More Information</Button>
            </div>

            <div className="relative">
              <img
                src="/epido.png"
                alt="Epidemiological Insights Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 left-4 bg-[#007BFF] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Live Analytics
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800 rounded-full px-6 py-3 border border-gray-700">
            <Globe className="h-5 w-5 text-[#00B3E6]" />
            <span className="text-sm font-medium text-gray-300">
              Starting in Tanzania • Expanding across East Africa
            </span>
          </div>
        </div> */}
      </div>
    </section>
  )
}
