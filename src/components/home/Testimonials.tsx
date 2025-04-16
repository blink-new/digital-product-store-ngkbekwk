
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'UI Designer',
    content: 'The UI Component Library has saved me countless hours of work. The components are beautifully designed and easy to customize.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 2,
    name: 'Sarah Miller',
    role: 'Web Developer',
    content: 'I purchased the E-commerce Starter Kit and had my online store up and running in just a few days. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Photographer',
    content: 'The Lightroom Presets are fantastic! They give my photos a professional look with just one click. Great value for money.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight">What Our Customers Say</h2>
          <p className="mt-2 text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mt-4 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? 'fill-primary text-primary' : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              
              <p className="mt-4 text-sm">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}