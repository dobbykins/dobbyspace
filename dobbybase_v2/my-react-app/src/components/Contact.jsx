import styles from './Contact.module.css'

// ↓ Add your real links here
const socials = [
  { label: 'GitHub',   href: 'https://github.com/dobbykins?tab=overview&from=2026-03-01&to=2026-03-31' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-quintero-944b58261/' },
  { label: 'Instagram',    href: 'https://www.instagram.com/_.daniel.q._/' },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
      <h2 className={styles.heading}>Get in touch</h2>
      <p className={styles.body}>
        I'm open to opportunities, collaborations, or just a good conversation.
        Reach out through any of the links below.
      </p>
      <ul className={styles.links}>
        {socials.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className={styles.link} target="_blank" rel="noreferrer">
              {label} →
            </a>
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}
