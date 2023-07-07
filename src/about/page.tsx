import { Link } from "react-scroll";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import AboutImg from "../imgs/aboutImg.jpeg";

const Page = () => {
  return (
    <div id="projects" className="flex flex-col md:flex-row mt-[70px] px-5">
      <section className="fixed md:flex hidden items-start  flex-col justify-between md:gap-20 border-r pt-10 border-gray-900 w-[12%] h-screen">
        <h2 id="projects" className="font-semibold cursor-pointer text-xl">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </h2>
        <ul className="ul flex flex-row md:flex-col gap-10 md:gap-2 w-[100%] md:w-[80%] text-xs font-medium ">
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
      <section className="md:ml-[15%] md:pr-[1em] mt-[2em] flex flex-col">
        <article
          className="grid gap-32"
          data-aos="fade-in"
          data-aos-anchor="#example-anchor"
          data-aos-duration="2000"
        >
          <section id="aboutme" className="flex md:flex-row flex-col gap-10 items-center justify-between">
            <div className="flex flex-col gap-10  md:w-[40%]">
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
                  I do prioritize usability and functionality over all things,
                  but always trying to build beautiful work for you.
                </p>
              </div>
            </div>

            <div className="w-[100] flex justify-center ">
              <img
                className="w-[25em] rounded-lg aspect-square object-cover"
                src={AboutImg}
                alt=""
              />
            </div>
          </section>

          <section
            id="skills"
            className="grid gap-16"
            data-aos="fade-in"
            data-aos-anchor="#example-anchor"
            data-aos-offset="800"
            data-aos-duration="1500"
          >
            <h3 className="text-2xl  text-center">
              Now, all the technologies, languages and tools with which I have
              worked.
            </h3>

            <article className="hidden md:grid  grid-cols-8 border-t-2 border-[#0a3447]">
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

            <article className="w-[95%] m-auto">
              <ul className="flex justify-center gap-20">
                <div>
                <li className="list-disc">Figma</li>
                <li className="list-disc">Javascript</li>
                <li className="list-disc">NodeJs</li>
                <li className="list-disc">HTML:5</li>
                </div>
                <div>
                <li className="list-disc">Css</li>
                <li className="list-disc">TailwindCss</li>
                <li className="list-disc">TypeScript</li>
                <li className="list-disc">React</li>
                </div>
              </ul>
            </article>
          </section>

          <section
            id="contact"
            className="flex flex-col items-center h-96 justify-center"
            data-aos="fade-down"
            data-aos-anchor="#example-anchor"
            data-aos-offset="1500"
            data-aos-duration="1000"
          >
            <div className="flex flex-col items-center justify-center gap-6 mb-32">
              <h3 className="text-center">
                If you liked what you saw about my work and have someting in
                mind, just tell me about it.
              </h3>
              <button className="border-2 border-[#0a3447] w-[170px] rounded-md hover:bg-[#0a3447] transition-all">
                <a className="inline-block w-[100%] leading-10" href="mailto:ovallegabriel123@gmail.com">
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
