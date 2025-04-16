
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight">About DigiStore</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide premium digital products for designers, developers, and creators.
          </p>
        </div>
        
        <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              At DigiStore, we believe that everyone should have access to high-quality digital resources that help them create amazing projects. Our mission is to provide premium digital products that save time and elevate the quality of your work.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you're a designer looking for assets, a developer in need of templates, or a creator seeking tools to enhance your workflow, we've got you covered.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <p>Curated selection of premium digital products</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <p>Instant downloads after purchase</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <p>Secure payment processing</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <p>Dedicated customer support</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Our team"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary" />
            <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-secondary" />
          </motion.div>
        </div>
        
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Browse our collection of premium digital products and find the perfect resources for your next project.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/products">
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}