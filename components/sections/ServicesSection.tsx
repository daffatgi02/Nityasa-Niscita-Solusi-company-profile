// components/sections/ServicesSection.tsx
/**
 * Services section dengan grid layout dan kategori filtering
 */
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, Badge, Button } from '@/components/ui';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import servicesData from '@/data/services.json';
import { SERVICES_CATEGORIES } from '@/lib/constants';

export function ServicesSection() {
  const [sectionRef, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Icon mapping untuk services
  const getIconComponent = (iconName: string) => {
    const icons = {
      'calculator': '📊',
      'trending-up': '📈', 
      'graduation-cap': '🎓',
      'search': '🔍',
      'shield': '🛡️',
      'cpu': '💻'
    };
    return icons[iconName as keyof typeof icons] || '⚡';
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive actuarial consulting services to help insurance companies navigate complex challenges and achieve sustainable growth.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.services
              .sort((a, b) => a.order - b.order)
              .map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">
                          {getIconComponent(service.icon)}
                        </div>
                        {service.isPopular && (
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl text-gray-900">
                        {service.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {SERVICES_CATEGORIES[service.category as keyof typeof SERVICES_CATEGORIES]}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-1 h-1 bg-blue-800 rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-sm text-gray-500 ml-3">
                              +{service.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Service Info */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center text-sm">
                          <div>
                            <span className="text-gray-500">Duration:</span>
                            <span className="ml-2 text-gray-900">{service.duration}</span>
                          </div>
                          <div className="text-blue-800 font-semibold">
                            {service.price}
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-4"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            variants={fadeInUp}
            className="text-center bg-blue-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our actuarial consulting services can help your organization achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}