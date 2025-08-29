// types/article.ts
/**
 * Article and content-related type definitions
 */
import { BaseEntity, SEOData } from './index';

export interface ArticleCategory {
  id: string;
  name: string;
  slug: string;
  color: string;
}

export interface ArticleAuthor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface Article extends BaseEntity {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: ArticleCategory;
  author: ArticleAuthor;
  publishedAt: string;
  readingTime: number;
  tags: string[];
  isPublished: boolean;
  isFeatured: boolean;
  seo: SEOData;
}

export interface ArticleListItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  category: ArticleCategory;
  author: ArticleAuthor;
  publishedAt: string;
  readingTime: number;
  isFeatured: boolean;
}