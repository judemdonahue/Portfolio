import React, { useEffect, useRef } from "react";
import '../styles/styles.css';
import headShot from '../images/JudeHeadshotSuit.jpg'

function IntroSection() {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
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
            <div className="name-container container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h3 className="text-gris">My name is </h3>
                        <h1 className="text-white d-inline">Jude Donahue,</h1>
                        <h1 className="text-gris ">I'm a versatile web creative.</h1>
                        <p>
                            I'm a passionate Austin-based web developer with diverse creative skills in technology, music, and design.
                            Committed to delivering detail-oriented, creative solutions and seeking new challenges for personal and professional growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;