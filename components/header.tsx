"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Logo from "./logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            {/* <div className="flex items-center space-x-2 cursor-pointer" > */}
              <Logo className="w-32 h-20"  />
               
            {/* </div> */}

          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#product" className="text-gray-400 hover:text-white transition-colors  hover:underline">
              Product
            </Link>
            <Link href="/#platform" className="text-gray-400 hover:text-white transition-colors hover:underline">
              Platform
            </Link>
            <Link href="/#insights" className="text-gray-400 hover:text-white transition-colors  hover:underline">
              Insights
            </Link>
            <Link href="/downloads" className="text-gray-400 hover:text-white transition-colors  hover:underline">
              Downloads
            </Link>

          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 cursor-pointer hover:bg-gray-800 hover:text-white bg-transparent"
            >
              <Link
                href={"https://wa.me/255624445123"}
                target="_blank"
              >
                Book Demo
              </Link>
            </Button>
            {/* <Button className="bg-[#00B3E6] hover:bg-[#008CC4] text-white">Join Waitlist</Button> */}
            <Button asChild className="bg-[#00B3E6] cursor-pointer hover:bg-[#008CC4] text-white">
              <Link href="#waitlist" className="cursor-pointer">
                Join Waitlist
              </Link>
            </Button>
          </div>

          <button className="md:hidden  text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="#product" className="text-gray-400 hover:text-white transition-colors hover:underline">
                Product
              </Link>
              <Link href="#platform" className="text-gray-400 hover:text-white transition-colors hover:underline">
                Platform
              </Link>
              <Link href="#insights" className="text-gray-400 hover:text-white transition-colors hover:underline">
                Insights
              </Link>
              <Link href="/downloads" className="text-gray-400 hover:text-white transition-colors hover:underline">
                Downloads
              </Link>

              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800  hover:text-white bg-transparent  cursor-pointer"
                >
                  <Link
                    href={"https://wa.me/255624445123"}
                    target="_blank"
                  >
                    Book Demo
                  </Link>
                </Button>
                <Button asChild className="bg-[#00B3E6] cursor-pointer hover:bg-[#008CC4] text-white">
                  <Link href="#waitlist" className="cursor-pointer">
                    Join Waitlist
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
