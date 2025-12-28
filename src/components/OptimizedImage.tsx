import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * OptimizedImage component for responsive images with WebP/AVIF support
 *
 * Usage:
 * - For hero images: import image with ?hero query param
 *   import heroImage from '../assets/images/hero.png?hero';
 *
 * - For regular images: import without query param
 *   import logo from '../assets/images/logo.png';
 *
 * The Vite imagetools plugin will automatically generate:
 * - WebP and AVIF formats for modern browsers
 * - Multiple sizes (1920w, 1280w, 768w) for hero images
 * - Optimized JPG fallback for older browsers
 */
export default function OptimizedImage({
  src,
  alt,
  sizes: _sizes = '100vw',
  className,
  loading,
  priority = false,
  ...props
}: OptimizedImageProps) {
  // Note: sizes will be used when vite-imagetools picture element is implemented
  void _sizes;
  // For now, use the original image directly
  // Once vite-imagetools is installed, this will automatically handle
  // the picture element with multiple formats and sizes

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : (loading || 'lazy')}
      decoding="async"
      {...props}
    />
  );
}

/**
 * TODO: Once vite-imagetools is installed, update this component to:
 *
 * <picture>
 *   <source
 *     type="image/avif"
 *     srcSet={`${src}?format=avif&width=1920 1920w,
 *              ${src}?format=avif&width=1280 1280w,
 *              ${src}?format=avif&width=768 768w`}
 *     sizes={sizes}
 *   />
 *   <source
 *     type="image/webp"
 *     srcSet={`${src}?format=webp&width=1920 1920w,
 *              ${src}?format=webp&width=1280 1280w,
 *              ${src}?format=webp&width=768 768w`}
 *     sizes={sizes}
 *   />
 *   <img
 *     src={src}
 *     alt={alt}
 *     className={className}
 *     loading={priority ? 'eager' : (loading || 'lazy')}
 *     decoding="async"
 *     {...props}
 *   />
 * </picture>
 */
