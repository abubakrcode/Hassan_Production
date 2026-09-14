"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function ScrollNavigator({ nextRoute, prevRoute, children }) {
  const router = useRouter();
  const isNavigating = useRef(false);
  const touchStartY = useRef(0);

  // Track continuous scroll/swipe actions
  const scrollCount = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const TRIGGER_THRESHOLD = 1; // Number of scrolls/swipes required
    const RESET_DELAY = 1000;    // Reset counter after 1 second of inactivity

    const registerIntent = (direction) => {
      if (isNavigating.current) return;

      // Clear timer to reset count if user pauses
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      // Increment count if direction matches current intention
      scrollCount.current += 1;

      // Set timeout to reset count if user stops scrolling/swiping
      scrollTimeout.current = setTimeout(() => {
        scrollCount.current = 0;
      }, RESET_DELAY);

      // Trigger navigation on the 3rd scroll/swipe
      if (scrollCount.current >= TRIGGER_THRESHOLD) {
        if (direction === "down" && nextRoute) {
          isNavigating.current = true;
          router.push(nextRoute);
        } else if (direction === "up" && prevRoute) {
          isNavigating.current = true;
          router.push(prevRoute);
        }
      }
    };

    // --- Desktop Wheel Handling ---
    const handleWheel = (e) => {
      // Ignore minor trackpad movements
      if (Math.abs(e.deltaY) < 30) return;

      if (e.deltaY > 0) {
        registerIntent("down");
      } else if (e.deltaY < 0) {
        registerIntent("up");
      }
    };

    // --- Mobile Touch Handling ---
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      // Minimum swipe distance (50px) to prevent accidental taps
      const MIN_SWIPE_DISTANCE = 50;

      if (Math.abs(deltaY) > MIN_SWIPE_DISTANCE) {
        if (deltaY > 0) {
          // Swiping UP moves content UP -> navigate to Next
          registerIntent("down");
        } else {
          // Swiping DOWN moves content DOWN -> navigate to Prev
          registerIntent("up");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [nextRoute, prevRoute, router]);

  return <>{children}</>;
}