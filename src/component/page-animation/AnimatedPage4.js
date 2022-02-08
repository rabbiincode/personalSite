import { motion } from 'framer-motion';

const animations = {
  initial: {opacity: 0, x: 100, y: 100},
  animate: {opacity: 1, x: 0, y: 0},
  exit: {opacity: 0, x: -100, y: -100},
}

const AnimatedPage4 = ({ children }) => {
  return (
    <motion.div
       key={4} 
       variants={animations}
       initial='initial'
       animate='animate'
       exit='exit'
       transition={{ duration: 1.5, bounce: 0.5  }}
    >
      {children}
    </motion.div>
  )
};

export default AnimatedPage4;
