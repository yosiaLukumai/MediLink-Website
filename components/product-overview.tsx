// import { Card, CardContent } from "@/components/ui/card"
// import { Wifi, Usb, Radio, Shield, Globe, Cpu } from "lucide-react"
// import Image from "next/image"

// export function ProductOverview() {
//   return (
//     <section id="product" className="py-20 px-6 bg-white text-black">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             One Device. <span className="text-[#00B3E6]">Infinite Possibilities.</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             MediLink transforms any hospital machine into a smart, connected device with our modular interface system
//             designed for African healthcare infrastructure.
//           </p>
//         </div>

//         < div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           <div>
//             {/* <img
//               src="/gatewaypic.JPG"
//               alt="MediLink Gateway Hub"
//               className="w-full h-auto rounded-2xl shadow-xl"
//             /> */}

//             <Image
//               width={600}
//               height={500}
//               src="/gatewaypic.JPG"
//               alt="Gateway Hub"
//               className="w-full h-auto rounded-2xl shadow-2xl"
//             />
//           </div>
//           <div className="space-y-6">
//             <h3 className="text-3xl font-bold">MediLink Device</h3>
//             <p className="text-gray-600 text-lg">
//               Our flagship device connects to any hospital machine through multiple interfaces, ensuring compatibility
//               with both legacy and modern equipment.
//             </p>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="flex items-center space-x-3">
//                 <Usb className="h-6 w-6 text-[#00B3E6]" />
//                 <span className="text-gray-700">RS232 + USB Host</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Wifi className="h-6 w-6 text-[#00B3E6]" />
//                 <span className="text-gray-700">Wi-Fi + Ethernet</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Radio className="h-6 w-6 text-[#00B3E6]" />
//                 <span className="text-gray-700">LoRa Long Range</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Shield className="h-6 w-6 text-[#00B3E6]" />
//                 <span className="text-gray-700">Encrypted Data</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6 lg:order-2">
//             <h3 className="text-3xl font-bold">Gateway Hub</h3>
//             <p className="text-gray-600 text-lg">
//               The central hub that aggregates data from multiple MediLink devices and ensures reliable connectivity even
//               in challenging network conditions.
//             </p>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="flex items-center space-x-3">
//                 <Globe className="h-6 w-6 text-[#00B3E6]" />
//                 <span className="text-gray-700">4G + Ethernet</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Radio className="h-6 w-6 text-[#00B3E6]" />
//                 <span className="text-gray-700">LoRa Gateway</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Cpu className="h-6 w-6 text-[#00B3E6]" />
//                 <span className="text-gray-700">Edge Processing</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Shield className="h-6 w-6 text-[#00B3E6]" />
//                 <span className="text-gray-700">Offline Sync</span>
//               </div>
//             </div>
//           </div>
//           <div className="lg:order-1">
//             {/* <img
//               src="/demo_product.webp"
//               alt="Gateway Hub"
//               className="w-full h-auto rounded-2xl shadow-xl"
//             /> */}

//             <Image
//               width={600}
//               height={500}
//               src="/demo_product.webp"
//               alt="Gateway Device"
//               className="w-full h-auto rounded-2xl shadow-2xl"
//             />

//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 mt-16">
//           <Card className="bg-gray-50 border-gray-200 hover:bg-gray-100 transition-colors shadow-sm">
//             <CardContent className="p-6 text-center">
//               <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Wifi className="h-6 w-6 text-[#00B3E6]" />
//               </div>
//               <h4 className="text-xl font-semibold mb-2">No Wi-Fi? No Problem</h4>
//               <p className="text-gray-600">Works offline and syncs data when connectivity is restored.</p>
//             </CardContent>
//           </Card>
//           <Card className="bg-gray-50 border-gray-200 hover:bg-gray-100 transition-colors shadow-sm">
//             <CardContent className="p-6 text-center">
//               <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Cpu className="h-6 w-6 text-[#00B3E6]" />
//               </div>
//               <h4 className="text-xl font-semibold mb-2">Modular Interface</h4>
//               <p className="text-gray-600">Compatible with legacy and modern hospital machines.</p>
//             </CardContent>
//           </Card>
//           <Card className="bg-gray-50 border-gray-200 hover:bg-gray-100 transition-colors shadow-sm">
//             <CardContent className="p-6 text-center">
//               <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <Shield className="h-6 w-6 text-[#00B3E6]" />
//               </div>
//               <h4 className="text-xl font-semibold mb-2">Secure Transmission</h4>
//               <p className="text-gray-600">Hospital-grade encryption ensures patient data remains private.</p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }



import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Wifi,
  Usb,
  Radio,
  Shield,
  Globe,
  Cpu,
  Zap,
  Activity,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Signal,
  Settings,
  EthernetPort,
} from "lucide-react"
import Image from "next/image"

