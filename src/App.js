import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavDiv from "./components/NavDiv";
import IntroSection from "./components/IntroSection";
import About from "./components/about"
import SkillsContainer from "./components/SkillsContainer";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/contact"
import Footer from "./components/footer"



function App() {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route path='portfolio' element={<Portfolio
        //         />}>
                    
        //         </Route>

        //         <Route>
                    
        //         </Route>

        //     </Routes>
        // </BrowserRouter>

        <div>
            <NavDiv />
            <IntroSection />
            <About />
            <ProjectSection />
            <Contact />
            <Footer />
            {/* <SkillsContainer /> */}
        </div>
    );
}

export default App;