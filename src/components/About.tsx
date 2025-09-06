import React from 'react';
import { Code2, Smartphone, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  const technologies = [
    { name: 'React & Next.js', icon: Code2 },
    { name: 'WordPress & Webflow', icon: Globe },
    { name: 'Mobile Development', icon: Smartphone },
    { name: 'Database Design', icon: Database }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm behind <span className="text-primary">Renex_Design</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                With over 5 years of experience in web design and development, I specialize in creating 
                websites that not only look stunning but also drive real business results. My passion lies 
                in helping small businesses and creators establish a strong online presence that converts 
                visitors into customers.
              </p>
              
              <p>
                Every project starts with understanding your unique goals and target audience. I believe 
                in combining beautiful design with strategic thinking to create websites that tell your 
                story and grow your business.
              </p>
              
              <p>
                When I'm not crafting websites, you'll find me staying up-to-date with the latest web 
                technologies, sharing design tips on Instagram, and helping fellow entrepreneurs succeed online.
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Technologies & Tools I Use</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                  >
                    <tech.icon className="w-6 h-6 text-primary mr-3" />
                    <span className="font-medium text-gray-900">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-on-scroll">
            <div className="aspect-square relative overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Professional headshot of Renex_Design founder working on web design projects"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;