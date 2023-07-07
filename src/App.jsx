import "./App.css";
import "../src/main"
import About from "./about/page";
import Projects from "./projects/page";
import Contact from './contact/page'
import {Route, Routes, Link} from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
    <div className="flex flex-col bg-[#090909] text-white pb-[4em] md:pb-[2em]">
      <header className="grid z-50 grid-cols-2 items-center bg-[#090909] text-white border-b border-gray-900 fixed w-[100%] p-4">
        <h1 className="text-3xl font-semibold">RG</h1>

        <ul className="flex gap-10  flex-row text-xs items-center font-medium justify-end">
        <li className="about pb-[2px] cursor-pointer hover:translate-y-[-5px] transition-all"><Link to="/">About</Link></li>
        <li className="projects pb-[2px] cursor-pointer hover:translate-y-[-5px] transition-all"><Link to="projects">Projects</Link></li>
        <li className="contact pb-[2px] cursor-pointer hover:translate-y-[-5px] transition-all"><Link to="contact">Contact</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="projects" element={<Projects/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
