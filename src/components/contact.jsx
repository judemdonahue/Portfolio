import React, { useEffect, useRef } from "react";
import '../styles/styles.css';
import dogEar from '../images/DogEar.png'

function Contact() {

    const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          // Add 'show' class to child elements with the class 'hidden'
          const childElements = entry.target.getElementsByClassName('hidden');
          for (let i = 0; i < childElements.length; i++) {
            childElements[i].classList.add('show');
          }
        } else {
          entry.target.classList.remove('show');
          // Remove 'show' class from child elements with the class 'hidden'
          const childElements = entry.target.getElementsByClassName('hidden');
          for (let i = 0; i < childElements.length; i++) {
            childElements[i].classList.remove('show');
          }
        }
      });
    });

    const containerElement = containerRef.current;
    observer.observe(containerElement);

    return () => {
      observer.unobserve(containerElement);
    };
  }, []);

    return (
        <section ref={containerRef} id="contact" className="hidden">


            <h1 className="text-gris text-center mb-5">Get In Touch</h1>

            <div className="contact-container container">
                            <div className="contact-options">

                                <article className="contact-option">
                                  <div className="dog-ear justify-content-end">
                                    <img src={dogEar} alt="DogEar" />
                                  </div>
                                    <i className="icon fa-sharp fa-regular fa-envelope" ></i>
                                    <h4 className="text-gris">Email</h4>
                                    <h5 className="text-gris">judemdonahue@gmail.com</h5>
                                    <a href="mailto:judemdonahue@gmail.com">Send a message!</a>
                                </article>

                                <article className="contact-option">
                                    <div className="dog-ear justify-content-end">
                                      <img src={dogEar} alt="DogEar" />
                                    </div>
                                    <i class="icon fa-sharp fa-solid fa-mobile-screen-button"></i>
                                    <h4 className="text-gris">Phone</h4>
                                    <h5 className="text-gris">512-970-3159</h5>
                                    <a href="mailto:judemdonahue@gmail.com">Send a message!</a>
                                </article>

                                <article className="contact-option">
                                    <div className="dog-ear justify-content-end">
                                      <img src={dogEar} alt="DogEar" />
                                    </div>
                                    <i className="icon fa-brands fa-facebook-messenger" ></i>
                                    <h4 className="text-gris">Messenger</h4>
                                    <h5 className="text-gris">Jude Donahue</h5>
                                    <a href="https://m.me/judemdonahue">Send a message!</a>
                                </article>


                            </div>
                        
                            <form action="">
                                <input type="text" name="name" placeholder="Your Full Name" required/>
                                <input type="email" name="email" placeholder="Your Email" required/>
                                <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                                <button type="submit" className="cta">Send Message</button>
                            </form>
                            
                        </div>

        </section>
    )
}

export default Contact;