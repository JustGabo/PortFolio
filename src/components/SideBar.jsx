import { Link } from "react-scroll";

const SideBar = () => {
  return (
    <section className=" w-[100%]">
      <header className="grid grid-cols-2 items-center bg-[#090909] text-white border-b border-gray-900 fixed w-[100%] p-4">
        <h1 className="text-3xl font-semibold">RG</h1>

        <ul className="flex gap-10  flex-row text-xs font-medium justify-end">
          <li className="cursor-pointer ">About me</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </header>
    </section>
  );
};

export default SideBar;
