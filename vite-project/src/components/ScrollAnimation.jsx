// ScrollAnimation.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ScrollAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y:50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y:50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
