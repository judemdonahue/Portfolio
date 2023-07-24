import React from "react";
import headShot from '../images/JudeHeadshotSuit.jpg'

const PDF_FILE_URL = '../../Jude-Donahue_Resume.pdf'

function About() {
    const downloadFileAtURL=(url)=>{
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href=url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <section>
            <div className="about-container container">
            <div className="row justify-content-center">

                <div className="col-lg-5">
                    <h2 className="text-light">About me</h2>
                    <p>My name is Jude Donahue, born and raised in Austin, currently pursuing a degree in full stack web development, combining my passion for technology, problem-solving, and creative skills. Alongside web development, I have a strong background in music production, which has honed my attention to detail, work ethic, and teamwork abilities.</p>
                    <p>Moreover, I am Photoshop certified and experienced in graphic design, creating high-quality digital content for websites and social media. Through this, I have gained expertise in online networking, digital marketplace sales, and building a strong online presence.</p>
                    <p>In summary, I am a dedicated and creative professional with diverse skills and experiences, always seeking new challenges and opportunities to grow as a web developer and creative expert.</p>
                    <p>Here are a few of the technologies I've been engaging with lately:</p>
                    <div className="list-container container">
                        <div className="row">
                            <div className="col-sm-5">
                                <ul>
                                    <li>JavaScript (ES6+)</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>
                            <div className="col-sm-5">
                                <ul>
                                    <li>Express.js</li>
                                    <li>GraphQL</li>
                                    <li>MySQL, Sequelize</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <img id="img" src={headShot} alt="Jude-img" />
                    <div className="container">

                        <p className="text-center mt-5">My Resume:</p>
                            <div className="row justify-content-center">
                                <button onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}} className="w-50">Download</button>
                            </div>
                    </div>
                </div>


            </div>
        </div>
        </section>
    )
}

export default About;