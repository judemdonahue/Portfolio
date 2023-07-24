import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About"
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import Footer from "./components/Footer"



function App() {
    return (
        <div>
            <Nav />
            <Intro />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;