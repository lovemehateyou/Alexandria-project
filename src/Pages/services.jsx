import React from 'react'
import image from '../assets/Free Vector _ Team working on project together.jpg'
import logo from '../assets/Free Vector _ Portfolio update concept illustration.jpg'
import logo2 from '../assets/Web Development Illustration Design Assets - Free in SVG, PNG, BLEND, GIF _ IconScout.jpg'
import logo3 from '../assets/Creativity Customizable Semi Flat Illustrations _ Pana Style.jpg'
import logo4 from '../assets/Free Vector _ App development illustration.jpg'
import logo5 from '../assets/Free Vector _ Digital marketing team with laptops and light bulb_ marketing team metrics, marketing team lead and responsibilities concept on white background_.jpg'
import logo6 from '../assets/SaaS, software as service concept by vectorpointstudio on @creativemarket.jpg'

import styles from '../styles/service.module.css'

function Services() {
  return (
    <>
        <section className={styles.intro_section}>
            <div className={styles.info_services}>
                <h1>Our Services</h1>
                <p>

        We are a full-service digital agency that specializes in creating innovative and effective digital solutions for businesses of all sizes, including web design, branding, marketing, and strategy services. Our team of experts is dedicated to crafting tailored solutions that drive growth, enhance brand visibility, and improve user experience. 
                </p>

                <button onClick={()=>navigate('/contact')}>Get in Touch</button>
                
            </div>

            <div className={styles.img_service}>
                <img src={image}/>
            </div>
        </section>


    <section className={styles.section1}>
      <div className={styles.showcase_header}>
        <h1> Current Services</h1>
        <p>
        Explore our services and what we offer
        </p>
        </div> 

        <div className={styles.showcase_grid}>

          {/* first item  */}

            <div className={styles.showcase_item}>
                <div className={styles.showcase_img}>
                { <img src={logo}/>}
                </div>

                <h3 className={styles.showcase_item_title}>Logo Design</h3>
                <p className={styles.showcase_item_desc}>
                Crafting unique and memorable logos for businesses.
                 </p>    
            </div>

              {/* Second item  */}

            <div className={styles.showcase_item}>
                <div className={styles.showcase_img}>
                { <img src={logo2}/>}
                </div>

                <h3 className={styles.showcase_item_title}>Web Development</h3>
                <p className={styles.showcase_item_desc}>
                Building responsive and user-friendly websites.
                 </p>    
            </div>
            
              {/* Third item  */}

              <div className={styles.showcase_item}>
                <div className={styles.showcase_img}>
                { <img src={logo3}/>}
                </div>

                <h3 className={styles.showcase_item_title}>Graphic Designing</h3>
                <p className={styles.showcase_item_desc}>
                Bringing ideas to life through captivating animations.
                 </p>    
            </div>

        </div>
    </section>

    <section className={styles.section1}>
      <div className={styles.showcase_header}>
        <h1> Future Services</h1>
        <p>
        Explore our services and what we offer
        </p>
        </div> 

        <div className={styles.showcase_grid}>

          {/* first item  */}

            <div className={styles.showcase_item}>
                <div className={styles.showcase_img}>
                { <img src={logo4}/>}
                </div>

                <h3 className={styles.showcase_item_title}>App Development</h3>
                <p className={styles.showcase_item_desc}>
                Crafting unique and memorable logos for businesses.
                 </p>    
            </div>

              {/* Second item  */}

            <div className={styles.showcase_item}>
                <div className={styles.showcase_img}>
                { <img src={logo5}/>}
                </div>

                <h3 className={styles.showcase_item_title}>Digital Marketing</h3>
                <p className={styles.showcase_item_desc}>
                Building responsive and user-friendly websites.
                 </p>    
            </div>
            
              {/* Third item  */}

              <div className={styles.showcase_item}>
                <div className={styles.showcase_img}>
                { <img src={logo6}/>}
                </div>

                <h3 className={styles.showcase_item_title}>SAAS</h3>
                <p className={styles.showcase_item_desc}>
                Bringing ideas to life through captivating animations.
                 </p>    
            </div>

        </div>
    </section>
    </>
  )
}

export default Services
