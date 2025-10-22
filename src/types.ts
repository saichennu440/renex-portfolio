export interface Project {
  id: string;
  title: string;
  summary: string;
  image: string;
  tags: string[];
  challenge: string;
  solution: string;
  screenshots: string[];
  technologies: string[];
  outcome: {
    metric1: string;
    metric2: string;
    metric3?: string;
  };
  clientType: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  image?: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}