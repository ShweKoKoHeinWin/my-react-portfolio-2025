import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import { ROUTEs } from "./constants";
import Navbar from "./components/Navbar";
import Image from "./components/core/ImageViewer";
import Project from './components/core/ProjectViewer';
import Contact from "./Pages/Contact";


function App() {
    return (
        <div>
            
            <Navbar/>
            
            <Routes>
                <Route path={ROUTEs.HOME} element={<Home />} />

                <Route path={ROUTEs.ABOUT} element={<About />} />

                <Route path={ROUTEs.PROJECTS} element={<Projects />} />

                <Route path={ROUTEs.CONTACT} element={<Contact/>} />
            </Routes>

            <Image.Viewer/>
            <Project.Viewer/>
        </div>
    );
}

export default App;
