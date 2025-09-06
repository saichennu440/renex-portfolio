import React from 'react';
import { Instagram, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold">Renex_Design</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating beautiful, functional websites that help businesses grow. 
              From concept to launch, we're here to make your online presence shine.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/renex_design"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-primary transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 mr-2" />
                @renex_design
              </a>
              <a
                href="mailto:hello@renex-design.com"
                className="flex items-center text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                hello@renex-design.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Website Design',
                'E-commerce',
                'Landing Pages',
                'Maintenance & Support'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'About', href: '#about' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Renex_Design. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm flex items-center"
              >
                Privacy Policy
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm flex items-center"
              >
                Terms of Service
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;