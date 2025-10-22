import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface PortfolioModalProps {
  project: Project;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-modal-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.clientType}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-8 space-y-8">
          {/* Main Image */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={project.screenshots[0]}
              alt={`${project.title} main screenshot`}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>

          {/* Challenge */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h3>
            <p className="text-gray-600 leading-relaxed">{project.solution}</p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Screenshots */}
          {project.screenshots.length > 1 && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Screenshots</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.screenshots.slice(1).map((screenshot, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 2}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Results Achieved</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900">{project.outcome.metric1}</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900">{project.outcome.metric2}</p>
                </div>
              </div>
              {project.outcome.metric3 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start sm:col-span-2 lg:col-span-1">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900">{project.outcome.metric3}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Want similar results for your business?
            </p>
            <button
              onClick={onClose}
              className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;