import React, { useEffect, useRef } from "react";
import '../styles/styles.css';
import dogEar from '../images/DogEar.png'
import museLogo from '../images/MUSElogo.png'
import taskHubLogo from '../images/taskhublogo.svg'
import pokeLogo from '../images/pokesearchlogo.png'
import weatherLogo from '../images/weatherlogo.png'
import naLogo from '../images/n-a.png'
import readmeLogo from '../images/readmelogo.png'

function Projects() {

  const redirectTaskhub = () => {
    window.location.href = 'https://taskhub.herokuapp.com/'
  }
  const redirectPokeSearch = () => {
    window.location.href = 'https://tpesti96.github.io/Project-01-group-4/'
  }
  const redirectMuse = () => {
    window.location.href = 'https://muse-text-editor-f4f3f92ef4d8.herokuapp.com/'
  }
  const redirectWeatherDashboard = () => {
    window.location.href = 'https://judemdonahue.github.io/Weather-Dashboard/'
  }
  const redirectReadme = () => {
    window.location.href = 'https://github.com/judemdonahue/README-Generator'
  }

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
        <section ref={containerRef} id="portfolio" className="hidden">

          <h1 className="text-center text-light mb-5">Noteworthy Projects</h1>

            <div className="grid-container">
                <div className="container">
                    <div className="row justify-content-center">
    
                      <div ref={containerRef} onClick={redirectTaskhub} className="hidden grid-item col-3 m-1 bg-gris">
                        <div className="slider bg-gris"></div>
                        <div className="dog-ear-wrapper">

                            


                            <div className="dog-ear justify-content-end">
                                <img src={dogEar} alt="DogEar" />
                            </div>

                            <div className="img-container justify-content-center align-items-center">
                              <img id="project-logo" src={taskHubLogo} alt="taskhub-logo" />
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

                            <div className="img-container justify-content-center align-items-center">
                              <img id="project-logo-na" src={naLogo} alt="na-logo" />
                            </div>
                            
                            <div className="text-wrapper text-light">
                                Sentinetic
                            </div>
                            <div className="info-text text-light">
                                A sentiment analysis app that gathers and analyzes tweets on a topic, showing data on public sentiment.
                            </div>
                        </div>                      
                      </div>

                      <div ref={containerRef} onClick={redirectPokeSearch} className="hidden grid-item col-3 m-1 bg-gris">
                        <div className="slider bg-gris"></div>
                        <div className="dog-ear-wrapper">

                            <div className="dog-ear justify-content-end">
                                <img src={dogEar} alt="DogEar" />
                            </div>

                            <div className="img-container justify-content-center align-items-center">
                              <img id="project-logo" src={pokeLogo} alt="pokesearch-logo" />
                            </div>

                            <div className="text-wrapper text-light">
                                Poké-Search
                            </div>
                            <div className="info-text text-light">
                                A comprehensive app that allows users to search and retrieve detailed information on any Pokémon.
                            </div>
                        </div>
                      </div>
    
                      <div className="w-100"></div>
    
                      
    
                      <div ref={containerRef} onClick={redirectMuse} className="hidden grid-item col-3 m-1 bg-gris">
                        <div className="slider bg-gris"></div>
                        <div className="dog-ear-wrapper">
                            
                            <div className="dog-ear justify-content-end">
                                <img src={dogEar} alt="DogEar" />
                            </div>

                            <div className="img-container justify-content-center align-items-center">
                              <img id="project-logo" src={museLogo} alt="muse-logo" />
                            </div>

                            <div className="text-wrapper text-light">
                                M.U.S.E. Text Editor
                            </div>
                            <div className="info-text text-light">
                            MUSE is a text editor that runs in the browser. The app is a single-page application that meets the PWA criteria.
                            </div>
                        </div>
                      </div>

                      <div ref={containerRef} onClick={redirectWeatherDashboard} className="hidden grid-item col-3 m-1 bg-gris">
                        <div className="slider bg-gris"></div>
                        <div className="dog-ear-wrapper">

                            <div className="dog-ear justify-content-end">
                                <img src={dogEar} alt="DogEar" />
                            </div>

                            <div className="img-container justify-content-center align-items-center">
                              <img id="project-logo-weather" src={weatherLogo} alt="weather-logo" />
                            </div>

                            <div className="text-wrapper text-light">
                                Weather Dashboard
                            </div>
                            <div className="info-text text-light">
                              A weather app that provides real-time weather results based on city searches.
                            </div>
                        </div>
                      </div>

                      <div ref={containerRef} onClick={redirectReadme} className="hidden grid-item col-3 m-1 bg-gris">
                        <div className="slider bg-gris"></div>

                        <div className="dog-ear-wrapper">
                            <div className="dog-ear justify-content-end">
                                <img src={dogEar} alt="DogEar" />
                            </div>

                            <div className="img-container justify-content-center align-items-center">
                              <img id="project-logo-na" src={readmeLogo} alt="readme-logo" />
                            </div>

                            <div className="text-wrapper text-light">
                                README.md Generator
                            </div>
                            <div className="info-text text-light">
                                A command-line application that generates a high-quality README.md file
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
