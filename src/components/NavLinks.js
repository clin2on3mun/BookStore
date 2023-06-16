import React from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import styles from '../styles/Header.module.css';

const Navbar = () => (
  <header>
    <nav className={styles.navItems}>
      <ul className={styles.links}>
        <li><h1 style={{ color: '#0290ff' }}>BookStore CMS</h1></li>
        <li><Link to="/" style={{ color: '#121212' }}>BOOKS</Link></li>
        <li><Link to="/categories" className="color-nxt">CATEGORIES</Link></li>
      </ul>
      <button className={styles.user} type="button">
        <span className={styles.icon}><PersonIcon color="primary" style={{ margin: 'auto' }} /></span>
      </button>
    </nav>

  </header>
);

export default Navbar;
