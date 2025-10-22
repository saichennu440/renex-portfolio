import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      company: 'Bloom Boutique',
      text: 'Renex_Design transformed our online presence completely. Our new website not only looks incredible but has increased our online sales by 40% in just 3 months. The attention to detail and professional approach made the entire process seamless.',
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      id: '2',
      name: 'Michael Chen',
      company: 'TechStart Solutions',
      text: 'Working with Renex_Design was a game-changer for our startup. They created a website that perfectly captures our brand and has helped us attract investors and customers alike. The technical expertise and creative vision exceeded our expectations.',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      company: 'Fitness Forward',
      text: 'The new website has been instrumental in growing our online coaching business. Client bookings have increased by 80%, and the user experience is so smooth that clients often compliment us on it. Highly recommend Renex_Design!',
      image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-tr from-sky-400 to-fuchsia-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What our <span className="text-primary">clients say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what some of our amazing clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl animate-on-scroll">
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote className="w-12 h-12" />
            </div>
            
            <div className="p-8 sm:p-12">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentSlide].image}
                  alt={`${testimonials[currentSlide].name} from ${testimonials[currentSlide].company}`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentSlide].name}</h4>
                  <p className="text-primary font-medium">{testimonials[currentSlide].company}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
                "{testimonials[currentSlide].text}"
              </blockquote>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-600 hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-600 hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* All Testimonials Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                  index === currentSlide ? 'ring-2 ring-primary ring-opacity-50' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} from ${testimonial.company}`}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">
                  "{testimonial.text.substring(0, 100)}..."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;