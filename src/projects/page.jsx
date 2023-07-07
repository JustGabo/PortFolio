import { Link } from "react-scroll";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import PaperoHero from "../imgs/paperohero.jpg";
import PaperoSection from "../imgs/paperosection.jpg";
import PaperoSection2 from "../imgs/paperosection2.jpg";
import PaperoSection3 from "../imgs/paperosection3.jpg";
import JammyHero from "../imgs/jammyHero.jpg";
import JammyLogin from "../imgs/jammylogin.jpg";
import JammySignUp from "../imgs/jammysignup.jpg";
import JammyApp from "../imgs/jammyapp.jpg";
import FormCarryHero from "../imgs/formcarryhero.jpg";
import FormCarryLogIn from "../imgs/formcarrylogin.jpg";
import FormCarrySignUp from "../imgs/formcarrysignup.jpg";

const Page = () => {
  return (
    <div id="projects" className="flex mt-[100px] px-5 relative">
      <section className="fixed md:flex hidden flex-col gap-10 border-r z-40  border-gray-900 w-[12%] h-screen">
        <h2 id="projects" className="font-semibold cursor-pointer text-xl">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Projects
          </Link>
        </h2>
        <ul className="ul flex flex-col gap-2 w-[80%] text-xs font-medium ">
          <li className="cursor-pointer   py-3">
            <Link
              activeClass="active"
              to="papero"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Papero
            </Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link
              activeClass="active"
              to="jammy"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Jammy
            </Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link
              activeClass="active"
              to="formcarry"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              FormCarry
            </Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link
              activeClass="active"
              to="friends"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Friends
            </Link>
          </li>
        </ul>
      </section>
      <section className="md:ml-[15%] w-[100%] md:pr-[1em] gap-[20px] overflow-hidden flex z-0 flex-col">
        <article className="flex flex-col gap-52 md:gap-20 ">
          <div id="papero" className="grid gap-2 md:gap-6 h-screen md:h-auto">
            <div className="flex items-center gap-2">
              <a
                className="text-xl"
                href="https://paperoweb-justgabo.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Papero
              </a>
              <ArrowTopRightOnSquareIcon className="w-4 aspect-square"></ArrowTopRightOnSquareIcon>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                data-aos="fade-down"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000"
                className="rounded-lg object-cover md:col-span-2"
                src={PaperoHero}
                alt=""
              />
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                className="rounded-lg object-cover"
                src={PaperoSection}
                alt=""
              />
              <img
                data-aos="fade-left"
                data-aos-duration="1000"
                className="rounded-lg object-cover"
                src={PaperoSection2}
                alt=""
              />
              <img
                data-aos="fade-up"
                data-aos-duration="1000"
                className="rounded-lg object-cover md:col-span-2"
                src={PaperoSection3}
                alt=""
              />
            </div>
          </div>

          <div id="jammy" className="grid gap-6">
            <div className="flex items-center gap-2">
              <a
                className="text-xl"
                href="https://paperoweb-justgabo.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Jammy
              </a>
              <ArrowTopRightOnSquareIcon className="w-4 aspect-square"></ArrowTopRightOnSquareIcon>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                data-aos="zoom-in-down"
                data-aos-anchor="#example-anchor"
                data-aos-offset="1500"
                data-aos-duration="1000"
                className="rounded-lg object-cover md:col-span-2"
                src={JammyHero}
                alt=""
              />
              <img
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                className="rounded-lg object-cover "
                src={JammyLogin}
                alt=""
              />
              <img
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                className="rounded-lg object-cover"
                src={JammySignUp}
                alt=""
              />
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="rounded-lg object-cover md:col-span-2"
                src={JammyApp}
                alt=""
              />
            </div>
          </div>

          <div id="formcarry" className="grid gap-6">
            <div className="flex items-center gap-2">
              <a
                className="text-xl"
                href="https://paperoweb-justgabo.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                FormCarry
              </a>
              <ArrowTopRightOnSquareIcon className="w-4 aspect-square"></ArrowTopRightOnSquareIcon>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                data-aos="flip-up"
                data-aos-anchor="#example-anchor"
                data-aos-offset="2700"
                data-aos-duration="1000"
                className="rounded-lg object-cover md:col-span-2"
                src={FormCarryHero}
                alt=""
              />
              <img
                data-aos="flip-right"
                data-aos-duration="1000"
                className="rounded-lg object-cover"
                src={FormCarryLogIn}
                alt=""
              />
              <img
                data-aos="flip-left"
                data-aos-duration="1000"
                className="rounded-lg object-cover"
                src={FormCarrySignUp}
                alt=""
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Page;
