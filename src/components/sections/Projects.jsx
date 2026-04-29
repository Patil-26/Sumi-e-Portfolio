import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolio';
import styles from './Projects.module.css';

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.cardTopBar}>
        <span className={styles.cardNum}>/ {project.id}</span>
        <div className={styles.cardLinks}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${styles.cardLink} hoverable`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              <span>Code</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className={`${styles.cardLink} hoverable`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              <span>Live</span>
            </a>
          )}
        </div>
      </div>

      <div className={styles.cardMeta}>
        <span className={styles.cardCategory}>{project.category}</span>
        <span className={styles.cardYear}>{project.year}</span>
      </div>

      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={`body-text ${styles.cardDesc}`}>{project.description}</p>

      <div className={styles.tagRow}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className={styles.accentBar}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
      </AnimatePresence>

      {project.featured && <div className={styles.featuredBadge}><span>Featured</span></div>}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section className={`section ${styles.projectsSection}`} id="projects">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label reveal"><span>03</span><span>Projects</span></div>
          <div className={styles.headerRow}>
            <h2 className={`heading-lg reveal delay-1`}>Things I've built.</h2>
            <a href="https://github.com/Patil-26" target="_blank" rel="noopener noreferrer" className="btn-ink reveal delay-2 hoverable">
              <span>All on GitHub</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}