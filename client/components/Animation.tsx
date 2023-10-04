import { motion } from 'framer-motion'

function ScrollingComponent() {
  return (
    <motion.div
      initial={{ x: '-100%' }} // Initial position (outside the left edge of the viewport)
      animate={{ x: '0%' }} // Animation to move it to the center of the viewport
      exit={{ x: '100%' }} // Animation when it's removed from the DOM (outside the right edge)
      transition={{ duration: 1 }} // Animation duration
      style={{
        position: 'sticky',
        top: 0,
        background: 'white',
        padding: '1rem',
        zIndex: 999, // Adjust this to control stacking order
      }}
    >
      <p>TEST</p>
    </motion.div>
  )
}

export default ScrollingComponent
