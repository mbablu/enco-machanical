import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <>
      <section className="bg-gray-50 font-poppins">

        <header id="header" className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-md">
            <nav id="navbar" className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                <span className="flex flex-col items-start cursor-pointer" id="logo-link">
                    {/* <div className="text-3xl font-bold tracking-wider">
                        <span className="text-brand-green">E</span><span className="text-brand-orange">N</span><span className="text-brand-green">C</span><span className="text-brand-orange">O</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-600 tracking-[0.15em] ml-0.5">MECHANICAL</p> */}
                    <Link href="/"><img className="max-h-[80px]" src="./images/logo.png" alt="logo" /></Link>
                </span>
                <div id="nav-links" className="hidden lg:flex items-center space-x-8">
                    <Link href="/" className="text-gray-600 hover:text-brand-orange font-semibold transition duration-300 cursor-pointer">
                        Home
                    </Link>
                    <Link href="/service" className="text-brand-orange font-bold border-b-2 border-brand-orange pb-1 cursor-pointer" >Services</Link>
                    {/* <Link href="/about-us" className="text-gray-600 hover:text-brand-orange font-semibold transition duration-300 cursor-pointer" >About Us</Link> */}
                    <Link href="/contact-us" className="text-gray-600 hover:text-brand-orange font-semibold transition duration-300 cursor-pointer">Contact</Link>
                </div>
                <Link href="/contact"
                     className="hidden lg:inline-block bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer" id="cta-button-header">
                        Get a Free Quote
                </Link>
                <button id="mobile-menu-button" className="lg:hidden text-gray-700">
                    <i className="text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg></i>
                </button>
            </nav>
        </header>

        <main id="services-page-main">
            <section id="services-hero" className="relative bg-gray-100 h-[350px] flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gray-800 opacity-60"></div>
                <img className="absolute inset-0 w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/01509e9bce-da376a09db2b08804097.png" alt="a wide panoramic shot of a modern suburban neighborhood with clean rooftops, some showing HVAC units, professional architectural photography"/>
                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Our Services</h1>
                    <p className="mt-4 text-lg md:text-xl text-white max-w-2xl mx-auto">Providing expert HVAC and Plumbing solutions to ensure your home's comfort and safety.</p>
                </div>
            </section>

            <section id="services-grid-section" className="py-16 sm:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div id="services-grid-title" className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Comprehensive HVAC &amp; Plumbing Solutions</h2>
                        <div className="w-48 h-1.5 bg-gradient-to-r from-brand-orange to-brand-green mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div id="service-card-ac" className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-brand-cyan">
                            <div className="flex items-center gap-5 mb-4">
                                <i className="text-3xl text-brand-cyan" data-fa-i2svg=""><svg className="svg-inline--fa fa-snowflake" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="snowflake" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z"></path></svg></i>
                                <h3 className="text-xl font-bold text-gray-800">Air Conditioner</h3>
                            </div>
                            <p className="text-gray-600">Stay cool and comfortable with our expert air conditioner installation, repair, and maintenance services for all major brands.</p>
                        </div>
                        <div id="service-card-furnace" className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-brand-orange">
                            <div className="flex items-center gap-5 mb-4">
                                <i className="text-3xl text-brand-orange" data-fa-i2svg=""><svg className="svg-inline--fa fa-fire-flame-curved" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fire-flame-curved" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"></path></svg></i>
                                <h3 className="text-xl font-bold text-gray-800">Furnace</h3>
                            </div>
                            <p className="text-gray-600">Reliable furnace services to keep your home warm during the coldest months. We handle everything from tune-ups to full replacements.</p>
                        </div>
                        <div id="service-card-heatpump" className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-brand-yellow">
                            <div className="flex items-center gap-5 mb-4">
                                <i className="text-3xl text-brand-yellow" data-fa-i2svg=""><svg className="svg-inline--fa fa-temperature-arrow-up" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="temperature-arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M128 112c0-26.5 21.5-48 48-48s48 21.5 48 48V276.5c0 17.3 7.1 31.9 15.3 42.5C249.8 332.6 256 349.5 256 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5V112zM176 0C114.1 0 64 50.1 64 112V276.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C43.2 304.2 32 334.8 32 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C288 50.1 237.9 0 176 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16V322.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48zM480 160h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V160z"></path></svg></i>
                                <h3 className="text-xl font-bold text-gray-800">Heat Pump</h3>
                            </div>
                            <p className="text-gray-600">Energy-efficient heat pump solutions for year-round comfort. We specialize in installation and repair of modern heat pump systems.</p>
                        </div>
                        <div id="service-card-ductwork" className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-brand-cyan">
                            <div className="flex items-center gap-5 mb-4">
                                <i className="text-3xl text-brand-cyan" data-fa-i2svg=""><svg className="svg-inline--fa fa-wind" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wind" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"></path></svg></i>
                                <h3 className="text-xl font-bold text-gray-800">HVAC Ductwork</h3>
                            </div>
                            <p className="text-gray-600">Optimize your airflow with our professional ductwork design, installation, and cleaning services for maximum efficiency.</p>
                        </div>
                        <div id="service-card-humidifier" className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-400">
                            <div className="flex items-center gap-5 mb-4">
                                <i className="text-3xl text-blue-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-droplet" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="droplet" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"></path></svg></i>
                                <h3 className="text-xl font-bold text-gray-800">Humidifier</h3>
                            </div>
                            <p className="text-gray-600">Improve your indoor air quality and comfort with whole-home humidifier installations and service, reducing dryness and allergens.</p>
                        </div>
                        <div id="service-card-plumbing" className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-brand-green">
                            <div className="flex items-center gap-5 mb-4">
                                <i className="text-3xl text-brand-green" data-fa-i2svg=""><svg className="svg-inline--fa fa-faucet-drip" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="faucet-drip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M224 0c17.7 0 32 14.3 32 32V44l96-12c17.7 0 32 14.3 32 32s-14.3 32-32 32L256 84l-31-3.9-1-.1-1 .1L192 84 96 96C78.3 96 64 81.7 64 64s14.3-32 32-32l96 12V32c0-17.7 14.3-32 32-32zM0 224c0-17.7 14.3-32 32-32h96l22.6-22.6c6-6 14.1-9.4 22.6-9.4H192V116.2l32-4 32 4V160h18.7c8.5 0 16.6 3.4 22.6 9.4L320 192h32c88.4 0 160 71.6 160 160c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32s-14.3-32-32-32H315.9c-20.2 29-53.9 48-91.9 48s-71.7-19-91.9-48H32c-17.7 0-32-14.3-32-32V224zM436.8 423.4c1.9-4.5 6.3-7.4 11.2-7.4s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-1.2c0-4.5 .9-8.9 2.7-13.1l18.2-42.4z"></path></svg></i>
                                <h3 className="text-xl font-bold text-gray-800">Plumbing</h3>
                            </div>
                            <p className="text-gray-600">From leaky faucets to major pipe repairs, our licensed plumbers provide a full range of residential plumbing services you can trust.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cta-section" className="bg-gray-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="bg-cyan-400 p-8 sm:p-12 rounded-2xl shadow-xl text-center">
                        <h2 id="cta-title" className="text-3xl font-bold text-white">Ready to Improve Your Comfort?</h2>
                        <p id="cta-subtitle" className="text-white mt-2 max-w-2xl mx-auto">Contact us today for a free, no-obligation estimate on any of our HVAC or plumbing services. Our team is ready to help!</p>
                        <span className="mt-8 inline-block bg-white text-brand-orange font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all cursor-pointer" id="cta-button-main">
                            Schedule a Consultation
                        </span>
                    </div>
                </div>
            </section>
        </main>

        <footer id="footer" className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div id="footer-about" className="md:col-span-2">
                        <span className="flex flex-col items-start mb-4 cursor-pointer" id="logo-link-footer">
                            {/* <div className="text-3xl font-bold tracking-wider">
                                <span className="text-brand-green">E</span><span className="text-brand-orange">N</span><span className="text-brand-green">C</span><span className="text-brand-orange">O</span>
                            </div>
                            <p className="text-sm font-semibold text-gray-400 tracking-[0.15em] ml-0.5">MECHANICAL</p> */}
                            <Link href="/"><img className="max-h-[80px]" src="./images/logo.png" alt="logo" /></Link>
                        </span>
                        <p className="max-w-md">Your reliable partner for all HVAC and plumbing needs. We are committed to quality service and customer satisfaction.</p>
                    </div>
                    <div id="footer-links">
                        <h4 className="font-bold text-white mb-4 tracking-wider">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-orange-400 transition-colors cursor-pointer">Home</Link></li>
                            <li><Link href="/service" className="hover:text-orange-400 transition-colors cursor-pointer">Services</Link></li>
                            <li><Link href="/contact-us" className="hover:text-orange-400 transition-colors cursor-pointer">Contact</Link></li>
                        </ul>
                    </div>
                    <div id="footer-contact">
                        <h4 className="font-bold text-white mb-4 tracking-wider">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <i className="text-brand-cyan mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-location-dot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></i>
                                <span>10 Milner Business Court, Suite -300, Scarborough, ON M1B 3C6</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className="text-brand-cyan" data-fa-i2svg=""><svg className="svg-inline--fa fa-phone" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg></i>
                                <span>647-948-9474</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className="text-brand-cyan" data-fa-i2svg=""><svg className="svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></i>
                                <span>sayed.zencomech@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                    <p>© 2024 ENCO Mechanical. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    </section>
    </>
  );
}
