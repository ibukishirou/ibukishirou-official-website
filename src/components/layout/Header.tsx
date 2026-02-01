import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img src="/assets/img/logo_wolf.webp" alt="伊吹しろう ロゴ" />
          <span>伊吹しろう Official Website</span>
        </Link>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/profile" onClick={closeMenu}>Profile</Link></li>
          <li><Link to="/calendar" onClick={closeMenu}>Calendar</Link></li>
          <li><Link to="/achievements" onClick={closeMenu}>Achievements</Link></li>
          <li><Link to="/goods" onClick={closeMenu}>Goods</Link></li>
          <li><Link to="/guidelines" onClick={closeMenu}>Guidelines</Link></li>
          <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
        <div 
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}
