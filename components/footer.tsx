import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Linkedin, Twitter, Github, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#00B3E6] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-white">MediLink</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming healthcare through digital infrastructure.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>Based in East Africa</span>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Product</h4>
            <div className="space-y-2">
              <Link href="#product" className="block text-gray-400 hover:text-white transition-colors text-sm">
                MediLink Device
              </Link>
              <Link href="#platform" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Platform
              </Link>
              <Link href="#quicklog" className="block text-gray-400 hover:text-white transition-colors text-sm">
                QuickLog
              </Link>
              <Link href="#insights" className="block text-gray-400 hover:text-white transition-colors text-sm">
                AI Insights
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <div className="space-y-2">
              <Link href="/downloads" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Downloads
              </Link>
              <Link href="/docs" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Documentation
              </Link>
              <Link href="/api" className="block text-gray-400 hover:text-white transition-colors text-sm">
                API Reference
              </Link>
              <Link href="/support" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Support
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-[#00B3E6]" />
                <a href="mailto:support@medlink.vortan.io" className="text-gray-400 hover:text-white transition-colors">
                  support@medlink.vortan.io
                </a>
              </div>
              <div className="flex space-x-3">
                <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-800 text-gray-400 hover:text-white">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-800 text-gray-400 hover:text-white">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-800 text-gray-400 hover:text-white">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-gray-800 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-500">© 2024 Vortan. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
