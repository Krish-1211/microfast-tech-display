import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export const TypewriterText = ({ 
  text, 
  className = "", 
  delay = 0, 
  speed = 30 
}: AnimatedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, text, speed, delay]);

  return (
    <span className={`${className}`}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-red-primary">|</span>
      )}
    </span>
  );
};

export const FadeInText = ({ 
  text, 
  className = "", 
  delay = 0 
}: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span 
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {text}
    </span>
  );
};

export const SlideInText = ({ 
  text, 
  className = "", 
  delay = 0 
}: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span 
      className={`inline-block transition-all duration-800 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      } ${className}`}
    >
      {text}
    </span>
  );
};