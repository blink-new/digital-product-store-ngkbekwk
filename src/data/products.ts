
import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'UI Component Library',
    description: 'A comprehensive library of UI components for modern web applications. Includes over 50 customizable components with dark mode support.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'design',
    featured: true,
  },
  {
    id: '2',
    title: 'E-commerce Starter Kit',
    description: 'Complete e-commerce starter kit with product listings, cart functionality, and checkout process. Ready to customize and deploy.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    category: 'template',
    featured: true,
  },
  {
    id: '3',
    title: 'Photography Lightroom Presets',
    description: 'Collection of 20 professional Lightroom presets for portrait and landscape photography. Enhance your photos with one click.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'photography',
    featured: false,
  },
  {
    id: '4',
    title: 'Business Plan Template',
    description: 'Comprehensive business plan template with financial projections, market analysis, and executive summary sections.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'business',
    featured: false,
  },
  {
    id: '5',
    title: 'Icon Pack - Essential',
    description: 'Set of 200 essential icons in multiple formats (SVG, PNG) with both filled and outlined styles. Perfect for any project.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    category: 'design',
    featured: true,
  },
  {
    id: '6',
    title: 'Social Media Marketing Guide',
    description: 'Comprehensive guide to social media marketing strategies, content planning, and analytics. Includes case studies and templates.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    category: 'marketing',
    featured: false,
  },
  {
    id: '7',
    title: 'Portfolio Website Template',
    description: 'Clean and modern portfolio template for designers and developers. Showcase your work with this responsive and customizable template.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1755&q=80',
    category: 'template',
    featured: true,
  },
  {
    id: '8',
    title: 'Video Editing Transitions Pack',
    description: 'Collection of 50 smooth transitions for video editing. Compatible with major editing software like Premiere Pro and Final Cut.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
    category: 'video',
    featured: false,
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'design', name: 'Design Resources' },
  { id: 'template', name: 'Templates' },
  { id: 'photography', name: 'Photography' },
  { id: 'business', name: 'Business' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'video', name: 'Video' },
];