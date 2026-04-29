import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { personalInfo } from '../../data/portfolio';
import styles from './Hero.module.css';

function InkStrokes() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const paths = ref.current.querySelectorAll('path');
    gsap.fromTo(paths,
      { strokeDashoffset: 1200 },
      { strokeDashoffset: 0, duration: 3, stagger: 0.4, delay: 0.3, ease: 'power2.inOut' }
    );
  }, []);

  return (
    <div className={styles.inkStrokes} ref={ref} aria-hidden="true">
      <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <path
          d="M -40 120 Q 200 60 450 130 Q 620 175 860 100"
          fill="none" stroke="rgba(10,10,10,0.06)" strokeWidth="80"
          strokeDasharray="1200" strokeLinecap="round"
        />
        <path
          d="M 0 280 Q 250 210 500 290 Q 680 340 860 260"
          fill="none" stroke="rgba(10,10,10,0.04)" strokeWidth="55"
          strokeDasharray="1200" strokeLinecap="round"
        />
        <path
          d="M -60 420 Q 180 360 440 430 Q 640 470 880 390"
          fill="none" stroke="rgba(10,10,10,0.05)" strokeWidth="65"
          strokeDasharray="1200" strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 25, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 25, damping: 18 });

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width * 18);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height * 8);
    };
    hero.addEventListener('mousemove', onMove);
    return () => hero.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 1.0 } },
  };
  const word = {
    hidden: { opacity: 0, y: 48 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section className={styles.hero} ref={heroRef} id="hero">
      <InkStrokes />

      <div className={`container ${styles.heroContent}`}>

        <motion.div
          className={styles.greeting}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className={styles.greetingLine} />
          <span>Hello — I'm</span>
        </motion.div>

        <motion.h1
          className={`heading-xl ${styles.heroTitle}`}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {["Atharva", "Patil,"].map((w, i) => (
            <motion.span key={i} variants={word} className={styles.word}>{w}&nbsp;</motion.span>
          ))}
          <br />
          {["a", "Security-Focused"].map((w, i) => (
            <motion.span key={i} variants={word} className={styles.word}>{w}&nbsp;</motion.span>
          ))}
          <motion.span variants={word} className={`${styles.word} ${styles.wordUnderline}`}>
            ML
          </motion.span>
          <br />
          {["&&", "Full-Stack Developer."].map((w, i) => (
            <motion.span
              key={i}
              variants={word}
              className={`${styles.word} ${i === 0 ? styles.wordMono : ''}`}
            >
              {w}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className={`body-text ${styles.heroTagline}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          className={styles.heroCtas}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <button
            className="btn-ink hoverable"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>View Projects</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
          <button
            className={styles.btnGhost}
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            About Me
          </button>
        </motion.div>

        <motion.div
          className={styles.heroBadge}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <span className="mono-text">◎ {personalInfo.location}</span>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </motion.div>

      <div className={styles.fadeBottom} />
    </section>
  );
}