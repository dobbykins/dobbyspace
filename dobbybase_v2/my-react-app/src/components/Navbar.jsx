import styles from './Navbar.module.css'

const links = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  return (
  <header className={styles.navbar}>
    <div className={`container ${styles.inner}`}>   {/* ← add this wrapper */}
      <span className={styles.logo}>Daniel Quintero</span>
      <nav> ... </nav>
    </div>
  </header>
  )
}
