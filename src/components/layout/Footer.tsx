import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Navigation</h3>
          <ul className={styles.footerLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Information</h3>
          <ul className={styles.footerLinks}>
            <li><Link to="/goods">Goods</Link></li>
            <li><Link to="/guidelines">Fan Guidelines</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Legal</h3>
          <ul className={styles.footerLinks}>
            <li><Link to="/terms">利用規約</Link></li>
            <li><Link to="/privacy">プライバシーポリシー</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 伊吹しろう Official Website. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
