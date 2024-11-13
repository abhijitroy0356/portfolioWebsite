import React, { useEffect, useState } from 'react';

const RoleScroll: React.FC = () => {
  const [scrollDirection, setScrollDirection] = useState<'left' | 'right'>('left');
  
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set direction based on scroll
      if (currentScrollY > lastScrollY) {
        setScrollDirection('right'); // Reverse direction on downward scroll
      } else {
        setScrollDirection('left');  // Return to default on upward scroll
      }
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="flex overflow-hidden whitespace-nowrap text-[132px] w-full mix-blend-difference text-white"
    >
      <div
        className={`flex ${
          scrollDirection === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
        }`}
      >
        {/* Duplicate contents to ensure seamless scrolling */}
        <div className="font-semibold mr-9">UI/UX Designer - </div>
        <div className="font-semibold mr-9">Creative Developer - </div>
      </div>
      <div
        className={`flex ${
          scrollDirection === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
        }`}
        aria-hidden="true"
      >
        {/* Duplicate contents to ensure seamless scrolling */}
        <div className="font-semibold mr-9">UI/UX Designer - </div>
        <div className="font-semibold mr-9">Creative Developer - </div>
      </div>
    </div>
  );
};

export default RoleScroll;
