"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Building } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"


async function submitForm(data: { email: string; organization: string; country: string; role: string; message: string; }) {
  try {

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit form');
    }

    return await response.json();
  } catch {

    return { success: false, message: "Something went wrong. Please try again later." };
  }
}

export function WaitlistSection() {
  const [formData, setFormData] = useState({
    email: "",
    organization: "",
    country: "",
    role: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault()
      if (!formData.email || !formData.country || !formData.message) {
        toast.error("Please fill in all the fields");
        return;
      }
      const response = await submitForm(formData);
      if (response.success) {
        toast.success("Thank you for your submission!");
      } else {
        toast.error(response.message || "Something went wrong. Please try again later.");
      }
    } catch {
      toast.error("Something went wrong. Please try again later.");
    }

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="waitlist" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Join the <span className="text-[#00B3E6]">Healthcare Revolution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hospitals, partners, and governments transforming care through digital infrastructure. Be among the
            first to experience MediLink in your facility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-50 border-gray-200 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="h-6 w-6 text-[#00B3E6]" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Hospitals</h4>
                  <p className="text-gray-600 text-sm">Already expressing interest across East Africa</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 border-gray-200 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-[#00B3E6]" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Healthcare Partners</h4>
                  <p className="text-gray-600 text-sm">Collaborating with leading medical institutions</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Why Join Early?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#00B3E6] rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Priority Access</h4>
                    <p className="text-gray-600 text-sm">Be first to deploy MediLink in your facility</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#00B3E6] rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Special Pricing</h4>
                    <p className="text-gray-600 text-sm">Exclusive early adopter discounts and packages</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#00B3E6] rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Shape the Product</h4>
                    <p className="text-gray-600 text-sm">Direct input on features and customizations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-center">Join the Waitlist</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="space-y-2 w-full">
                  <label className="text-sm font-medium text-gray-700">Your Role</label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                  >
                    <SelectTrigger className="w-full bg-gray-100 border-gray-300 text-gray-900">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hospital-admin">Hospital Administrator</SelectItem>
                      <SelectItem value="biomedical-engineer">Biomedical Engineer</SelectItem>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="researcher">Researcher</SelectItem>
                      <SelectItem value="government">Government Official</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>


                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your.email@hospital.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Organization</label>
                  <Input
                    placeholder="Hospital or Organization Name"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Country</label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) => setFormData({ ...formData, country: value })}
                  >
                    <SelectTrigger className="bg-gray-100 w-full border-gray-300 text-gray-900">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tanzania">Tanzania</SelectItem>
                      <SelectItem value="kenya">Kenya</SelectItem>
                      <SelectItem value="uganda">Uganda</SelectItem>
                      <SelectItem value="rwanda">Rwanda</SelectItem>
                      <SelectItem value="ethiopia">Ethiopia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    className="min-h-[60px] border-gray-700 bg-white/10  text-black placeholder:text-white/50 focus:border-gray-800"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#00B3E6] hover:bg-[#008CC4] text-white py-3">
                  Join Waitlist
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                {/* <p>We'll keep you updated on our progress and notify you when MediLink is ready for deployment.</p> */}
                <p>MediLink is entering its final phase. We&apos;re gearing up for deployment and will notify you as soon as it&apos;s ready.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
