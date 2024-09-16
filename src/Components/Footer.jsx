import React,{useState} from 'react';
import styles from '../styles/footer.module.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    
  const [input,setinput] = useState() 

    function subscribe(){
        if(input.includes('@')){
            alert("You have subscribed to our newsletter");
        document.querySelector(`${styles.email_input}`).innerHTML = ''
        }
        else{
            alert('Input a Proper Email')
        }
        
    }
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_left}>
        <p className={styles.newsletter_text}>
          Stay up to date on the latest features and releases by joining our newsletter.
        </p>
        <div className={styles.newsletter}>
          <input 
          type="email" 
          value={input} 
          placeholder="Your email" 
          onChange={(e) => setinput(e.target.value)}
          className={styles.email_input} 
          />
          <button onClick={subscribe} className={styles.subscribe_button}>Subscribe</button>
        </div>
        <p className={styles.privacy_text }>
          By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
        </p>
      </div>
      <div className={styles.footer_columns}>
        <div className={styles.columns}>
          <h3>Website Links</h3>
          <ul>
            <li> <Link to='/' >Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li> <Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
        <div className={styles.columns}>
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
