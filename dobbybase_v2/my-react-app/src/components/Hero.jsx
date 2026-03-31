import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">   {/* ← add this wrapper */}
      <p className={styles.greeting}>Hi, I'm</p>
      <h1 className={styles.name}>Daniel Quintero</h1>
      {/* ↓ Change this tagline to whatever describes you */}
      <p className={styles.tagline}>Software developer & creative problem solver</p>
      <div className={styles.actions}>
        <a href="#projects" className={styles.btnPrimary}>View my work</a>
        <a href="#contact"  className={styles.btnSecondary}>Get in touch</a>
      </div>
      </div>
    </section>
  )
}
