import React,{useState} from 'react'
import Logo from '../assets/logo alex.jpg'
import { Link } from 'react-router-dom'
import styles from'../styles/nav.module.css'

function Navbar() {
const [menuOpen,setopenmenu] = useState(false)

const toggleMenu = ()=>{
  setopenmenu(!menuOpen)
}
  return (
    <header className={styles.header}>
     {/*  <div className={styles.Logoimg}>
        { <img src={Logo} className={styles.Logo}/>}
      </div> */}

       {/* Hamburger Icon for Mobile */}

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.line} ${menuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.line} ${menuOpen ? styles.open : ''}`}></div>
      </div>

      {/* Navigation Links */}

      <div>
        <nav className= {`${styles.Navbar} ${menuOpen ? styles.active : ''}`} >
            <Link to='/' onClick={toggleMenu}>Home</Link>
            <Link to='/services' onClick={toggleMenu}>Services</Link>
            <Link to='/about' onClick={toggleMenu}>About</Link>
            <Link to='/contact' onClick={toggleMenu}>Contact</Link>
            
        </nav>
      </div>  
    </header>
  )
}

export default Navbar
