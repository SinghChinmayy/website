import Link from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

type ButtonProps = BaseButtonProps &
  (
    | (ComponentPropsWithoutRef<'button'> & { href?: never; external?: never })
    | (ComponentPropsWithoutRef<'a'> & { href: string; external?: boolean })
  );

/**
 * Minimal, responsive button component.
 * Renders as button, Next.js Link, or anchor tag based on props.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  className = '',
  icon,
  iconPosition = 'left',
  href,
  external,
  ...props
}: ButtonProps) {
  // Base styles - minimal and clean
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed min-w-0 max-w-full';

  // Size variants - responsive
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Variant styles - minimal color system
  const variantStyles = {
    primary: 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800 focus:ring-gray-900 dark:bg-white dark:text-gray-900 dark:border-white dark:hover:bg-gray-100 dark:focus:ring-white',
    secondary: 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50 focus:ring-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-white',
    ghost: 'bg-transparent text-gray-900 border-transparent hover:bg-gray-100 focus:ring-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-white',
  };

  // Icon spacing
  const iconGap = icon ? (iconPosition === 'left' ? 'mr-2' : 'ml-2') : '';

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${iconGap} ${className}`.trim();

  // Determine link type
  const isExternal = external || (href && (href.startsWith('http') || href.startsWith('mailto:')));
  const isInternal = href && !isExternal;

  // Content with icon
  const content = (
    <>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
        </>
      )}
    </>
  );

  // Render as Next.js Link for internal routes
  if (isInternal && !disabled) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { href: _h, external: _e, ...linkProps } = props as Record<string, unknown>;
    return (
      <Link 
        href={href!} 
        className={classes} 
        {...(linkProps as Omit<ComponentPropsWithoutRef<typeof Link>, 'href'>)}
      >
        {content}
      </Link>
    );
  }

  // Render as anchor for external links
  if (isExternal && !disabled) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { href: _h, external: _e, ...anchorProps } = props as Record<string, unknown>;
    return (
      <a
        href={href!}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...(anchorProps as Omit<ComponentPropsWithoutRef<'a'>, 'href'>)}
      >
        {content}
      </a>
    );
  }

  // Render as button element
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={classes}
      {...(props as ComponentPropsWithoutRef<'button'>)}
    >
      {content}
    </button>
  );
}
