import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import gsap from "gsap";
import AppFooter from "./AppFooter";
import AppHeader from "./Appheader";

const AppLoader: React.FC = () => {
  const counterRef = useRef<HTMLHeadingElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable pointer events during the animation
    if (overlayRef.current) {
      overlayRef.current.classList.add("loading");
    }

    // GSAP animations for the loader
    gsap.to(".counter", 0.25, {
      delay: 3.5,
      opacity: 0, // Hide the counter
    });

    gsap.to(".bar", 1.5, {
      delay: 3.5,
      height: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });

    gsap.from(".h1", 1.5, {
      delay: 4,
      y: 700,
      stagger: {
        amount: 0.5,
      },
      ease: "power4.inOut",
    });

    // Slide up and down effect for the loader counter with fade-in and fade-out
    gsap.to(".counter", {
      opacity: 1, // Fade in
      y: -10, // Slightly move up
      duration: 0.6,
      yoyo: true, // Reverse the animation
      repeat: -1, // Make it repeat only once
      ease: "power4.inOut", // Smooth ease-in and ease-out
      delay: 0.2, // Start after other animations
    });

    gsap.to(".counter", {
      opacity: 0, // Fade out
      y: 10, // Slightly move down
      duration: 0.6,
      yoyo: true, // Reverse the animation
      repeat: -1, // Make it repeat only once
      ease: "power4.inOut", // Smooth ease-in and ease-out
      delay: 0.2, // Start after other animations
    });
    gsap.to(".counter", 1.5, {
        delay: 3.5,
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
      });

    // Trigger the 'hidden' class after 5 seconds
    setTimeout(() => {
      if (overlayRef.current) {
        overlayRef.current.classList.add("hidden");
      }
    }, 5000); // Delay of 5 seconds

    return () => {
      // Clean up
      if (overlayRef.current) {
        overlayRef.current.classList.remove("loading", "hidden");
      }
    };
  }, []);

  const startLoader = () => {
    const counterElement = counterRef.current;
    if (!counterElement) return;

    let currentVal = 0;

    const updateCounter = () => {
      if (currentVal >= 100) {
        return;
      }

      currentVal += Math.floor(Math.random() * 10) + 1;
      currentVal = Math.min(currentVal, 100);

      counterElement.textContent = `${currentVal}%`;

      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    };

    updateCounter();
  };

  useEffect(() => {
    startLoader();
  }, []);

  return (
    <div>
      <div ref={overlayRef} className="overlay">
        <h1 className="counter" ref={counterRef}>
          0%
        </h1>
        {/* Animated bars */}
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <div className="bar" key={index}></div>
          ))}
      </div>
      <div className="container">
        <AppHeader />
        <Outlet />
        <AppFooter />
      </div>
    </div>
  );
};

export default AppLoader;
