import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
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
                    <div id="nav-links" className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-brand-orange font-semibold transition duration-300 cursor-pointer">
                                    Home
                        </Link>
                        <Link href="/service" className="text-gray-600 hover:text-brand-orange font-semibold transition duration-300 cursor-pointer">Services</Link>
                        <Link href="/about-us" className="text-brand-orange font-bold border-b-2 border-brand-orange pb-1 cursor-pointer" >About Us</Link>
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
                        <div className="max-w-xl">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">Your Trusted Partner in <span className="text-orange-500">HVAC Solutions</span></h1>
                            <p className="mt-4 text-lg text-gray-600">Learn about our journey, our commitment to quality, and the dedicated professionals who make it all happen.</p>
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
                                <p className="text-gray-600 mb-4">Founded on the principles of reliability and unparalleled customer service, ENCO Mechanical has grown from a small team of passionate technicians to a leading HVAC and plumbing provider in the region. Our journey is one of continuous learning and adaptation, always staying ahead of industry advancements to bring you the most efficient and effective solutions.</p>
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

                <section id="team-section" className="py-24 bg-gray-50">
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
                </section>
            </main>

            <footer id="footer" className="bg-gray-800 text-gray-300">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div id="footer-about" className="md:col-span-1">
                            <div id="footer-logo-container" className="flex flex-col items-start mb-4">
                                <div className="text-3xl font-bold tracking-wider">
                                    <span className="text-green-500">E</span><span className="text-orange-500">N</span><span className="text-green-500">C</span><span className="text-orange-500">O</span>
                                </div>
                                <p className="text-sm font-semibold text-gray-400 tracking-[0.15em] ml-0.5">MECHANICAL</p>
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
                                    <span>647-335-3929</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <i className="text-orange-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></i>
                                    <span>sayed.zencomech@gmail.com</span>
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
