// components/sections/ArticlesSection.tsx
/**
 * Articles section dengan featured articles dan link ke blog
 */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, Badge, Button, Image } from '@/components/ui';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { formatDate } from '@/lib/utils';
import articlesData from '@/data/articles.json';

export function ArticlesSection() {
  const [sectionRef, isInView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Get featured articles
  const featuredArticles = articlesData.articles
    .filter(article => article.isFeatured && article.isPublished)
    .slice(0, 3);

  return (
    <section 
      id="articles" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
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
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and developments in the actuarial and insurance industry.
            </p>
          </motion.div>

          {/* Featured Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  {/* Article Image */}
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={article.featuredImage}
                      alt={article.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader className="space-y-3">
                    {/* Category & Reading Time */}
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        style={{ borderColor: article.category.color, color: article.category.color }}
                      >
                        {article.category.name}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {article.readingTime} min read
                      </span>
                    </div>

                    <CardTitle className="text-xl leading-tight hover:text-blue-800 transition-colors">
                      <Link href={`/articles/${article.slug}`}>
                        {article.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Author & Date */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                      <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {article.author.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatDate(article.publishedAt)}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{article.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA to Articles Page */}
          <motion.div variants={fadeInUp} className="text-center">
            <Link href="/articles">
              <Button size="lg" variant="outline">
                View All Articles
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}