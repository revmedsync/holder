"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Section1 } from "../component1/Section1";
import { Section2 } from "../component1/Section2";
import { Section3 } from "../component1/Section3";
import { Section3_1 } from "../component1/Section3_1";
import { Section4 } from "../component1/Section4";
import { Section5 } from "../component1/Section5";
import { Section6 } from "../component1/Section6";
import { Section7 } from "../component1/Section7";
import { SVGUpFlow } from "../component1/svg^";
import { SVGDownFlow } from "../component1/svgV";
import { SVGDownFlow2 } from "../component1/svgV2";

export default function IndexPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  // Manually set the scroll length limit (height of the scrollable area)
  const scrollLengthLimit = 100; // Adjust this value to control the scroll length limit

  // Adjust these values to control scroll behavior
  const scrollSpeed = 0.5; // Lower values make scrolling slower
  const smoothness = {
    stiffness: 20,
    damping: 10,
    restDelta: 0.001
  };

  const smoothYProgress = useSpring(scrollYProgress, smoothness);

  const y = useTransform(smoothYProgress, [0, 1], ['0%', `${-100 / scrollSpeed}%`]);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <div style={{ overflowY: 'scroll', height: '100%' }} ref={containerRef}>
        <motion.div
          style={{ y, height: `${scrollLengthLimit}vh` }} // Use the scroll length limit variable here
        >
          <Section1 />
          <SVGDownFlow />
          <Section2 />
          <Section3 />
          <Section3_1 />
          <SVGUpFlow />
          <Section4 />
          <Section5 />
          <SVGDownFlow2 />
          <Section6 />
          <Section7 />
        </motion.div>
      </div>
    </div>
  );
}
