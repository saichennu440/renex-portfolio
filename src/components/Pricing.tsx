import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenContact: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenContact }) => {
  const pricingTiers = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$1,500',
      description: 'Perfect for small businesses and personal brands',
      features: [
        'Up to 5 pages',
        'Mobile-responsive design',
        'Basic SEO optimization',
        'Contact form integration',
        '3 rounds of revisions',
        '30 days of support'
      ],
      popular: false
    },
    {
      id: 'business',
      name: 'Business',
      price: '$3,500',
      description: 'Ideal for growing businesses and online stores',
      features: [
        'Up to 10 pages',
        'Custom design & animations',
        'Advanced SEO optimization',
        'E-commerce functionality',
        'Payment integration',
        'Analytics setup',
        '5 rounds of revisions',
        '90 days of support'
      ],
      popular: true
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$6,500',
      description: 'Complete solution for established businesses',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Advanced integrations',
        'Performance optimization',
        'Security features',
        'CMS training',
        'Unlimited revisions',
        '6 months of support'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, <span className="text-primary">transparent</span> pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our signature attention to detail and commitment to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll ${
                tier.popular ? 'ring-2 ring-primary scale-105' : 'border border-gray-100'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {tier.price}
                    <span className="text-lg font-normal text-gray-500">/project</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenContact}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group ${
                    tier.popular
                      ? 'bg-primary text-white hover:bg-primary-dark transform hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Quote Note */}
        <div className="text-center mt-12 animate-on-scroll">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need something custom?
            </h3>
            <p className="text-gray-600 mb-6">
              Every business is unique. If none of our standard packages fit your needs, 
              we'd be happy to create a custom quote tailored specifically to your requirements.
            </p>
            <button
              onClick={onOpenContact}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;