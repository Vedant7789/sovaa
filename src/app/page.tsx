"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <nav className="flex justify-between items-center p-2 bg-black/80 backdrop-blur-md glass sticky top-0 z-50">
        <div className="flex items-center">
          <Image 
            src="/images/sova%20namecard.pdf%20(1).svg" 
            alt="SOVAA Logo" 
            width={500}
            height={150}
            className="h-12 sm:h-16 md:h-20 w-auto object-contain"
          />
        </div>
        <div className="hidden md:flex space-x-4 lg:space-x-8">
          <a href="#" className="text-white hover:text-red-500 hover-glow nav-text transition-all duration-300 text-sm lg:text-base">START</a>
          <a href="#happy-hour" className="text-white hover:text-red-500 hover-glow nav-text transition-all duration-300 text-sm lg:text-base">HAPPY HOUR</a>
          <a href="#about" className="text-white hover:text-red-500 hover-glow nav-text transition-all duration-300 text-sm lg:text-base">ABOUT</a>
          <a href="#flavors" className="text-white hover:text-red-500 hover-glow nav-text transition-all duration-300 text-sm lg:text-base">MENU</a>
          <a href="#gallery" className="text-white hover:text-red-500 hover-glow nav-text transition-all duration-300 text-sm lg:text-base">GALLERY</a>
          <a href="#contact" className="text-white hover:text-red-500 hover-glow nav-text transition-all duration-300 text-sm lg:text-base">CONTACT</a>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-gray-800">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-white hover:text-red-500 transition-all duration-300 text-base py-2">START</a>
            <a href="#happy-hour" className="text-white hover:text-red-500 transition-all duration-300 text-base py-2">HAPPY HOUR</a>
            <a href="#about" className="text-white hover:text-red-500 transition-all duration-300 text-base py-2">ABOUT</a>
            <a href="#flavors" className="text-white hover:text-red-500 transition-all duration-300 text-base py-2">MENU</a>
            <a href="#gallery" className="text-white hover:text-red-500 transition-all duration-300 text-base py-2">GALLERY</a>
            <a href="#contact" className="text-white hover:text-red-500 transition-all duration-300 text-base py-2">CONTACT</a>
          </div>
        </div>
      )}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/website%20Bg.png" 
            alt="Website Background" 
            fill
            className="object-cover opacity-100 scale-75 sm:scale-90"
            priority
            style={{ objectPosition: 'center 10%', filter: 'brightness(1.8) contrast(1.3)' }}
          />
        </div>
        
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover mobile-video-reduce"
            style={{ filter: 'brightness(0.4) contrast(1.1) opacity(0.2)' }}
          >
            <source src="/images/Smoke_43___4K_res.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/40 mobile-overlay-reduce"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/3 to-black/20 mobile-overlay-reduce"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/25 mobile-overlay-reduce"></div>
        
        <div className="absolute inset-0 opacity-20 mobile-floating-reduce">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-black/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-gray-800/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-32 h-32 sm:w-40 sm:h-40 bg-black/40 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 py-6 sm:py-8 md:py-12 lg:py-20">
          <div className="max-w-7xl mx-auto w-full">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-start lg:items-center">
              
              <div className="lg:col-span-5 space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left">
                <div className="relative">
                  <div className="absolute -inset-2 sm:-inset-4 md:-inset-6 bg-gradient-to-br from-red-500/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
                  <Image 
                    src="/images/sova%20namecard.pdf%20(1).svg" 
                    alt="SOVAA Logo" 
                    width={3000}
                    height={1500}
                    className="relative h-20 sm:h-24 md:h-32 lg:h-40 xl:h-52 w-auto object-contain drop-shadow-2xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] animate-pulse mx-auto lg:mx-0"
                  />
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="border-l-4 border-red-500/60 pl-3 sm:pl-4 md:pl-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-light tracking-[0.1em] uppercase leading-tight">
                      Da Nang&apos;s Ultimate
                    </h1>
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-300 font-light tracking-[0.15em] uppercase leading-tight">
                      Shisha Experience
                    </h2>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 justify-center lg:justify-start">
                    <button className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-red-600/40 to-red-800/40 text-white font-semibold rounded-full hover:from-red-600/60 hover:to-red-800/60 transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-red-500/50 hover:border-red-500/70 border-2 border-red-500/40 backdrop-blur-sm tracking-wide group text-xs sm:text-sm md:text-base">
                      <span className="group-hover:animate-pulse">Book Your Table</span>
                    </button>
                    <button 
                      onClick={() => document.getElementById('flavors')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-white/60 text-white font-semibold rounded-full hover:bg-white/20 hover:border-white/90 hover:shadow-2xl hover:shadow-white/50 transition-all duration-500 transform hover:scale-110 backdrop-blur-sm tracking-wide cursor-pointer group text-xs sm:text-sm md:text-base"
                    >
                      <span className="group-hover:animate-pulse">View Menu</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7 mt-4 sm:mt-6 lg:mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <div className="bg-transparent sm:bg-black/20 backdrop-blur-sm border border-white/10 p-3 sm:p-4 md:p-5 rounded-xl hover-lift transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 md:mb-3 tracking-wide">Premium Flavors</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                      Curated selection of the finest shisha flavors from around the world
                    </p>
                  </div>
                  
                  <div className="bg-transparent sm:bg-black/20 backdrop-blur-sm border border-white/10 p-3 sm:p-4 md:p-5 rounded-xl hover-lift transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 md:mb-3 tracking-wide">Signature Cocktails</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                      Expertly crafted drinks that complement your shisha experience
                    </p>
                  </div>
                  
                  <div className="bg-transparent sm:bg-black/20 backdrop-blur-sm border border-white/10 p-3 sm:p-4 md:p-5 rounded-xl hover-lift transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 sm:mb-2 md:mb-3 tracking-wide">Atmospheric Design</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                      Sophisticated interior with mood lighting and comfortable seating
                    </p>
                  </div>
                  
                  <div className="bg-transparent sm:bg-black/20 backdrop-blur-sm border border-white/10 p-3 sm:p-4 md:p-5 rounded-xl border-l-4 border-red-500/60 transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-1 sm:mb-2 md:mb-3">
                      <h4 className="text-white font-semibold tracking-wide text-xs sm:text-sm md:text-base">Open Daily</h4>
                      <span className="text-white text-xs sm:text-sm font-bold">6PM - 2AM</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">Located in the heart of Da Nang</p>
                  </div>
                  
                  <div className="bg-transparent sm:bg-black/20 backdrop-blur-sm border border-white/10 p-3 sm:p-4 md:p-5 rounded-xl text-center transform hover:scale-105 transition-all duration-300 sm:col-span-2">
                    <div className="flex justify-center mb-1 sm:mb-2">
                      <span className="text-yellow-400 text-base sm:text-lg md:text-xl">★★★★★</span>
                    </div>
                    <p className="text-white text-xs sm:text-sm md:text-base font-medium">Rated 4.9/5</p>
                    <p className="text-gray-300 text-xs sm:text-sm">&ldquo;Best Hookah Experience in Da Nang&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="happy-hour" className="py-20 relative bg-black">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image 
                  src="/images/luciano-oliveira-rLa3-YZI9fA-unsplash.jpg" 
                  alt="Person smoking hookah in lounge" 
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left md:pt-8">
              <h2 className="text-subtitle font-bold mb-3">HAPPY</h2>
              <h3 className="text-body-large text-red-500 italic mb-8">HOUR</h3>
              <h4 className="text-body-large mb-10">FRIDAY TO SATURDAY 5-7PM</h4>
              <div className="mb-8">
                <p className="text-body-large">Classic Hookah</p>
                <p className="text-body-large">Flavors</p>
                <p className="price-text font-bold text-red-500 mb-3 hover-glow">$5</p>
              </div>
              <div>
                <p className="text-body-large">Special Hookah</p>
                <p className="text-body-large">Flavors</p>
                <p className="price-text font-bold text-red-500 hover-glow">$7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-section-title font-bold mb-10 text-center animate-pulse transition-all duration-1000 ease-in-out hover:text-red-500 hover-glow">
            Da Nang&apos;s Ultimate Shisha Experience
          </h2>
          <p className="text-body-large text-center max-w-4xl mx-auto mb-16">
            Indulge in Indian & continental flavors, signature drinks, premium hookah (Indian & Russian hookah), and a vibrant bar scene in the heart of Da Nang
          </p>
          
          <div className="overflow-hidden py-8 bg-black border-y border-gray-800 mb-16">
            <div className="marquee-container">
              <div className="marquee-content text-body-large font-bold">
                <span className="mx-8 text-red-500">The ultimate lounge</span>
                <span className="mx-8">/</span>
                <span className="mx-8 text-red-500">bar vibes</span>
                <span className="mx-8">/</span>
                <span className="mx-8 text-red-500">hookah haven</span>
                <span className="mx-8">/</span>
                <span className="mx-8 text-red-500">The ultimate lounge</span>
                <span className="mx-8">/</span>
                <span className="mx-8 text-red-500">bar vibes</span>
                <span className="mx-8">/</span>
                <span className="mx-8 text-red-500">hookah haven</span>
                <span className="mx-8">/</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-section-title font-bold mb-16 text-center">Why Sova?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            <div className="text-center glass p-10 rounded-xl hover-lift">
              <h3 className="text-subtitle font-bold mb-8">Iconic Owl Theme</h3>
              <p className="text-body">Immerse yourself in an enchanting and stylish atmosphere.</p>
            </div>
            <div className="text-center glass p-10 rounded-xl hover-lift">
              <h3 className="text-subtitle font-bold mb-8">Exclusive VIP Spaces</h3>
              <p className="text-body">Perfect for private parties and celebrations.</p>
            </div>
            <div className="text-center glass p-10 rounded-xl hover-lift">
              <h3 className="text-subtitle font-bold mb-8">Open Hour</h3>
              <p className="text-body">Open till late, offering unforgettable moments every night.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="flavors" className="py-20 bg-black relative">
        <div className="container mx-auto px-4 z-10 relative">
          <h2 className="text-section-title font-bold mb-12 text-center">MENU</h2>
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-5xl">
              <Image 
                src="/images/menu.png" 
                alt="Menu" 
                width={1000} 
                height={800} 
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-subtitle text-red-500 italic mb-12">SHISHA PRICING</h3>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="glass p-8 rounded-xl hover-lift">
                <p className="text-body font-bold mb-3">STANDARD</p>
                <p className="price-text font-bold text-red-500 hover-glow">60K</p>
              </div>
              <div className="glass p-8 rounded-xl hover-lift">
                <p className="text-body font-bold mb-3">ONE SHOT</p>
                <p className="price-text font-bold text-red-500 hover-glow">34K</p>
              </div>
              <div className="glass p-8 rounded-xl hover-lift">
                <p className="text-body font-bold mb-3">CIGAR STANDARD</p>
                <p className="price-text font-bold text-red-500 hover-glow">70K</p>
              </div>
              <div className="glass p-8 rounded-xl hover-lift">
                <p className="text-body font-bold mb-3">CIGAR ONESHOT</p>
                <p className="price-text font-bold text-red-500 hover-glow">50K</p>
              </div>
              <div className="glass p-8 rounded-xl hover-lift">
                <p className="text-body font-bold mb-3">OVERPACK</p>
                <p className="price-text font-bold text-red-500 hover-glow">+10K</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">GALLERY</h2>
          <h3 className="text-xl text-red-500 italic mb-12 text-center">Hookah</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-80 bg-gray-800 relative overflow-hidden rounded-lg glass">
              <Image 
                src="/images/front-view-hookah-bar-with-fog-around.jpg" 
                alt="Modern hookah with red and blue lighting" 
                width={400}
                height={320}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-80 bg-gray-800 relative overflow-hidden rounded-lg glass">
              <Image 
                src="/images/classic-hookah-beautiful-colored-rays-light-smoke-concept-hookah-smoking.jpg" 
                alt="Classic hookah with beautiful colored light rays and smoke" 
                width={400}
                height={320}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-80 bg-gray-800 relative overflow-hidden rounded-lg glass">
              <Image 
                src="/images/close-up-hookah-vaping.jpg" 
                alt="Close-up hookah with elegant still life arrangement" 
                width={400}
                height={320}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">GET IN TOUCH</h2>
          <h3 className="text-xl text-red-500 italic mb-12 text-center">Contact Us</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center mb-12">
              Got questions, feedback, or just want to say hi? We&apos;d love to hear from you! Whether it&apos;s about our menu, location, or anything else, don&apos;t hesitate to reach out.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-6">Contacts</h4>
                <p className="text-base mb-2">29 An Thượng 29, Bắc Mỹ Phú, Ngũ Hành Sơn,</p>
                <p className="text-base mb-6">Đà Nẵng 550000, Vietnam</p>
                <p className="text-lg font-bold">+84 387 400 376</p>
              </div>
              <div className="glass p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-6">Opening Hours</h4>
                <p className="text-lg mb-8">Open Daily: 6PM - 2AM</p>
                <h4 className="text-xl font-bold mb-6">Social</h4>
                <p className="text-base mb-2 hover:text-red-500 cursor-pointer">Instagram</p>
                <p className="text-base hover:text-red-500 cursor-pointer">X (Twitter)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-black border-t border-gray-800 glass">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image 
              src="/images/sova%20namecard.pdf%20(1).svg" 
              alt="SOVAA Logo" 
              width={350}
              height={100}
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#" className="text-white hover:text-red-500 hover-glow text-sm transition-colors duration-300">START</a>
            <a href="#happy-hour" className="text-white hover:text-red-500 hover-glow text-sm transition-colors duration-300">HAPPY HOUR</a>
            <a href="#about" className="text-white hover:text-red-500 hover-glow text-sm transition-colors duration-300">ABOUT</a>
            <a href="#flavors" className="text-white hover:text-red-500 hover-glow text-sm transition-colors duration-300">MENU</a>
            <a href="#gallery" className="text-white hover:text-red-500 hover-glow text-sm transition-colors duration-300">GALLERY</a>
            <a href="#contact" className="text-white hover:text-red-500 hover-glow text-sm transition-colors duration-300">CONTACT</a>
          </div>
        </div>
      </footer>

      <div className="py-4 bg-black border-t border-gray-800 text-xs text-gray-500">
        <div className="container mx-auto px-4 flex justify-between">
          <div>® 2024 All Rights are reserved</div>
        </div>
      </div>
    </div>
  );
}
