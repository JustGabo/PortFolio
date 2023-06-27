import { Link } from "react-scroll";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Page = () => {
  return (
    <div id="projects" className="flex mt-[70px] px-5">
      <section className="fixed flex flex-col gap-20 border-r pt-10 border-gray-900 w-[12%] h-screen">
        <h2 id="projects" className="font-semibold cursor-pointer text-xl">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </h2>
        <ul className="ul flex flex-col gap-2 w-[80%] text-xs font-medium ">
          <li className="cursor-pointer   py-3">
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About me
            </Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </section>
      <section className="ml-[180px] pt-10 w-[100%] flex flex-col gap-20">
        <article className="h-screen flex flex-col justify-center items-center">
          <div className="mb-[100px] flex flex-col items-center gap-2">
            <h3 className="font-medium text-xl">Go Down To Know Me More</h3>
            <Link
              activeClass="active"
              to="aboutme"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <ChevronDownIcon className="w-8 aspect-square cursor-pointer"></ChevronDownIcon>
            </Link>
          </div>
        </article>

        <article className="grid gap-32">
          <section id="aboutme" className="flex items-center justify-between">
            <div className="flex flex-col gap-10 w-[40%]">
              <h3 className="text-3xl">About me</h3>

              <div className="flex flex-col gap-5">
                <p className="text-base font-thin">
                  I'm a website developer and designer with a lot of experience
                  in this environment.
                </p>

                <p className="text-base font-thin">
                  I like to create useful and beautiful websites for my clients,
                  and sometimes just out of passion.
                </p>

                <p className="text-base font-thin">
                  Do prioritize usability and functionality over all things, but
                  always trying to build beautiful work for you.
                </p>
              </div>
            </div>

            <div className="w-[80%] flex justify-center items-center">
              <img
                className="w-[25em] aspect-square object-cover"
                src="https://estudiantes.ucontinental.edu.pe/wp-content/uploads/2020/09/Madurez-emocional-7.jpg"
                alt=""
              />
            </div>
          </section>

          <section id="skills" className="grid gap-16">
            <h3 className="text-2xl  text-center">
              Now, all the technologies, languages and tools with which I have
              worked.
            </h3>

            <article className="grid grid-cols-8 border-t-2 border-[#0a3447]">
              <div className="flex flex-col items-center ">
                <div className="w-[2px] h-[200px] bg-[#0a3447]"></div>
                <p>HTML:5</p>
              </div>
              <div className="flex flex-col items-center ">
                <div className="w-[2px] h-[250px] bg-[#0a3447]"></div>
                <p>CSS</p>
              </div>
              <div className="flex flex-col items-center ">
                <div className="w-[2px] h-[150px] bg-[#0a3447]"></div>
                <p>React</p>
              </div>
              <div className="flex flex-col items-center ">
                <div className="w-[2px] h-[180px] bg-[#0a3447]"></div>
                <p>TypeScript</p>
              </div>
              <div className="flex flex-col items-center ">
                <div className="w-[2px] h-[210px] bg-[#0a3447]"></div>
                <p>JavaScript</p>
              </div>
              <div className="flex flex-col items-center ">
                <div className="w-[2px] h-[100px] bg-[#0a3447]"></div>
                <p>Figma</p>
              </div>
              <div className="flex flex-col items-center ">
                <div className="w-[2px] h-[210px] bg-[#0a3447]"></div>
                <p>TailwindCss</p>
              </div>
              <div className="flex flex-col items-center ">
                <div className="w-[2px] h-[280px] bg-[#0a3447]"></div>
                <p>NodeJs</p>
              </div>
            </article>
          </section>

          <section
            id="contact"
            className="flex flex-col items-center h-96 justify-center"
          >
            <div className="flex flex-col items-center justify-center gap-6 mb-32">
              <h3 className="text-center">
                If you liked what you saw about my work and have someting in
                mind, just tell me about it.
              </h3>
              <button className="border-2 border-[#0a3447] w-[170px] rounded-md hover:bg-[#0a3447] transition-all">
                <a className="inline-block w-[100%] leading-10" href="">
                  Get it!
                </a>
              </button>
            </div>
          </section>
        </article>
      </section>
    </div>
  );
};

export default Page;
