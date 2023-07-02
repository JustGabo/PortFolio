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
           Contact
          </Link>
        </h2>
        <ul className="ul flex flex-col gap-2 w-[80%] text-xs font-medium ">
          <li className="cursor-pointer   py-3">
            <Link
              activeClass="active"
              to="gmail"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Gmail
            </Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link
              activeClass="active"
              to="fivver"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
            >
              Fivver
            </Link>
          </li>
        </ul>
      </section>
      <section className="ml-[180px] w-[100%] flex flex-col">
        <article className="h-96 flex flex-col justify-center items-center mb-32">
          <div className="mb-[100px] flex flex-col items-center gap-2 pt-48">
            <h3 className="font-medium text-xl">Go Down To Contact Me</h3>
            <Link
              activeClass="active"
              to="gmail"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <ChevronDownIcon className="w-8 aspect-square cursor-pointer"></ChevronDownIcon>
            </Link>
          </div>
        </article>

        <article className="">
          <section id="gmail" className="h-96 flex flex-col justify-center items-center mb-32">
            <div className="mb-[100px] flex flex-col items-center gap-5 pt-48">
              <h3 className="">If you want to contact me from my email</h3>
              <button className="border-2 border-[#0a3447] w-[70%] rounded-md hover:bg-[#0a3447] transition-all"><a className="leading-10 inline-block" href="">Send me a message</a></button>
            </div>
          </section>

          <section
            id="fivver"
            className="flex flex-col items-center h-96 justify-center"
          >
            <div className="flex flex-col items-center justify-center gap-6 mb-32">
              <h3 className="text-center">
                Contact me from Fivver if you already got a project in mind or some ideas.
              </h3>
              <button className="border-2 border-[#0a3447] w-[170px] rounded-md hover:bg-[#0a3447] transition-all">
                <a className="inline-block w-[100%] leading-10" href="">
                  Get in touch 
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
