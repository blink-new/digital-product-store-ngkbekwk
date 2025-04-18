
import { motion } from 'framer-motion';
import { Hero } from '../components/home/Hero';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Categories } from '../components/home/Categories';
import { Testimonials } from '../components/home/Testimonials';
import { CallToAction } from '../components/home/CallToAction';

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <CallToAction />
    </motion.div>
  );
}