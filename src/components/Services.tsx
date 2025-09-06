import React from 'react';
import { Monitor, ShoppingCart, Zap, Settings, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'website-design',
      title: 'Website Design',
      description: 'Custom responsive websites that look great on all devices',
      icon: Monitor,
      benefits: [
        'Mobile-first responsive design',
        'Fast loading speeds',
        'SEO optimized structure'
      ]
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      description: 'Complete online stores that drive sales and conversions',
      icon: ShoppingCart,
      benefits: [
        'Secure payment processing',
        'Inventory management',
        'Analytics & reporting'
      ]
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages & Funnels',
      description: 'High-converting pages designed to capture leads and sales',
      icon: Zap,
      benefits: [
        'Conversion optimized design',
        'A/B testing ready',
        'Lead capture forms'
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      description: 'Keep your website secure, updated, and performing at its best',
      icon: Settings,
      benefits: [
        'Regular security updates',
        'Performance monitoring',
        '24/7 technical support'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Services that <span className="text-primary">drive results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we provide comprehensive web solutions that help your business grow online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <button className="flex items-center text-primary font-semibold group-hover:text-primary-dark transition-colors duration-300">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;