export function ProductOverview() {
  return (
    <section id="product" className="py-20 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            One Ecosystem. <span className="text-[#00B3E6]">Two Powerful Components.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {/* MediLink transforms any hospital machine into a smart, connected device with our modular interface system
            designed for African healthcare infrastructure. */}
            MediLink transforms any hospital machine into a smart, connected device with our
             
            modular interface system built for diverse healthcare environments.

          </p>
        </div>

        {/* MediLink Device Section */}
        <div className="mb-32">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#00B3E6] rounded-xl flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">MediLink Device</h3>
                      <p className="text-gray-600">The Universal Hospital Interface</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    Connects directly to any hospital machine through multiple interfaces, instantly digitizing analog
                    readings and transforming legacy equipment into smart, connected devices.
                  </p>
                </div>

                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-white border border-gray-200">
                    <TabsTrigger
                      value="features"
                      className="data-[state=active]:bg-[#00B3E6] data-[state=active]:text-white"
                    >
                      Features
                    </TabsTrigger>
                    <TabsTrigger
                      value="specs"
                      className="data-[state=active]:bg-[#00B3E6] data-[state=active]:text-white"
                    >
                      Specifications
                    </TabsTrigger>
                    <TabsTrigger
                      value="scenarios"
                      className="data-[state=active]:bg-[#00B3E6] data-[state=active]:text-white"
                    >
                      Use Cases
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="features" className="space-y-4 mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
                        <Usb className="h-5 w-5 text-[#00B3E6]" />
                        <span className="text-sm font-medium">RS232 + USB Host</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
                        <Wifi className="h-5 w-5 text-[#00B3E6]" />
                        <span className="text-sm font-medium">Wi-Fi + Ethernet</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
                        <Radio className="h-5 w-5 text-[#00B3E6]" />
                        <span className="text-sm font-medium">LoRa Long Range</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
                        <Shield className="h-5 w-5 text-[#00B3E6]" />
                        <span className="text-sm font-medium">AES-256 Encryption</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Activity className="h-4 w-4 text-[#00B3E6] mr-2" />
                        Real-Time Data Processing
                      </h4>
                      <p className="text-sm text-gray-600">
                        Processes and validates data locally before transmission, ensuring accuracy and reducing
                        bandwidth usage.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="specs" className="space-y-4 mt-6">
                    <div className="grid grid-cols-1 gap-4">
                      <Card className="bg-white border-gray-200">
                        <CardContent className="p-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-gray-500">Processor:</span>
                              <p className="font-semibold">Xtensa LX7 32-bit</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-500">Memory:</span>
                              <p className="font-semibold">8Mb Flash, 512KB RAM</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-500">Power:</span>
                              <p className="font-semibold">5V DC, 2A max</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-500">Operating Temp:</span>
                              <p className="font-semibold">-10°C to +60°C</p>
                            </div>
                            <div>
                              <span className="font-medium text-gray-500">Dimensions:</span>
                              <p className="font-semibold">120 × 80 × 35mm</p>
                            </div>
                            {/* <div>
                              <span className="font-medium text-gray-500">Certification:</span>
                              <p className="font-semibold">CE, FCC, ISO 13485</p>
                            </div> */}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="scenarios" className="space-y-4 mt-6">
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-[#00B3E6] mb-1">Patient Monitoring</h4>
                        <p className="text-sm text-gray-600">
                          Connect to vital sign monitors, ECG machines, and pulse oximeters for continuous patient data
                          streaming.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-[#00B3E6] mb-1">Laboratory Equipment</h4>
                        <p className="text-sm text-gray-600">
                          Interface with blood analyzers, chemistry analyzers, and diagnostic equipment for automated
                          result logging.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-[#00B3E6] mb-1">Infusion & Therapy</h4>
                        <p className="text-sm text-gray-600">
                          Monitor infusion pumps, dialysis machines, and ventilators for treatment compliance and safety
                          alerts.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 shadow-xl">
                  {/* <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="MediLink Device"
                    className="w-full h-auto rounded-xl"
                  /> */}

                  <Image
                    width={600}
                    height={500}
                    src="/metal.png"
                    alt="Gateway Hub"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />



                  {/* Interactive Connection Points */}
                  <div className="absolute top-8 right-8 space-y-2">
                    <div className="flex items-center space-x-2 bg-[#00B3E6] text-white px-3 py-1 rounded-full text-xs font-medium">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span>Live Connection</span>
                    </div>
                  </div>

                  {/* Connection Indicators */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center space-x-1">
                          <Signal className="h-3 w-3 text-green-500" />
                          <span className="text-gray-600">LoRa: Strong</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Wifi className="h-3 w-3 text-green-500" />
                          <span className="text-gray-600">WiFi: Connected</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <EthernetPort className="h-3 w-3 text-green-500" />
                          <span className="text-gray-600">Ethernet: OK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gateway Hub Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 border border-gray-800 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-gray-700 shadow-2xl">
                  {/* <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Gateway Hub"
                    className="w-full h-auto rounded-xl"
                  /> */}

                  <Image
                    width={600}
                    height={500}
                    src="/piv.png"
                    alt="Gateway Device"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />



                  {/* Network Visualization */}
                  <div className="absolute top-6 left-6 right-6">
                    <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 border border-gray-600">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-300">Max Devices</span>
                        <span className="text-[#00B3E6] font-bold">120</span>
                      </div>
                      {/* <div className="mt-2 flex space-x-1">
                        {[...Array(100)].map((_, i) => (
                          <div key={i} className="w-1 h-4 bg-[#00B3E6] rounded-full opacity-80"></div>
                        ))}
                        <div className="w-1 h-4 bg-gray-600 rounded-full"></div>
                      </div> */}
                    </div>
                  </div>

                  {/* Data Flow Indicator */}
                  <div className="absolute bottom-6 right-6">
                    <div className="bg-[#00B3E6] text-white px-3 py-2 rounded-lg text-xs font-medium">
                      <div className="flex items-center space-x-2">
                        <Database className="h-3 w-3" />
                        <span>Syncing Data...</span>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 lg:order-2">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00B3E6] to-[#007BFF] rounded-xl flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Gateway Hub</h3>
                      <p className="text-gray-400">The Central Command Center</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    Aggregates data from multiple MediLink devices, ensures reliable connectivity, and provides
                    intelligent edge processing for optimal performance in challenging network conditions.
                  </p>
                </div>

                <Tabs defaultValue="capabilities" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-800 border border-gray-700">
                    <TabsTrigger
                      value="capabilities"
                      className="data-[state=active]:bg-[#00B3E6] data-[state=active]:text-white text-gray-300"
                    >
                      Capabilities
                    </TabsTrigger>
                    <TabsTrigger
                      value="technical"
                      className="data-[state=active]:bg-[#00B3E6] data-[state=active]:text-white text-gray-300"
                    >
                      Technical
                    </TabsTrigger>
                    <TabsTrigger
                      value="deployment"
                      className="data-[state=active]:bg-[#00B3E6] data-[state=active]:text-white text-gray-300"
                    >
                      Deployment
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="capabilities" className="space-y-4 mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <Globe className="h-5 w-5 text-[#00B3E6]" />
                        <span className="text-sm font-medium text-gray-300">4G + WiFi</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <Radio className="h-5 w-5 text-[#00B3E6]" />
                        <span className="text-sm font-medium text-gray-300">LoRa Gateway</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <Cpu className="h-5 w-5 text-[#00B3E6]" />
                        <span className="text-sm font-medium text-gray-300">Edge Processing</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <EthernetPort className="h-5 w-5 text-[#00B3E6]" />
                        <span className="text-sm font-medium text-gray-300">Ethernet</span>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <h4 className="font-semibold mb-2 flex items-center text-white">
                        <Cloud className="h-4 w-4 text-[#00B3E6] mr-2" />
                        Intelligent Data Management
                      </h4>
                      <p className="text-sm text-gray-400">
                        Automatically prioritizes critical data, compresses non-urgent information, and manages offline
                        sync queues.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="technical" className="space-y-4 mt-6">
                    <Card className="bg-gray-800 border-gray-700">
                      <CardContent className="p-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-500">Processor:</span>
                            <p className="font-semibold text-gray-300">Xtensa LX7 32-bit</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-500">Memory:</span>
                            <p className="font-semibold text-gray-300">512KB RAM,8MB Flash</p>
                          </div>
                          {/* <div>
                            <span className="font-medium text-gray-500">Storage:</span>
                            <p className="font-semibold text-gray-300">1TB SSD (expandable)</p>
                          </div> */}
                          <div>
                            <span className="font-medium text-gray-500">Connectivity:</span>
                            <p className="font-semibold text-gray-300">4G LTE, Ethernet, WiFi</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-500">LoRa Range:</span>
                            <p className="font-semibold text-gray-300">Up to 2km (rural)</p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-500">Device Capacity:</span>
                            <p className="font-semibold text-gray-300">Up to 120 MediLink devices</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="deployment" className="space-y-4 mt-6">
                    <div className="space-y-3">
                      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <h4 className="font-semibold text-[#00B3E6] mb-1">Hospital-Wide Coverage</h4>
                        <p className="text-sm text-gray-400">
                          Single hub covers entire hospital campus with LoRa long-range connectivity.
                        </p>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <h4 className="font-semibold text-[#00B3E6] mb-1">Multi-Site Management</h4>
                        <p className="text-sm text-gray-400">
                          Centralized management of multiple hospital locations from single dashboard.
                        </p>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <h4 className="font-semibold text-[#00B3E6] mb-1">Redundant Connectivity</h4>
                        <p className="text-sm text-gray-400">
                          Automatic failover between 4G, Ethernet, and WiFi for maximum uptime.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>

        {/* System Integration Overview */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-[#00B3E6]">Seamless Integration</span> Ecosystem
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Both components work together to create a comprehensive healthcare digitization solution that adapts to
              your infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-6 w-6 text-[#00B3E6]" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Plug & Play Setup</h4>
                <p className="text-gray-600 text-sm">
                  Auto-discovery and configuration make deployment effortless for any hospital environment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-6 w-6 text-[#00B3E6]" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Universal Compatibility</h4>
                <p className="text-gray-600 text-sm">
                  Works with legacy and modern equipment from all major medical device manufacturers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-[#00B3E6]" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Multi-Platform Access</h4>
                <p className="text-gray-600 text-sm">
                  Access your data through web portals, mobile web apps, or direct API integration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
