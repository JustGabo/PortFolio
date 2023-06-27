import { Link } from "react-scroll";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

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
              to="panteon"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Panteon
            </Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link
              activeClass="active"
              to="coffee"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Coffee
            </Link>
          </li>
          <li className="cursor-pointer py-3">
            <Link
              activeClass="active"
              to="papero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Papero
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
      <section className="ml-[180px] w-[100%] flex flex-col">
        <article className="h-screen flex flex-col justify-center items-center">
          <div className="mb-[100px] flex flex-col items-center gap-2">
            <h3 className="font-medium text-xl">
              Go Down To Take A Look To All My Projects
            </h3>
            <Link
              activeClass="active"
              to="panteon"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <ChevronDownIcon className="w-8 aspect-square cursor-pointer"></ChevronDownIcon>
            </Link>
          </div>
        </article>

        <article className="flex flex-col gap-20">
          <div id="panteon" className="grid gap-6">
            <div className="flex items-center gap-2">
            <a className="text-xl" href="https://paperoweb-vevt.vercel.app/">Panteon</a>
            <ArrowTopRightOnSquareIcon className="w-4 aspect-square"></ArrowTopRightOnSquareIcon>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <img
                className="rounded-lg object-cover"
                src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
                alt=""
              />
              <img
                className="rounded-lg object-cover"
                src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
                alt=""
              />
              <img
                className="rounded-lg object-cover"
                src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
                alt=""
              />
              <img
                className="rounded-lg object-cover"
                src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
                alt=""
              />
            </div>
          </div>

          <div id="coffee" className="grid grid-cols-2 grid-rows-2 gap-4">
            <img
              className="rounded-lg object-cover"
              src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
              alt=""
            />
            <img
              className="rounded-lg object-cover"
              src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
              alt=""
            />
            <img
              className="rounded-lg object-cover"
              src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
              alt=""
            />
            <img
              className="rounded-lg object-cover"
              src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
              alt=""
            />
          </div>

          <div id="papero" className="grid grid-cols-2 grid-rows-2 gap-4">
            <img
              className="rounded-lg object-cover"
              src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
              alt=""
            />
            <img
              className="rounded-lg object-cover"
              src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
              alt=""
            />
            <img
              className="rounded-lg object-cover"
              src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
              alt=""
            />
            <img
              className="rounded-lg object-cover"
              src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
              alt=""
            />
          </div>

          <div id="friends" className="grid grid-cols-2 grid-rows-2 gap-4">
            <img
              className="rounded-lg object-cover"
              src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
              alt=""
            />
            <img
              className="rounded-lg object-cover"
              src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
              alt=""
            />
            <img
              className="rounded-lg object-cover"
              src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
              alt=""
            />
            <img
              className="rounded-lg object-cover"
              src="https://mensajero.com.ar/wp-content/uploads/2021/12/Aruba-2.jpg"
              alt=""
            />
          </div>
        </article>
      </section>
    </div>
  );
};

export default Page;
