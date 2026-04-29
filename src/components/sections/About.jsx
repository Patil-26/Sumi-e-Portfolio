import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, techStack } from '../../data/portfolio';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.grid}>

          <div className={styles.left}>
            <div className="section-label reveal"><span>01</span><span>About Me</span></div>

            <h2 className={`heading-lg reveal delay-1 ${styles.heading}`}>
              Fusing intelligent algorithms<br />with secure framework.
            </h2>

            <div className={styles.bioBlock}>
              {personalInfo.bio.map((para, i) => (
                <p key={i} className={`body-text reveal delay-${i + 2}`}>{para}</p>
              ))}
            </div>

            <div className={`reveal delay-4 ${styles.infoRow}`}>
              <div className={styles.infoItem}>
                <span className="mono-text">Location</span>
                <span className={styles.infoValue}>{personalInfo.location}</span>
              </div>
              <div className={styles.infoItem}>
                <span className="mono-text">Status</span>
                <span className={styles.infoValue}>Open to opportunities</span>
              </div>
            </div>

            <div className={`reveal delay-5 ${styles.ctaRow}`}>
              <a href={`mailto:${personalInfo.email}`} className="btn-ink hoverable">
                <span>Get In Touch</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </a>
              <div className={styles.socialRow}>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} hoverable`}>GitHub</a>
                <span className={styles.socialDot} />
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} hoverable`}>LinkedIn</a>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={`reveal reveal-right ${styles.statsGrid}`}>
              {[
                { number: '10+', label: 'Projects Built' },
                { number: '4+',  label: 'ML Models' },
                { number: '3+',  label: 'Years Coding' },
                { number: '∞',   label: 'Curiosity' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1, duration: 0.65 }}
                >
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Decorative ink mark */}
            <div className={`reveal delay-3 ${styles.inkMark}`} aria-hidden="true">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="100" cy="100" rx="80" ry="55" fill="none" stroke="rgba(10,10,10,0.06)" strokeWidth="1"/>
                <ellipse cx="100" cy="100" rx="60" ry="38" fill="none" stroke="rgba(10,10,10,0.05)" strokeWidth="1"/>
                <text x="100" y="108" textAnchor="middle" fontFamily="'IM Fell English'" fontSize="28" fill="rgba(10,10,10,0.07)" fontStyle="italic">Data</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Tech marquee */}
        <div className={`reveal ${styles.marqueeWrapper}`}>
          <div className={styles.marqueeTrack}>
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={i} className={styles.marqueeItem}>
                {tech}<span className={styles.marqueeSep}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}