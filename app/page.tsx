import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full bg-white min-h-screen bg-no-repeat bg-[length:100%] py-5 lg:py-10 px-5 lg:px-10" style={{ backgroundImage: "url('/images/bg.png')" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="block">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column  */}
                <aside id="company-info-sidebar" className="lg:col-span-4 space-y-8 mt-16">
                    <div id="logo-section" className="flex flex-col items-start">
                        <div className="text-6xl font-bold tracking-wider">
                            <span className="text-green-500">E</span><span className="text-orange-500">N</span><span className="text-green-500">C</span><span className="text-orange-500">O</span>
                        </div>
                        <p className="text-2xl font-semibold text-gray-700 tracking-[0.2em] ml-1">MECHANICAL</p>
                    </div>

                    <div id="slogan-banner" className="p-1 rounded-full bg-gradient-to-r from-cyan-400 to-yellow-300 shadow-lg">
                        <div className="bg-white rounded-full px-6 py-3">
                            <p className="text-center text-lg font-semibold text-gray-800">A Reliable HVAC Solution Provider That You Can Trust On</p>
                        </div>
                    </div>
                    
                    <div id="core-services-list" className="space-y-4 text-gray-700 text-lg">
                        <div className="flex items-center gap-4">
                            <i className="text-2xl text-gray-600 w-8 text-center" data-fa-i2svg=""><svg className="svg-inline--fa fa-helmet-safety" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="helmet-safety" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M256 32c-17.7 0-32 14.3-32 32v2.3 99.6c0 5.6-4.5 10.1-10.1 10.1c-3.6 0-7-1.9-8.8-5.1L157.1 87C83 123.5 32 199.8 32 288v64H544l0-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1c-5.6 0-10.1-4.5-10.1-10.1V66.3 64c0-17.7-14.3-32-32-32H256zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6H16.6z"></path></svg></i>
                            <span className="font-medium">Professional Installations (New &amp; Replacement)</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="text-2xl text-gray-600 w-8 text-center" data-fa-i2svg=""><svg className="svg-inline--fa fa-screwdriver-wrench" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="screwdriver-wrench" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path></svg></i>
                            <span className="font-medium">Service &amp; Repair</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="text-2xl text-gray-600 w-8 text-center" data-fa-i2svg=""><svg className="svg-inline--fa fa-shield-halved" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-halved" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"></path></svg></i>
                            <span className="font-medium">Preventive Maintenance</span>
                        </div>
                    </div>

                    <div id="contact-us-banner" className="p-1 rounded-full bg-gradient-to-r from-cyan-400 to-yellow-300 shadow-lg mt-10">
                         <div className="bg-white rounded-full px-6 py-3">
                            <h3 className="text-center text-xl font-bold text-gray-800">Contact Us</h3>
                        </div>
                    </div>

                    <div id="contact-details" className="space-y-4 text-gray-600">
                        <div className="flex items-start gap-4">
                            <i className="text-xl text-gray-500 mt-1 w-6 text-center" data-fa-i2svg=""><svg className="svg-inline--fa fa-location-dot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></i>
                            <span className="font-medium">10 Milner Business Court, Suite -300, Scarborough, ON M1B 3C6</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="text-xl text-gray-500 w-6 text-center" data-fa-i2svg=""><svg className="svg-inline--fa fa-phone" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg></i>
                            <span className="font-medium">647-335-3929</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <i className="text-xl text-gray-500 w-6 text-center" data-fa-i2svg=""><svg className="svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></i>
                            <span className="font-medium">sayed.zencomech@gmail.com</span>
                        </div>
                    </div>
                </aside>

                {/* Right Column */}
                <section id="services-showcase" className="lg:col-span-8">
                    <div id="services-title-wrapper" className="text-center mb-8">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-wide">HVAC &amp; PLUMBING SERVICES</h1>
                        <div className="w-64 h-1.5 bg-gradient-to-r from-orange-400 to-green-500 mx-auto mt-2 rounded-full"></div>
                    </div>
                    
                    <div id="services-visual-cluster" className="relative h-[650px] w-full mt-10">
                        {/* Main Technician Image */}
                        <div id="technician-image-container" className="absolute right-[5%] top-[20%] w-[400px] h-[400px] z-10">
                            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white">
                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b2d4ae3561-86f289713cb29ad6cb9c.png" alt="hvac technician in a hard hat working on an outdoor air conditioning unit on a sunny rooftop, detailed shot"/>
                            </div>
                        </div>

                        {/* Service Bubbles  */}
                        <div id="service-bubble-ac" className="service-bubble absolute top-[5%] left-[35%] z-20">
                            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fce8635bae-a561ec6a115835379218.png" alt="modern white indoor air conditioner unit mounted on a wall, minimalist style"/>
                            </div>
                            <span className="service-label bg-cyan-200">Air Conditioner</span>
                        </div>

                        <div id="service-bubble-furnace" className="service-bubble absolute top-[10%] right-[10%] z-20">
                             <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f65cee559e-a5031d85e5dbb3ca3806.png" alt="technician inspecting a modern high-efficiency gas furnace in a basement"/>
                            </div>
                            <span className="service-label bg-orange-200">Furnace</span>
                        </div>

                        <div id="service-bubble-heatpump" className="service-bubble absolute top-[25%] left-[20%] z-0">
                            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/16a5dabff0-b5155cbf381d91b0ef97.png" alt="close-up of a sleek white wall-mounted heat pump unit"/>
                            </div>
                            <span className="service-label bg-yellow-200">Heat Pump</span>
                        </div>

                        <div id="service-bubble-ductwork" className="service-bubble absolute top-1/2 left-[5%] z-0 -translate-y-1/2">
                            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0a2f58a86b-037b0abe5f8724146d77.png" alt="worker installing flexible HVAC ductwork in an attic space"/>
                            </div>
                            <span className="service-label bg-cyan-200">HVAC Ductwork</span>
                        </div>

                        <div id="service-bubble-humidifier" className="service-bubble absolute bottom-[20%] left-[20%] z-20">
                            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d2bf93464c-6ab5f41054902e08c28b.png" alt="whole-house humidifier unit connected to ductwork, clean and professional"/>
                            </div>
                            <span className="service-label bg-blue-200">Humidifier</span>
                        </div>

                        <div id="service-bubble-plumbing" className="service-bubble absolute bottom-[5%] left-1/2 z-20 -translate-x-1/2">
                            <div className="w-44 h-44 rounded-full overflow-hidden shadow-lg border-4 border-white">
                               <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/786c7a302f-539a7051be5843b25590.png" alt="exposed copper and PEX plumbing pipes in a new construction wall frame"/>
                            </div>
                            <span className="service-label bg-yellow-200">Plumbing</span>
                        </div>

                        <div id="service-bubble-waterheater" className="service-bubble absolute bottom-[10%] right-[5%] z-20">
                            <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4665c267e8-3e6a4bf06fa61392d602.png" alt="modern tankless water heater mounted on a clean basement wall"/>
                            </div>
                            <span className="service-label bg-cyan-200">Tank &amp; Tankless Water Heater</span>
                        </div>
                        
                        <div id="area-of-services-banner" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 px-10 py-4 rounded-full bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 shadow-xl">
                            <h3 className="text-2xl font-bold text-white whitespace-nowrap">Area Of Services</h3>
                        </div>
                    </div>
                </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
