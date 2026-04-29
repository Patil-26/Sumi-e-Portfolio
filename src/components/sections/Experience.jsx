import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={`section ${styles.expSection}`} id="experience">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label reveal"><span>04</span><span>Experience</span></div>
          <h2 className={`heading-lg reveal delay-1`}>The journey so far.</h2>
        </div>

        <div className={styles.timeline}>
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: i * 0.13 }}
            >
              <div className={styles.timelineLeft}>
                <span className={styles.year}>{exp.year}</span>
                <div className={styles.node}>
                  <div className={styles.nodeDot} />
                  {i < experience.length - 1 && <div className={styles.nodeLine} />}
                </div>
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.roleRow}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.company}>@ {exp.company}</span>
                </div>
                <p className={`body-text ${styles.desc}`}>{exp.description}</p>
                <div className={styles.skillTags}>
                  {exp.skills.map((s) => (
                    <span key={s} className={styles.skillTag}>{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={`reveal ${styles.resumeBlock}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <div className={styles.resumeLine} />
          <div className={styles.resumeContent}>
            <div>
              <p className={styles.resumeLabel}>Full Résumé</p>
              <p className="mono-text">Available as PDF</p>
            </div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-ink hoverable">
              <span>Download PDF</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v7M3 5l3 3 3-3M1 10h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
          <div className={styles.resumeLine} />
        </motion.div>
      </div>
    </section>
  );
}