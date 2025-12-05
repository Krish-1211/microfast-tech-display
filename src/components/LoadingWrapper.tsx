import { useState, useEffect, ReactNode } from 'react';

interface LoadingWrapperProps {
  children: ReactNode;
  skeleton: ReactNode;
  delay?: number;
  className?: string;
}

export const LoadingWrapper = ({
  children,
  skeleton,
  delay = 1000,
  className = ""
}: LoadingWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-500 ${className}`}>
      {isLoading ? (
        <div className="animate-fadeIn h-full">
          {skeleton}
        </div>
      ) : (
        <div className="animate-fadeInUp h-full">
          {children}
        </div>
      )}
    </div>
  );
};

export const StaggeredLoadingWrapper = ({
  children,
  skeleton,
  delay = 500,
  staggerDelay = 200,
  index = 0,
  className = ""
}: LoadingWrapperProps & { staggerDelay?: number; index?: number }) => {
  const [isLoading, setIsLoading] = useState(true);
  const totalDelay = delay + (index * staggerDelay);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, totalDelay);

    return () => clearTimeout(timer);
  }, [totalDelay]);

  return (
    <div className={`transition-all duration-500 ${className}`}>
      {isLoading ? (
        <div className="animate-fadeIn h-full">
          {skeleton}
        </div>
      ) : (
        <div className="animate-slideUp h-full" style={{ animationDelay: `${index * 100}ms` }}>
          {children}
        </div>
      )}
    </div>
  );
};