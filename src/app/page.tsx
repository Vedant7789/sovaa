import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <nav className="flex justify-between items-center p-6 bg-black glass sticky top-0 z-50">
        <div className="text-white font-bold text-body-large">SOVAA</div>
        <div className="flex space-x-8">
          <a href="#" className="text-white hover:text-red-500 hover-glow nav-text transition-all duration-300">START</a>
          <a href="#happy-hour" className="text-white hover:text-red-500 hover-glow nav-text transition-all duration-300">HAPPY HOUR</a>
          <a href="#about" className="text-white hover:text-red-500 hover-glow nav-text transition-all duration-300">ABOUT</a>
          <a href="#flavors" className="text-white hover:text-red-500 hover-glow nav-text transition-all duration-300">MENU</a>
          <a href="#gallery" className="text-white hover:text-red-500 hover-glow nav-text transition-all duration-300">GALLERY</a>
          <a href="#contact" className="text-white hover:text-red-500 hover-glow nav-text transition-all duration-300">CONTACT</a>
        </div>
      </nav>

      <div className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" style={{zIndex: 1}}></div>
        
        <div className="absolute inset-0 opacity-50" style={{zIndex: 0}}>
          <Image 
            src="/images/hookah-still-life-composition.jpg" 
            alt="Background Hookah" 
            fill
            className="object-cover scale-110"
            priority
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" style={{zIndex: 1}}></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5" style={{zIndex: 1}}></div>
        
        <div className="z-10 text-center">
          <div className="relative w-96 h-96 mx-auto mb-8">
            <Image 
              src="/images/david-foodphototasty-iUhNMzJnJSI-unsplash.jpg" 
              alt="Modern Hookah with Colorful Smoke" 
              width={384}
              height={384}
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-subtitle font-bold mb-6 hover-glow">HOOKAH</h1>
          <p className="text-body">LOUNGE</p>
        </div>
      </div>

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
            Da Nang's Ultimate Shisha Experience
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
              Got questions, feedback, or just want to say hi? We'd love to hear from you! Whether it's about our menu, location, or anything else, don't hesitate to reach out.
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
          <div className="text-white font-bold text-lg mb-4 md:mb-0">SOVAA</div>
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
