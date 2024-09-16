import React from 'react'
import styles from '../styles/home.module.css'
import logo from '../assets/Free Vector _ Portfolio update concept illustration.jpg'
import logo2 from '../assets/Web Development Illustration Design Assets - Free in SVG, PNG, BLEND, GIF _ IconScout.jpg'
import logo3 from '../assets/Creativity Customizable Semi Flat Illustrations _ Pana Style.jpg'
import client1 from '../assets/portrait-4568762_1920.jpg'
import client2 from '../assets/woman-8643445_1920.png'
import client3 from '../assets/ai-generated-8051238_1920.jpg'
import image1 from '../assets/Free Vector _ Programmer concept illustration.jpg'
import image2 from '../assets/team work.jpg'
import proj1 from '../assets/download.jpg'
import proj2 from '../assets/logo alex.jpg'
import proj3 from '../assets/Modern Restaurant Flyer Template Design _ EPS Free Download - Pikbest.jpg'
import proj4 from '../assets/99 Inspirational Website Design Templates - DesignerPeople.jpg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function Home() {
  const navigate = useNavigate()

  const testimonials = [
    {
      stars: 5,
      feedback: "Our experience with Alexandra was exceptional. They delivered beyond our expectations.",
      name: "John Doe",
      position: "CEO, ABC Company",
      image:client1
    },
    {
      stars: 5,
      feedback: "Working with Alexandra was a game-changer for our business. Their designs are top-notch.",
      name: "Jane Smith",
      position: "Marketing Manager, XYZ Inc.",
      image:client2
    },
    {
      stars: 5,
      feedback: "Alexandra's team is highly skilled and professional. They delivered our project on time and within budget.",
      name: "David Johnson",
      position: "CTO, 123 Corporation",
      image:client3
    },
  ];

  const [lightboxVisible, setLightboxVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
  
    // Function to handle image click
    const handleImageClick = (src) => {
      setSelectedImage(src);
      setLightboxVisible(true);
    };
  
    // Function to close the lightbox
    const closeLightbox = () => {
      setLightboxVisible(false);
      setSelectedImage('');
    };


  return (
    <>
      <div className={styles.hero}>
      <div className={styles.hero_dis}>
            <h1>Unlock Your Brand's Potential with Alexandra</h1>
            <p>
            At Alexandra, we specialize in creating stunning logos, developing powerful websites, and bringing your ideas to life with captivating animations.
            </p>
          <span>
          <button onClick={()=>navigate('/contact')}> Contact Us </button>
          <button onClick={()=>navigate('/About')}>Learn More</button>
          </span>
            

        </div>
        <div className={styles.img_dis}>
            <iframe src='https://my.spline.design/clonercubesimplecopy-be0421b64854319b3d82944c03a972e4/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
    </div>

    <section className={styles.section1}>
      <div className={styles.showcase_header}>
        <h1> Our Services</h1>
        <p>
        Explore our services and what we offer
        </p>
        </div> 

        <div className={styles.showcase_grid}>

          {/* first item  */}

            <div onClick={() => navigate('/services')} className={styles.showcase_item}>
                <div className={styles.showcase_img}>
                { <img src={logo}/>}
                </div>

                <h3 className={styles.showcase_item_title}>Logo Design &gt;</h3>
                <p className={styles.showcase_item_desc}>
                Crafting unique and memorable logos for businesses.
                 </p>    
            </div>

              {/* Second item  */}

            <div onClick={() => navigate('/services')}  className={styles.showcase_item}>
                <div className={styles.showcase_img}>
                { <img src={logo2}/>}
                </div>

                <h3 className={styles.showcase_item_title}>Web Development &gt;</h3>
                <p className={styles.showcase_item_desc}>
                Building responsive and user-friendly websites.
                 </p>    
            </div>
            
              {/* Third item  */}

              <div onClick={() => navigate('/services')}  className={styles.showcase_item}>
                <div className={styles.showcase_img}>
                { <img src={logo3}/>}
                </div>

                <h3 className={styles.showcase_item_title}>Graphical Designing &gt;</h3>
                <p className={styles.showcase_item_desc}>
                Bringing ideas to life through captivating animations.
                 </p>    
            </div>

        </div>
    </section>

    <section className={styles.section1}>
      <div className={styles.showcase_header}>
        <h1> Recent Projects Showcase</h1>
        </div> 

        <div className={styles.showslide_grid}>

          {/* first item  */}

            <div className={styles.showslide_item}>
                <div className={styles.showslide_img} onClick={() => handleImageClick(proj4)}>
                { <img src={proj4}/>}
                </div>   
            </div>

              {/* Second item  */}

            <div className={styles.showslide_item}>
                <div className={styles.showslide_img} onClick={() => handleImageClick(proj1)}>
                { <img src={proj1}/>}
                </div>  
            </div>
            
              {/* Third item  */}

              <div className={styles.showslide_item}>
                <div className={styles.showslide_img} onClick={() => handleImageClick(proj2)}>
                { <img src={proj2}/>}
                </div>   
            </div>

                {/* fouth item  */}

            <div className={styles.showslide_item}>
                <div className={styles.showslide_img} onClick={() => handleImageClick(proj3)}>
                { <img src={proj3}/>}
                </div>  
            </div>
        </div>

        {lightboxVisible && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <span className={styles.close} onClick={closeLightbox}>&times;</span>
          <img className={styles.lightbox_image} src={selectedImage} alt="Enlarged view" />
        </div>
      )}
    </section>
  
    <section className={styles.workflow_container}>
      <h1 className={styles.workflow_title}>
        Streamlined <strong>Design Workflow</strong> for Stunning Results
      </h1>
      <p className={styles.workflow_description}>
        At Alexandra, we follow a step-by-step process to bring your design
        vision to life. From the initial consultation to the final product, our
        team of experts ensures a seamless experience.
      </p>

      <div className={styles.workflow_steps}>
        <div className={styles.workflow_step}>
          <div className={styles.workflow_icon}>

          <iframe src="https://lottie.host/embed/7a8b94a8-8c4b-45e3-a6c7-cb452db555b8/1a6mmf93oa.json"></iframe>

          </div>
          <h2>Consultation and Concept Development</h2>
          <p>
            We begin by understanding your goals and ideas, conducting thorough
            research, and creating a solid design concept.
          </p>
        </div>

        <div className={styles.workflow_step}>
          <div className={styles.workflow_icon}>

          <iframe src="https://lottie.host/embed/7a8b94a8-8c4b-45e3-a6c7-cb452db555b8/1a6mmf93oa.json"></iframe>

          </div>
          <h2>Design and Iteration Process</h2>
          <p>
            Our talented designers work closely with you, refining the design
            through multiple iterations until it meets your expectations.
          </p>
        </div>

        <div className={styles.workflow_step}>
          <div className={styles.workflow_icon}>

          <iframe src="https://lottie.host/embed/7a8b94a8-8c4b-45e3-a6c7-cb452db555b8/1a6mmf93oa.json"></iframe>

          </div>
          <h2>Finalization and Delivery</h2>
          <p>
            Once you are satisfied with the design, we finalize it and deliver
            the high-quality files to you.
          </p>
        </div>
      </div>
    </section>

    {/* deitailed view */}

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
          <button onClick={()=>navigate('/contact')} className={styles.get_started}>Contact us &gt;</button>
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
          <button onClick={()=>navigate('/About')} className={styles.learn_more}>Learn More</button>
        </div>
      </div>
      <div className={styles.image_placeholder}>
        <img src={image2} />
      </div>
    </section>

    {/* HappyClients */}

    <section className={styles.clients_container}>
      <h2 className={styles.clients_title}>Happy Clients</h2>
      <p className={styles.clients_subtitle}>Read what our clients have to say about us</p>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial_card}>
            <div className={styles.stars}>
              {"★".repeat(testimonial.stars)}
            </div>
            <p className={styles.feedback}>{testimonial.feedback}</p>
            <div className={styles.client_info}>
              <div className={styles.client_avatar}>
                  { <img src={testimonial.image}/>}
              </div>
              <div className={styles.client_details}>
                <p className={styles.client_name}>{testimonial.name}</p>
                <p className={styles.client_position}>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

     {/*  Transforming ideas */}

     <section className={styles.design_container}>
      <div className={styles.design_left}>
        <h1 className={styles.design_title}>Transforming Ideas into Stunning Designs</h1>
      </div>
      <div className={styles.design_right}>
        <p className={styles.design_description}>
          At Alexandra, we specialize in creating captivating logos, developing dynamic websites, and crafting mesmerizing designes. Contact us today for a free consultation or quote.
        </p>
        <div className={styles.design_buttons}>
          <button onClick={()=>navigate('/contact')} className={styles.contact_button}>Contact</button>
          <button onClick={()=>navigate('/About')} className={styles.learn_button}>Learn More</button>
        </div>
      </div>
    </section>  
    </>
    
  )
}

export default Home
