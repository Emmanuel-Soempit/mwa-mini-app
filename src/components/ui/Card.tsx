import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'rainbow-border' | 'soft';
}

export function Card({ children, variant = 'soft', className = '', ...props }: CardProps) {
  if (variant === 'rainbow-border') {
    return (
      <div
        className={
          'p-[2px] rounded-[18px] bg-gradient-to-r from-[rgba(121,126,237,1)] to-[rgba(121,234,186,1)] shadow-lg ' +
          className
        }
        {...props}
      >
        <div className="bg-white rounded-[16px] p-4 h-full w-full">
          {children}
        </div>
      </div>
    );
  }

  // Soft variant (default)
  return (
    <div
      className={
        'rounded-[16px] bg-[var(--futuristic-floss)]/60 shadow-md p-4 border-none ' +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
}
