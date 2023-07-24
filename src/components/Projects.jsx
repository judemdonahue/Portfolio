import React, { useEffect, useRef } from "react";
import '../styles/styles.css';
import dogEar from '../images/DogEar.png'

function Projects() {
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
        <section ref={containerRef} className="hidden">

          <h1 className="text-center text-light mb-5">Noteworthy Projects</h1>

            <div className="grid-container">
                <div className="container">
                    <div className="row justify-content-center">
    
                      <div ref={containerRef} className="hidden grid-item col-3 m-1 bg-gris">
                        <div className="slider bg-gris"></div>
                        <div className="dog-ear-wrapper">
                            <div className="dog-ear justify-content-end">
                                <img src={dogEar} alt="DogEar" />
                            </div>
                            <div className="text-wrapper text-light">
                                TaskHub
                            </div>
                            <div className="info-text text-light">
                                An app designed to leverage the power of social accountability to motivate individuals.
                            </div>
                        </div>
                      </div>
    
                      <div ref={containerRef} className="hidden grid-item col-3 m-1 bg-gris">
                        <div className="slider bg-gris"></div>
                        <div className="dog-ear-wrapper">
                            <div className="dog-ear justify-content-end">
                                <img src={dogEar} alt="DogEar" />
                            </div>
                            <div className="text-wrapper text-light">
                                Black Cell Theme
                            </div>
                            <div className="info-text text-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>                      
                      </div>

                      <div ref={containerRef} className="hidden grid-item col-3 m-1 bg-gris">
                        <div className="slider bg-gris"></div>
                        <div className="dog-ear-wrapper">
                            <div className="dog-ear justify-content-end">
                                <img src={dogEar} alt="DogEar" />
                            </div>
                            <div className="text-wrapper text-light">
                                Express.js-Note-Taker
                            </div>
                            <div className="info-text text-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                      </div>
    
                      <div className="w-100"></div>
    
                      
    
                      <div ref={containerRef} className="hidden grid-item col-3 m-1 bg-gris">
                        <div className="slider bg-gris"></div>
                        <div className="dog-ear-wrapper">
                            <div className="dog-ear justify-content-end">
                                <img src={dogEar} alt="DogEar" />
                            </div>
                            <div className="text-wrapper text-light">
                                Poké-Search
                            </div>
                            <div className="info-text text-light">
                                A comprehensive app that allows users to search and retrieve detailed information on any Pokémon.
                            </div>
                        </div>
                      </div>

                      <div ref={containerRef} className="hidden grid-item col-3 m-1 bg-gris">
                        <div className="slider bg-gris"></div>
                        <div className="dog-ear-wrapper">
                            <div className="dog-ear justify-content-end">
                                <img src={dogEar} alt="DogEar" />
                            </div>
                            <div className="text-wrapper text-light">
                                Poké-Search
                            </div>
                            <div className="info-text text-light">
                                A comprehensive app that allows users to search and retrieve detailed information on any Pokémon.
                            </div>
                        </div>
                      </div>

                      <div ref={containerRef} className="hidden grid-item col-3 m-1 bg-gris">
                        <div className="slider bg-gris"></div>
                        <div className="dog-ear-wrapper">
                            <div className="dog-ear justify-content-end">
                                <img src={dogEar} alt="DogEar" />
                            </div>
                            <div className="text-wrapper text-light">
                                Poké-Search
                            </div>
                            <div className="info-text text-light">
                                A comprehensive app that allows users to search and retrieve detailed information on any Pokémon.
                            </div>
                        </div>
                      </div>
    
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Projects;
