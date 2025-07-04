"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#00B3E6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MediLink</span>
            <span className="text-sm text-gray-500">by Vortan</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#product" className="text-gray-600 hover:text-gray-900 transition-colors">
              Product
            </Link>
            <Link href="#platform" className="text-gray-600 hover:text-gray-900 transition-colors">
              Platform
            </Link>
            <Link href="#insights" className="text-gray-600 hover:text-gray-900 transition-colors">
              Insights
            </Link>
            <Link href="#downloads" className="text-gray-600 hover:text-gray-900 transition-colors">
              Downloads
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
            >
              Book Demo
            </Button>
            <Button className="bg-[#00B3E6] hover:bg-[#008CC4] text-white">Join Waitlist</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="#product" className="text-gray-600 hover:text-gray-900 transition-colors">
                Product
              </Link>
              <Link href="#platform" className="text-gray-600 hover:text-gray-900 transition-colors">
                Platform
              </Link>
              <Link href="#insights" className="text-gray-600 hover:text-gray-900 transition-colors">
                Insights
              </Link>
              <Link href="#downloads" className="text-gray-600 hover:text-gray-900 transition-colors">
                Downloads
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 bg-transparent"
                >
                  Book Demo
                </Button>
                <Button className="bg-[#00B3E6] hover:bg-[#008CC4] text-white">Join Waitlist</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
