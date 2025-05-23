'use client'

import { motion } from 'motion/react'

import * as styles from './Spinner.css'

const Spinner = () => {
  return (
    <div className={styles.containerStyle}>
      <motion.div
        className={styles.spinnerStyle}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

export default Spinner
