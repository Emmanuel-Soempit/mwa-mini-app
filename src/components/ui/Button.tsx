import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'green'
    | 'gradient'
    | 'gray'
    | 'lightOpaque'
    | 'darkOpaque'
    ;
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  className = '',
  isLoading = false,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const baseClasses =
    'btn rounded-[15px]  font-medium flex items-center justify-center transition-colors duration-150';

  const variantClasses: Record<string, string> = {
    primary:
      'bg-[var(--futuristic-floss)] text-[var(--faded-emerald-dark)]',
    secondary:
      'bg-black text-[var(--futuristic-floss)]',
    outline:
      'bg-transparent text-black border-[var(--orbital-space-blue)]',
    green:
      'bg-[var(--true-academy)] text-black border border-[var(rgba(31, 41, 55, 1)k)]',
    gradient:
      'bg-[var(--gradient-futuristic-floss)] text-[var(--true-academy)] border border-[var(--futuristic-floss-dark)]',
    gray:
      'bg-gradient-to-b from-[var(--light-gray)] to-[var(--dark-gray)] text-white',
    lightOpaque:
      'bg-[var(--button-gray)] text-[var(--sea-urchin)] border-none ',
    darkOpaque:
      'bg-[var(--button-dark-gray)] text-white border-none ',
  };

  const sizeClasses: Record<string, string> = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-[10px] text-[16px]',
    lg: 'px-6 py-3 text-base',
  };

  const fullWidthClasses = 'w-full max-w-xs mx-auto block';

  const combinedClasses = [
    baseClasses,
    variantClasses[variant] || '',
    sizeClasses[size],
    fullWidthClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={combinedClasses} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? (
        <div className="flex items-center justify-center w-full">
          <div className="spinner-primary h-5 w-5" />
        </div>
      ) : (
        <>
          {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
          <span className="flex-1">{children}</span>
          {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
