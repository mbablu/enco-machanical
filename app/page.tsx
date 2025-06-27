import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <>
        <section className="bg-gray-50 font-poppins">

            <header id="header" className="bg-white shadow-md sticky top-0 z-50">
                <nav id="navbar" className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <div id="logo-container" className="flex flex-col items-start">
                        {/* <div className="text-3xl font-bold tracking-wider">
                            <span className="text-green-500">E</span><span className="text-orange-500">N</span><span className="text-green-500">C</span><span className="text-orange-500">O</span>
                        </div>
                        <p className="text-sm font-semibold text-gray-700 tracking-[0.15em] ml-0.5">MECHANICAL</p> */}
                        <Link href="/"><img className="max-h-[80px]" src="./images/logo.png" alt="logo" /></Link>
                    </div>
                    <div id="nav-links" className="flex items-center space-x-2 lg:space-x-8">
                        <Link href="/" className="text-brand-orange font-bold border-b-2 border-brand-orange pb-1 cursor-pointer">
                            Home
                        </Link>
                        <Link href="/service" className="text-gray-600 hover:text-brand-orange font-semibold transition duration-300 cursor-pointer">Services</Link>
                        {/* <Link href="/about-us" className="text-brand-orange font-bold border-b-2 border-brand-orange pb-1 cursor-pointer" >About Us</Link> */}
                        <Link href="/contact-us" className="text-gray-600 hover:text-brand-orange font-semibold transition duration-300 cursor-pointer">Contact</Link>
                    </div>
                    <button id="mobile-menu-button" className="md:hidden text-gray-700">
                        <i className="text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg></i>
                    </button>
                </nav>
            </header>

            <main id="about-us-main">
                <section id="about-hero" className="relative bg-white overflow-hidden h-[450px] flex items-center">
                    <div id="hero-background-swoosh" className="absolute top-0 right-0 h-full w-2/5 bg-orange-400 opacity-90" style={{ clipPath: "ellipse(80% 100% at 100% 50%)" }}></div>
                    <div id="hero-content" className="container mx-auto px-6 z-10">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">Your Trusted Partner in <span className="text-orange-500">HVAC  & PLUMBING Solutions</span></h1>
                            <p className="mt-4 text-lg text-gray-600">Learn about our journey, our commitment to quality, and the dedicated professionals who make it all happen.</p>
                        </div>
                    </div>
                </section>

                
                {/* className="text-brand-orange font-bold border-b-2 border-brand-orange pb-1 cursor-pointer" */}
                <section className="w-full bg-white lg:min-h-screen bg-no-repeat bg-[length:100%] py-5 lg:py-10 px-5 lg:px-10 relative">
                    <div id="background-decoration-right" className="absolute top-0 right-0 h-full w-1/3 z-0 hidden">
                        <div className="h-full w-full bg-orange-400 opacity-90 clip-path-swoosh"></div>
                    </div>
                    <div className="max-w-[1400px] mx-auto">
                        <div className="block">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                
                                {/* Left Column  */}
                                <aside id="company-info-sidebar" className="lg:col-span-4 space-y-8 mt-16">
                                    <div id="logo-section" className="flex flex-col items-start">
                                        {/* <div className="text-6xl font-bold tracking-wider">
                                            <span className="text-green-500">E</span><span className="text-orange-500">N</span><span className="text-green-500">C</span><span className="text-orange-500">O</span>
                                        </div>
                                        <p className="text-2xl font-semibold text-gray-700 tracking-[0.2em] ml-1">MECHANICAL</p> */}
                                        {/* <Link href="/"><img className="max-h-[80px]" src="./images/logo.png" alt="logo" /></Link> */}
                                    </div>

                                    <div id="slogan-banner" className="p-1 rounded-full bg-gradient-to-r from-cyan-400 to-yellow-300 shadow-lg">
                                        <div className="bg-[#ff8904] rounded-full px-6 py-3">
                                            <p className="text-center text-lg font-semibold  text-white">A Reliable HVAC Solution Provider That You Can Trust On</p>
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

                                    <div id="contact-us-banner" className="rounded-full bg-gradient-to-r from-cyan-400 to-yellow-300 shadow-lg mt-10">
                                        <div className="bg-white border border-amber-400 rounded-full px-6 py-3">
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
                                            <a href="tel:6473353929" className="font-medium">647-948-9474</a>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <i className="text-xl text-gray-500 w-6 text-center" data-fa-i2svg=""><svg className="svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></i>
                                            <a href="mailto:sayed.zencomech@gmail.com" className="font-medium">sayed.zencomech@gmail.com</a>

                                        </div>
                                    </div>
                                </aside>

                                {/* Right Column */}
                                <section id="services-showcase" className="lg:col-span-8">
                                    {/* <div id="services-title-wrapper" className="text-center mb-8">
                                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-wide">HVAC &amp; PLUMBING SERVICES</h1>
                                        <div className="w-64 h-1.5 bg-gradient-to-r from-orange-400 to-green-500 mx-auto mt-2 rounded-full"></div>
                                    </div> */}
                                    
                                    <div id="services-visual-cluster" className="relative lg:h-[650px] w-full mt-10">
                                        <div id="area-of-services-banner" className="lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-30 px-10 py-4 rounded-full bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 shadow-xl bg-[#ff8904] mb-6 lg:mb-0">
                                            <h3 className="text-2xl font-bold text-white whitespace-nowrap">Area Of Services</h3>
                                        </div>
                                        {/* Main Technician Image */}
                                        <div id="technician-image-container" className="lg:absolute right-[5%] top-[20%] w-[400px] h-[400px] z-10">
                                            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white mb-5 lg:mb-0">
                                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b2d4ae3561-86f289713cb29ad6cb9c.png" alt="hvac technician in a hard hat working on an outdoor air conditioning unit on a sunny rooftop, detailed shot"/>
                                            </div>
                                        </div>

                                        {/* Service Bubbles  */}
                                        <div id="service-bubble-ac" className="service-bubble lg:absolute top-[5%] left-[35%] z-20 mb-5 lg:mb-0 flex lg:block items-center">
                                            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fce8635bae-a561ec6a115835379218.png" alt="modern white indoor air conditioner unit mounted on a wall, minimalist style"/>
                                            </div>
                                            <span className="block lg:inline service-label bg-cyan-200">Air Conditioner</span>
                                        </div>

                                        <div id="service-bubble-furnace" className="service-bubble lg:absolute top-[10%] right-[10%] z-20 mb-5 lg:mb-0 flex lg:block items-center">
                                            <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f65cee559e-a5031d85e5dbb3ca3806.png" alt="technician inspecting a modern high-efficiency gas furnace in a basement"/>
                                            </div>
                                            <span className="block lg:inline service-label bg-orange-200">Furnace</span>
                                        </div>

                                        <div id="service-bubble-heatpump" className="service-bubble lg:absolute top-[25%] left-[20%] z-0 mb-5 lg:mb-0 flex lg:block items-center">
                                            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/16a5dabff0-b5155cbf381d91b0ef97.png" alt="close-up of a sleek white wall-mounted heat pump unit"/>
                                            </div>
                                            <span className="block lg:inline service-label bg-yellow-200 relative lg:left-4">Heat Pump</span>
                                        </div>

                                        <div id="service-bubble-ductwork" className="service-bubble lg:absolute top-1/2 left-[5%] z-0 lg:-translate-y-1/2 mb-5 lg:mb-0 flex lg:block items-center">
                                            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0a2f58a86b-037b0abe5f8724146d77.png" alt="worker installing flexible HVAC ductwork in an attic space"/>
                                            </div>
                                            <span className="block lg:inline service-label bg-cyan-200">HVAC Ductwork</span>
                                        </div>

                                        <div id="service-bubble-humidifier" className="service-bubble lg:absolute bottom-[20%] left-[20%] z-20 mb-5 lg:mb-0 flex lg:block items-center">
                                            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d2bf93464c-6ab5f41054902e08c28b.png" alt="whole-house humidifier unit connected to ductwork, clean and professional"/>
                                            </div>
                                            <span className="block lg:inline service-label bg-blue-200">Humidifier</span>
                                        </div>

                                        <div id="service-bubble-plumbing" className="service-bubble lg:absolute bottom-[5%] left-1/2 z-20 lg:-translate-x-1/2 mb-5 lg:mb-0 flex lg:block items-center">
                                            <div className="w-44 h-44 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                            <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/786c7a302f-539a7051be5843b25590.png" alt="exposed copper and PEX plumbing pipes in a new construction wall frame"/>
                                            </div>
                                            <span className="block lg:inline service-label bg-yellow-200">Plumbing</span>
                                        </div>

                                        <div id="service-bubble-waterheater" className="service-bubble lg:absolute bottom-[10%] right-[5%] z-20 mb-5 lg:mb-0 flex lg:block items-center">
                                            <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4665c267e8-3e6a4bf06fa61392d602.png" alt="modern tankless water heater mounted on a clean basement wall"/>
                                            </div>
                                            <span className="block lg:inline service-label bg-cyan-200">Tank &amp; Tankless Water Heater</span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="company-story" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div id="story-image-container">
                                <div className="rounded-xl shadow-2xl overflow-hidden">
                                    <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b3a0fb80db-a357bc90eb50230d0756.png" alt="a modern hvac company"/>
                                </div>
                            </div>
                            <div id="story-text-content">
                                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
                                <div className="w-32 h-1.5 bg-gradient-to-r from-orange-400 to-green-500 rounded-full mb-6"></div>
                                <p className="text-gray-600 mb-4">Founded on the principles of reliability and unparalleled customer service, Zenco Mechanical has grown from a small team of passionate technicians to a leading HVAC and plumbing provider in the region. Our journey is one of the continuous learning and adaptation, always staying ahead of industry advancements to bring you the most efficient and effective solutions.</p>
                                <p className="text-gray-600">We believe in building lasting relationships with our clients, founded on trust and the consistent delivery of quality workmanship. Every project, big or small, is an opportunity for us to prove our commitment to excellence.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="mission-vision" className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div id="mission-card" className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-gradient-to-tr from-cyan-400 to-green-400 p-3 rounded-full text-white">
                                        <i className="text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-bullseye" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullseye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg></i>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
                                </div>
                                <p className="text-gray-600">To provide reliable, high-quality HVAC and plumbing services that ensure the comfort and safety of our customers' homes and businesses. We strive to deliver exceptional workmanship and build enduring client relationships through integrity and professionalism.</p>
                            </div>
                            <div id="vision-card" className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-gradient-to-tr from-orange-400 to-yellow-400 p-3 rounded-full text-white">
                                        <i className="text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-eye" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg></i>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
                                </div>
                                <p className="text-gray-600">To be the most trusted and sought-after HVAC and plumbing service provider, known for our innovative solutions, commitment to sustainability, and a positive impact on the communities we serve. We aim to set the standard for excellence in our industry.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="team-section" className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-800">Meet Our Professionals</h2>
                            <p className="text-lg text-gray-600 mt-2">The dedicated experts behind our success.</p>
                            <div className="w-48 h-1.5 bg-gradient-to-r from-orange-400 to-green-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <div id="team-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div id="team-member-1" className="bg-white rounded-xl shadow-lg p-6 text-center group">
                                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-md group-hover:border-orange-300 transition-all duration-300"/>
                                <h4 className="text-xl font-bold text-gray-800">Sayed Z.</h4>
                                <p className="text-orange-500 font-medium mb-2">Founder &amp; Lead Technician</p>
                                <p className="text-gray-500 text-sm">With over 15 years of experience, Sayed leads our team with a passion for precision and customer satisfaction.</p>
                            </div>
                            <div id="team-member-2" className="bg-white rounded-xl shadow-lg p-6 text-center group">
                                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-md group-hover:border-orange-300 transition-all duration-300"/>
                                <h4 className="text-xl font-bold text-gray-800">Jessica Miller</h4>
                                <p className="text-orange-500 font-medium mb-2">Operations Manager</p>
                                <p className="text-gray-500 text-sm">Jessica ensures that all our operations run smoothly, from scheduling to project completion, guaranteeing a seamless client experience.</p>
                            </div>
                            <div id="team-member-3" className="bg-white rounded-xl shadow-lg p-6 text-center group">
                                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-md group-hover:border-orange-300 transition-all duration-300"/>
                                <h4 className="text-xl font-bold text-gray-800">David Chen</h4>
                                <p className="text-orange-500 font-medium mb-2">Senior Plumbing Expert</p>
                                <p className="text-gray-500 text-sm">David is our go-to expert for all things plumbing, bringing a wealth of knowledge and skill to every job.</p>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>

            <footer id="footer" className="bg-gray-800 text-gray-300">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div id="footer-about" className="md:col-span-1">
                            <div id="footer-logo-container" className="flex flex-col items-start mb-4">
                                {/* <div className="text-3xl font-bold tracking-wider">
                                    <span className="text-green-500">E</span><span className="text-orange-500">N</span><span className="text-green-500">C</span><span className="text-orange-500">O</span>
                                </div>
                                <p className="text-sm font-semibold text-gray-400 tracking-[0.15em] ml-0.5">MECHANICAL</p> */}
                                <Link href="/"><img className="max-h-[80px]" src="./images/logo.png" alt="logo" /></Link>
                            </div>
                            <p className="text-sm">A reliable HVAC and Plumbing solution provider that you can trust.</p>
                        </div>
                        <div id="footer-contact-details">
                            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <i className="text-orange-400 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-location-dot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></i>
                                    <span>10 Milner Business Court, Suite -300, Scarborough, ON M1B 3C6</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="text-orange-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-phone" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg></i>
                                    <a href="tel:6473353929" className="font-medium">647-948-9474</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="text-orange-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></i>
                                    <a href="mailto:sayed.zencomech@gmail.com" className="font-medium">sayed.zencomech@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div id="footer-links">
                            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><span className="hover:text-orange-400 transition-colors cursor-pointer">Home</span></li>
                                <li><span className="hover:text-orange-400 transition-colors cursor-pointer">About Us</span></li>
                                <li><span className="hover:text-orange-400 transition-colors cursor-pointer">Services</span></li>
                                <li><span className="hover:text-orange-400 transition-colors cursor-pointer">Contact</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
                        <p>© 2024 ENCO Mechanical. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>


        </section>
    </>
  );
}
