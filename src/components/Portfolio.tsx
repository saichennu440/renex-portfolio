import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { Project } from '../types';

interface PortfolioProps {
  onOpenProject: (project: Project) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onOpenProject }) => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Fashion Store',
      summary: 'Modern online store with advanced filtering and seamless checkout',
      image: 'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['E-commerce', 'React', 'Stripe'],
      challenge: 'Client needed a high-converting online store with advanced product filtering and mobile-first design.',
      solution: 'Built a fast, responsive e-commerce platform with intuitive UX, secure payments, and inventory management.',
      screenshots: [
        'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/6214478/pexels-photo-6214478.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      technologies: ['React', 'Node.js', 'Stripe API', 'MongoDB'],
      outcome: {
        metric1: '40% increase in conversions',
        metric2: '60% faster page load times',
        metric3: '25% higher average order value'
      },
      clientType: 'Fashion Retailer'
    },
    {
      id: '2',
      title: 'Restaurant Landing Page',
      summary: 'Appetizing landing page with online reservation system',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Landing Page', 'WordPress', 'Booking'],
      challenge: 'Local restaurant needed to increase online reservations and showcase their menu effectively.',
      solution: 'Designed an appetizing landing page with integrated booking system and beautiful food photography.',
      screenshots: [
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      technologies: ['WordPress', 'OpenTable API', 'Custom CSS'],
      outcome: {
        metric1: '80% increase in online bookings',
        metric2: '50% more website visits'
      },
      clientType: 'Restaurant'
    },
    {
      id: '3',
      title: 'SaaS Product Dashboard',
      summary: 'Clean, intuitive dashboard for productivity software',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['SaaS', 'React', 'Dashboard'],
      challenge: 'SaaS startup needed a user-friendly dashboard that would reduce customer churn and improve engagement.',
      solution: 'Created an intuitive dashboard with clear data visualization and streamlined user workflows.',
      screenshots: [
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      outcome: {
        metric1: '30% reduction in churn rate',
        metric2: '45% increase in daily active users'
      },
      clientType: 'SaaS Startup'
    },
    {
      id: '4',
      title: 'Creative Agency Portfolio',
      summary: 'Bold portfolio showcasing creative work and services',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Portfolio', 'Creative', 'Animation'],
      challenge: 'Creative agency wanted a portfolio that would showcase their work in an engaging, interactive way.',
      solution: 'Built a visually stunning portfolio with smooth animations and an immersive project showcase.',
      screenshots: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      technologies: ['Next.js', 'Framer Motion', 'GSAP', 'Contentful'],
      outcome: {
        metric1: '200% increase in client inquiries',
        metric2: '90% longer average session time'
      },
      clientType: 'Creative Agency'
    },
    {
      id: '5',
      title: 'Fitness Coach Platform',
      summary: 'Comprehensive platform for online coaching and workouts',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Platform', 'Fitness', 'Video'],
      challenge: 'Fitness coach needed a platform to deliver online workouts and manage client progress.',
      solution: 'Developed a comprehensive coaching platform with video streaming, progress tracking, and client management.',
      screenshots: [
        'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/4164825/pexels-photo-4164825.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      technologies: ['React Native', 'Video.js', 'Firebase', 'Stripe'],
      outcome: {
        metric1: '300% increase in online clients',
        metric2: '85% client retention rate'
      },
      clientType: 'Fitness Professional'
    },
    {
      id: '6',
      title: 'Real Estate Listings',
      summary: 'Modern property search with advanced filters',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      tags: ['Real Estate', 'Search', 'Maps'],
      challenge: 'Real estate agency needed a modern property search platform with advanced filtering and map integration.',
      solution: 'Built a comprehensive property search platform with interactive maps, advanced filters, and virtual tours.',
      screenshots: [
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
        'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop'
      ],
      technologies: ['Vue.js', 'Google Maps API', 'Elasticsearch'],
      outcome: {
        metric1: '150% more property inquiries',
        metric2: '40% faster search results'
      },
      clientType: 'Real Estate Agency'
    }
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-to-tr from-sky-400 to-fuchsia-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary">portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve their goals with stunning, functional websites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.summary}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <button
                      onClick={() => onOpenProject(project)}
                      className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition-colors duration-200 flex items-center"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.summary}
                </p>

                <button
                  onClick={() => onOpenProject(project)}
                  className="text-primary font-semibold hover:text-primary-dark transition-colors duration-300 flex items-center"
                >
                  Learn more
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;