import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavDiv from "./components/NavDiv";
import IntroSection from "./components/IntroSection";
import SkillsContainer from "./components/SkillsContainer";
import ProjectSection from "./components/ProjectSection";



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
            <ProjectSection />
            {/* <SkillsContainer /> */}
        </div>
    );
}

export default App;