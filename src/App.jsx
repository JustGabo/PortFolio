import "./App.css";
import About from "./about/page";
import Projects from "./projects/page";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="flex flex-col bg-[#090909] text-white">
      <header className="grid grid-cols-2 items-center bg-[#090909] text-white border-b border-gray-900 fixed w-[100%] p-4">
        <h1 className="text-3xl font-semibold">RG</h1>

        <ul className="flex gap-10  flex-row text-xs font-medium justify-end">
          <li className="cursor-pointer "><a href="/">About me</a></li>
          <li className="cursor-pointer"><a href="projects">Projects</a></li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="projects" element={<Projects/>}></Route>
        {/* <Route path="/" element={<About />}></Route> */}
      </Routes>
      
    </div>
  );
}

export default App;
