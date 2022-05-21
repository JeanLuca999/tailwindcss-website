import { useState } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const handleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const ulClassName =
    "flex flex-col md:flex-row gap-3 md:gap-0 absolute h-screen w-full max-w-sm justify-center items-center top-0 -left-full md:left-0 bg-gray-900 md:justify-end md:bg-transparent md:relative md:h-auto md:items-center ease-in-out duration-200";

  return (
    <header className="py-4 md:border md:border-gray-300 md:py-6">
      <nav className="max-w-7xl mx-auto my-0 flex items-center justify-between w-11/12">
        <div>
          <svg
            className="w-10 h-10"
            fill="#359756"
            stroke="#000"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        </div>

        <ul className={menuActive ? ulClassName + " -left-0" : ulClassName}>
          <li>
            <a
              href="/"
              className="text-white md:text-black text-xl hover:font-bold hover:text-accent px-5 md:ml-2 block focus:font-bold focus:text-accent ease-in-out duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white md:text-black text-xl hover:font-bold hover:text-accent px-5 md:ml-2 block focus:font-bold focus:text-accent ease-in-out duration-200"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-white md:text-black text-xl hover:font-bold hover:text-accent px-5 md:ml-2 block focus:font-bold focus:text-accent ease-in-out duration-200"
            >
              Contato
            </a>
          </li>
        </ul>

        <div
          className="flex flex-col gap-1 md:hidden relative z-10"
          tabIndex={0}
          onClick={handleMenu}
        >
          <div className="w-7 h-1 bg-gray-500"></div>
          <div className="w-7 h-1 bg-gray-500"></div>
          <div className="w-7 h-1 bg-gray-500"></div>
        </div>
      </nav>
    </header>
  );
}
