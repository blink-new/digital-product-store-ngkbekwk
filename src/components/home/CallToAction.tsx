
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Elevate Your Projects?
          </h2>
          <p className="mt-4 text-lg">
            Browse our collection of premium digital products and take your work to the next level.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/products">
                Browse Products
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}