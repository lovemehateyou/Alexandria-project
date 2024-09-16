import React from 'react'
import styles from '../styles/about.module.css'
import image1 from '../assets/Free Vector _ Programmer concept illustration.jpg'
import image2 from '../assets/Premium Vector _ Business team discussions new project isolated on white background creative group of people working together concept of teamwork idea development and office situation flat vector illustration.jpg'
import person from '../assets/Lexica - Professional portrait of young black man with waves holding a car, Regular show; JS Quintel, by artgerm and Moebius, beautiful, hyperrealism___.jpg'
import person2 from '../assets/Fine Hot Black Man PFP.jpg'
import person3 from '../assets/African Boy.jpg'
import person4 from '../assets/African Boy (1).jpg'
import person5 from '../assets/Art not mine 🔥.jpg'

function About() {
  return (
    <>
      <section className={styles.about_intro}>
        <h1>
            About Alexandria
        </h1>
        <h3>Welcome to Alexandria, where creativity meets innovation.</h3>
        <p>
        At Alexandria, we believe that great design goes beyond aesthetics—its about crafting experiences that connect, engage, and inspire. With a passion for storytelling through design, we specialize in creating visually stunning and functional digital solutions that help brands stand out in the ever-evolving digital landscape.
        We are more than just designers; we are storytellers. Our collaborative approach ensures that every project is tailored to meet your specific needs and reflects your vision. Whether you are a startup looking to establish your brand or an established business ready for a refresh, Alexandria is here to guide you every step of the way.
        We are passionate about design, driven by creativity, and committed to helping your brand succeed. Let Alexandria be your partner in creating designs that not only look great but drive results.
        Let’s Create Something Amazing Together.
        </p>
      </section>

      <section className={styles.about_future}>

        <h1>Future Plans</h1>
        <p>
        At Alexandria, we are always looking forward. As we continue to evolve, our commitment to pushing the boundaries of design and technology remains at the core of everything we do. Our future goals reflect our vision to innovate, grow, and make a lasting impact in the design world.<br/>

        <strong>1. </strong> <u>Expand Our Creative Services: </u>
        We aim to broaden our service offerings to include more immersive and interactive design solutions, such as AR/VR experiences and advanced 3D modeling. By embracing the latest design technologies, we will empower our clients to engage their audiences in new and exciting ways.<br/>

        <strong>2. </strong> <u>Build a Global Presence: </u>
        Our goal is to expand beyond borders and reach clients from all corners of the globe. We are committed to building strong international partnerships and delivering our design expertise to businesses worldwide, making Alexandria a recognized name in the global design community.<br/>

        <strong>3. </strong><u>Develop Sustainable Design Practices: </u> 
        Sustainability is not just a trend; it’s a responsibility. We plan to integrate eco-friendly design practices by optimizing digital assets for minimal energy consumption and reducing waste in our workflows. Our mission is to create designs that are not only impactful but also environmentally conscious.<br/>

        <strong>4. </strong> <u>Foster Talent and Creativity: </u>
        We believe that our team is our greatest asset. We aim to invest in the development of our designers through continuous learning, training programs, and creative workshops. By nurturing talent, we strive to cultivate a culture of innovation where every designer can grow and thrive.<br/>

        <strong>5. </strong> <u>Enhance Client Experience: </u>
        Our clients are at the heart of what we do. We are dedicated to enhancing our client experience by implementing advanced project management tools, transparent communication, and a seamless design process. Our goal is to make working with Alexandria an enjoyable and rewarding journey.<br/>

        <strong>6. </strong> <u>Innovate Through Technology: </u>
        We plan to stay ahead of the curve by integrating AI, machine learning, and other emerging technologies into our design process. By harnessing these tools, we will enhance our design capabilities, improve efficiency, and deliver cutting-edge solutions that set new industry standards.<br/>
        </p>
      </section>

     {/*  Other works */}

      <section className={styles.logo_design_section}>
      <div className={styles.image_placeholder}>
        <img src={image1} />
      </div>
      <div className={styles.text_content}>
        <h1>Unique Design Services for Your Business</h1>
        <p>
          At Alexandria, we specialize in creating visually stunning and memorable Designes that capture the essence of your brand. Our team of talented designers combines creativity and strategic thinking to deliver exceptional designs that make a lasting impression.
        </p>
        <div className={styles.buttons}>
          <button className={styles.get_started}>Get Started &gt;</button>
        </div>
      </div>
    </section>

    <section className={styles.web_solutions_section}>
      <div className={styles.text_content}>
        <p className={styles.expertise_label}>Expertise</p>
        <h1>Transforming Ideas into Beautiful Solutions</h1>
        <p className={styles.description}>
          At Alexandra, we showcase our expertise in web development,Logo design, Graphics through stunning examples. Our team of skilled professionals is dedicated to transforming ideas into beautiful solutions that captivate and engage your audience.
        </p>
        <ul className={styles.features_list}>
          <li>🌐 Responsive Designs that Adapt to Any Device</li>
          <li>🌐 Intuitive User Experiences for Seamless Navigation</li>
          <li>🌐 Cutting-Edge Technologies for Enhanced Performance</li>
        </ul>
        <div className={styles.buttons}>
          <button className={styles.learn_more}>Learn More</button>
        </div>
      </div>
      <div className={styles.image_placeholder}>
        <img src={image2} />
      </div>
    </section>

      <section className={styles.employee_section}>
        <h1>Loyal Employees</h1>
        <div className={styles.individuals}>
            {/* Employee1 */}
            <div className ={styles.person}>
                <img src={person}/>
                <h2>Lead Web Developer</h2>
            </div>
            {/* Employee 2 */}
            <div className={styles.person}>
                <img src={person2}/>
                <h2>System Designer</h2>
            </div>
            {/* Employee 3 */}
            <div className={styles.person}>
                <img src={person3}/>
                <h2>Logo designer</h2>
            </div>
            {/* Employee 4 */}
            <div className={styles.person}>
                <img src={person4}/>
                <h2>Digital marketer</h2>
            </div>
            {/* Employee 5 */}
            <div className={styles.person}>
                <img src={person5}/>
                <h2>Graphic Designer</h2>
            </div>
        </div>
      </section>
      

    </>
  )
}

export default About
