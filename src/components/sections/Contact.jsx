import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className={`section ${styles.contactSection}`} id="contact">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label reveal"><span>05</span><span>Contact</span></div>
          <h2 className={`heading-xl reveal delay-1 ${styles.heading}`}>
            Let's build<br />something great.
          </h2>
          <p className={`body-text reveal delay-2 ${styles.subtext}`}>
            Open to collaborations, internships, freelance, or just a great conversation.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`reveal ${styles.infoCol}`}>
            {[
              { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { label: 'GitHub', value: 'github.com/Patil-26', href: personalInfo.github },
              { label: 'LinkedIn', value: 'linkedin.com/in/patilatharva26', href: personalInfo.linkedin },
            ].map(({ label, value, href }) => (
              <div key={label} className={styles.contactItem}>
                <span className="mono-text">{label}</span>
                <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles.contactValue} hoverable`}>
                  {value}
                </a>
              </div>
            ))}
          </div>

          <div className={`reveal delay-2 ${styles.formCol}`}>
            <form className={styles.form} onSubmit={handleSubmit}>
              {[
                { name: 'name', label: 'Your Name', placeholder: 'John Doe', type: 'text' },
                { name: 'email', label: 'Email', placeholder: 'john@example.com', type: 'email' },
              ].map(({ name, label, placeholder, type }) => (
                <div key={name} className={`${styles.field} ${focused === name ? styles.fieldFocused : ''}`}>
                  <label className={styles.fieldLabel}>{label}</label>
                  <input
                    type={type}
                    name={name}
                    required
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={handleChange}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                    className={styles.input}
                  />
                  <div className={styles.fieldLine} />
                </div>
              ))}

              <div className={`${styles.field} ${focused === 'message' ? styles.fieldFocused : ''}`}>
                <label className={styles.fieldLabel}>Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className={`${styles.input} ${styles.textarea}`}
                />
                <div className={styles.fieldLine} />
              </div>

              <button type="submit" className={`btn-ink hoverable ${styles.submitBtn}`}>
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.span key="sent" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                      ✓ Message sent!
                    </motion.span>
                  ) : (
                    <motion.span key="send" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      Send Message
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}