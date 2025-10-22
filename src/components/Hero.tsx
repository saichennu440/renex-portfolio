// project/src/components/Hero.tsx
import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenContact?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const handleGetQuote = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="py-20 lg:py-32 bg-gradient-to-tr from-sky-400 to-fuchsia-800"
      aria-label="Hero section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column: copy + CTA */}
          <div className="lg:col-span-7">
            <div className="animate-on-scroll">
              {/* <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <div
                    className="w-5 h-5 bg-white rounded-sm transform rotate-45"
                    aria-hidden
                  />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  Renex_Design
                </span>
                <a
                  href="https://www.instagram.com/renex_design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 inline-flex items-center text-gray-600 hover:text-primary transition-colors"
                  aria-label="Open Renex_Design Instagram"
                >
                  <Instagram className="w-4 h-4 mr-1" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div> */}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-50 leading-tight mb-6">
                We build websites that <span className="text-primary">get you customers</span>
              </h1>

              <p className="text-gray-50 text-base sm:text-lg max-w-2xl mb-8">
                Fast, responsive websites for small businesses, creators and
                entrepreneurs. Clean design, clear UX and conversion-focused
                development — from brochure sites to e-commerce.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <button
                  onClick={handleGetQuote}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium shadow-sm hover:bg-primary-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-3" />
                </button>

                <button
                  onClick={handleViewPortfolio}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 text-gray-800 bg-white hover:shadow-md transition-shadow duration-200"
                >
                  View Portfolio
                </button>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                <span className="font-medium text-gray-500">Starting at</span>{' '}
                <span className="ml-2 font-semibold">15,000</span>{' '}
                <span className="text-gray-400">•</span>{' '}
                <span className="ml-2">Free initial consultation</span>
              </div>
            </div>
          </div>

          {/* Right column: visual / mockups */}
          <div className="lg:col-span-5">
            <div className="relative animate-on-scroll">
              <div className="bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl p-4 shadow-lg bg-white">
                <div className="rounded-xl overflow-hidden bg-white">
                  <video
                    src="/video.mp4"
                    className="w-full h-56 sm:h-64 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>

                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <img
                    src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Project thumbnail"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Project thumbnail"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                  <img
                    src="/hd1.jpg"
                    alt="Project thumbnail"
                    className="w-full h-20 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* subtle badge */}
              <div className="absolute -bottom-3 right-3 bg-slate-950 rounded-full px-3 py-1 text-xs font-medium shadow-sm flex items-center space-x-2">
                <span className="text-gray-50">Featured on</span>
                <a
                  href="https://www.instagram.com/renex_design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-50 hover:text-primary"
                  aria-label="Open Renex_Design Instagram"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="ml-1">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
