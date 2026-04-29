import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import styles from './Loader.module.css';

export default function Loader({ onComplete }) {
  const counterRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete: () => setTimeout(onComplete, 300) });
    tl.to({ val: 0 }, {
      val: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: function () {
        const v = Math.round(this.targets()[0].val);
        if (counterRef.current) counterRef.current.textContent = v;
        if (fillRef.current) fillRef.current.style.width = v + '%';
      },
    });
    return () => tl.kill();
  }, [onComplete]);

  return (
    <motion.div
      className={styles.loader}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className={styles.inner}>
        <p className={styles.name}>Atharva Patil</p>
        <div className={styles.progressTrack}>
          <div ref={fillRef} className={styles.progressFill} />
        </div>
        <div className={styles.counterRow}>
          <span className={styles.label}>Loading</span>
          <span ref={counterRef} className={styles.counter}>0</span>
        </div>
      </div>
    </motion.div>
  );
}