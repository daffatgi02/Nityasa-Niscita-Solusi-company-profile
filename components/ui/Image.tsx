// components/ui/Image.tsx
/**
 * Optimized Image component wrapper
 */
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends Omit<NextImageProps, 'onLoad'> {
  fallbackSrc?: string;
  containerClassName?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ 
    src, 
    alt, 
    fallbackSrc = '/images/placeholder.jpg',
    className,
    containerClassName,
    ...props 
  }, ref) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);

    return (
      <div className={cn('relative overflow-hidden', containerClassName)}>
        <NextImage
          ref={ref}
          src={imageSrc}
          alt={alt}
          className={cn(
            'transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImageSrc(fallbackSrc);
            setIsLoading(false);
          }}
          {...props}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-800 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    );
  }
);

Image.displayName = 'Image';

export { Image };