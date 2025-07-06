import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Lightbulb, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-[#00B3E6]">Vortan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based in East Africa, we're rooted in real-world healthcare gaps and committed to transforming medical care
            through innovative digital infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Our Story</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded by healthcare professionals and engineers who witnessed firsthand the challenges of medical device
              management in East African hospitals, Vortan was born from a simple yet powerful vision: every hospital
              device should be smart, connected, and accessible.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand the unique infrastructure challenges in our region — from unreliable internet connectivity
              to legacy medical equipment. That's why MediLink was designed from the ground up to work in real-world
              African healthcare environments.
            </p>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Vortan Team"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-[#00B3E6] rounded-2xl p-4 text-white">
              <MapPin className="h-6 w-6 mb-2" />
              <p className="font-semibold">Based in East Africa</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-50 border-gray-200 hover:bg-gray-100 transition-colors shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Innovation</h4>
              <p className="text-gray-600">Cutting-edge solutions designed for African healthcare.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200 hover:bg-gray-100 transition-colors shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
              <p className="text-gray-600">Working closely with hospitals and health organizations.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-50 border-gray-200 hover:bg-gray-100 transition-colors shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-[#00B3E6]" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Impact</h4>
              <p className="text-gray-600">Measurable improvements in patient care and system efficiency.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
