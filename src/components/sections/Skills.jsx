import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/portfolio';
import styles from './Skills.module.css';

function SkillBar({ name, level, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div className={styles.skillRow} ref={ref}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <motion.span
          className={styles.skillLevel}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.6 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className={styles.barTrack}>
        <motion.div
          className={styles.barFill}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ category, items, colIndex }) {
  return (
    <motion.div
      className={styles.category}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay: colIndex * 0.12 }}
      whileHover="hover"
    >
      {/* Card hover lift */}
      <motion.div
        className={styles.cardInner}
        variants={{
          hover: { y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.10)', background: 'var(--canvas)' }
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className={styles.categoryHeader}>
          <span className={styles.categoryNum}>0{colIndex + 1}</span>
          <h3 className={styles.categoryName}>{category}</h3>
          <motion.div
            className={styles.categoryAccent}
            variants={{ hover: { width: '100%' } }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
        <div className={styles.skillList}>
          {items.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className={`section ${styles.skillsSection}`} id="skills">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label reveal"><span>02</span><span>Skills</span></div>
          <h2 className={`heading-lg reveal delay-1 ${styles.heading}`}>
            Tools of the craft.
          </h2>
          <p className={`body-text reveal delay-2 ${styles.subheading}`}>
            A continuously growing arsenal — from machine learning and algorithms
            to full-stack engineering, data visualization and network security.
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((cat, i) => (
            <SkillCategory key={cat.category} category={cat.category} items={cat.items} colIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}