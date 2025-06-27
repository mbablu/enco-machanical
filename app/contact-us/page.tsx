import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <>
        <section className="bg-gray-50 font-poppins">

            <div id="contact-page-wrapper" className="relative overflow-hidden">
                <header id="header" className="relative z-20 bg-white shadow-md">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <div id="logo-section" className="flex flex-col items-start">
                                {/* <div className="text-4xl font-bold tracking-wider">
                                    <span className="text-green-500">E</span><span className="text-orange-500">N</span><span className="text-green-500">C</span><span className="text-orange-500">O</span>
                                </div>
                                <p className="text-lg font-semibold text-gray-700 tracking-[0.15em] ml-0.5">MECHANICAL</p> */}
                                <Link href="/"><img className="max-h-[80px]" src="./images/logo.png" alt="logo" /></Link>
                            </div>
                            <nav id="main-navigation" className="hidden md:flex items-center space-x-8">
                                <Link href="/" className="text-gray-600 hover:text-brand-orange font-semibold transition duration-300 cursor-pointer">
                                    Home
                                </Link>
                                <Link href="/service" className="text-gray-600 hover:text-brand-orange font-semibold transition duration-300 cursor-pointer">Services</Link>
                                {/* <Link href="/about-us" className="text-gray-600 hover:text-brand-orange font-semibold transition duration-300 cursor-pointer">About Us</Link> */}
                                <Link href="/contact-us" className="text-brand-orange font-bold border-b-2 border-brand-orange pb-1 cursor-pointer">Contact</Link>
                            </nav>
                            <button className="md:hidden text-gray-700">
                                <i className="text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg></i>
                            </button>
                        </div>
                    </div>
                </header>

                <main id="contact-main-section" className="relative z-10 py-16 lg:py-24 h-[900px]">
                    <div id="background-decoration-left" className="absolute top-0 left-0 h-full w-1/3 z-0 opacity-10">
                        <div className="h-full w-full bg-cyan-400 clip-path-swoosh-left"></div>
                    </div>
                    <div id="background-decoration-right" className="absolute top-0 right-0 h-full w-1/3 z-0 opacity-10">
                        <div className="h-full w-full bg-orange-400 clip-path-swoosh-right"></div>
                    </div>
                    <div id="background-decoration-gears" className="absolute inset-0 z-0">
                        <i className="text-gray-200 text-[10rem] absolute top-20 right-1/4 opacity-50" data-fa-i2svg=""><svg className="svg-inline--fa fa-gear" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gear" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path></svg></i>
                        <i className="text-gray-200 text-[15rem] absolute bottom-10 left-16 opacity-50" data-fa-i2svg=""><svg className="svg-inline--fa fa-gear" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gear" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path></svg></i>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div id="contact-content-grid" className="grid lg:grid-cols-1 gap-12 items-start">
                            
                            {/* <div id="contact-form-container" className="bg-white p-8 lg:p-10 rounded-2xl shadow-2xl border border-gray-100">
                                <div id="form-header" className="mb-8">
                                    <h1 className="text-4xl font-bold text-gray-800">Get In Touch</h1>
                                    <p className="text-gray-500 mt-2">We're here to help and answer any question you might have.</p>
                                </div>

                                <form id="contact-form" action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i className="text-gray-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-user" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path></svg></i>
                                            </div>
                                            <input type="text" name="name" id="name" placeholder="John Doe" className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm py-3"/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i className="text-gray-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path></svg></i>
                                            </div>
                                            <input type="email" name="email" id="email" placeholder="you@example.com" className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm py-3"/>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i className="text-gray-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-lightbulb" aria-hidden="true" focusable="false" data-prefix="far" data-icon="lightbulb" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"></path></svg></i>
                                            </div>
                                            <input type="text" name="subject" id="subject" placeholder="Service Inquiry" className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm py-3"/>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                        <textarea name="message" id="message"rows={4} placeholder="How can we assist you today?" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-orange focus:ring-brand-orange sm:text-sm p-3"></textarea>
                                    </div>

                                    <div>
                                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-lg font-bold text-white bg-gradient-to-r from-cyan-400 to-yellow-400 hover:from-cyan-500 hover:to-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 ease-in-out transform hover:scale-105">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div> */}

                            <div id="contact-info-and-map" className="space-y-8 mt-4 lg:mt-0">
                                <div id="contact-details-card" className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                                    <div className="space-y-5 text-gray-600">
                                        <div className="flex items-start gap-4">
                                            <i className="text-xl text-brand-orange mt-1 w-6 text-center" data-fa-i2svg=""><svg className="svg-inline--fa fa-location-dot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></i>
                                            <span className="font-medium text-base">10 Milner Business Court, Suite -300, Scarborough, ON M1B 3C6</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <i className="text-xl text-brand-green w-6 text-center" data-fa-i2svg=""><svg className="svg-inline--fa fa-phone" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg></i>
                                            <span className="font-medium text-base">647-948-9474</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <i className="text-xl text-brand-cyan w-6 text-center" data-fa-i2svg=""><svg className="svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></i>
                                            <span className="font-medium text-base">sayed.zencomech@gmail.com</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <i className="text-xl text-brand-yellow w-6 text-center" data-fa-i2svg=""><svg className="svg-inline--fa fa-clock" aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg></i>
                                            <span className="font-medium text-base">Mon - Fri: 9:00 AM - 6:00 PM</span>
                                        </div>
                                    </div>
                                </div>

                                <div id="map-card" className="rounded-2xl shadow-xl overflow-hidden border-4 border-white">
                                    <img className="w-full h-[360px] object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f309c93962-39fc7d8cf6180a0874bd.png" alt="map showing business location in Scarborough, ON, with a pin marker, clean and modern map style"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    </>
  );
}
