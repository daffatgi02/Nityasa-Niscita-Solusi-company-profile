// components/ui/Badge.tsx
/**
 * Reusable Badge component
 */
import { HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-blue-800 text-white shadow hover:bg-blue-700',
        secondary: 'border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200',
        destructive: 'border-transparent bg-red-500 text-white shadow hover:bg-red-600',
        outline: 'text-gray-950 border-gray-200',
        success: 'border-transparent bg-green-100 text-green-800 hover:bg-green-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };