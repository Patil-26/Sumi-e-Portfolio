import React from 'react';
import { personalInfo } from '../../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <div className={styles.logoMark}>AP</div>
            <div>
              <p className={styles.brandName}>{personalInfo.name}</p>
              <p className={styles.brandRole}>{personalInfo.role}</p>
            </div>
          </div>

          <nav className={styles.footerNav}>
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, i) => (
              <button
                key={item}
                className={`${styles.footerNavLink} hoverable`}
                onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className={styles.footerNavNum}>0{i + 1}</span>
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div className="ink-divider" />

        <div className={styles.bottomRow}>
          <p className="mono-text">© {year} {personalInfo.name}. Crafted with care.</p>
          <div className={styles.bottomLinks}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={`${styles.bottomLink} hoverable`}>GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={`${styles.bottomLink} hoverable`}>LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className={`${styles.bottomLink} hoverable`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}