import Link from "next/link";
import { navLinks } from "./data";

const MainNav = () => {
  return (
    <header>
      <nav className="relative">
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-black/80 to-transparent" />
        <ul className="scrollbar-hide flex w-screen gap-8 overflow-x-scroll border-b border-r-slate-300 px-8 py-3 md:px-24">
          {navLinks.map((link, idx) => (
            <li className="whitespace-nowrap" key={idx}>
              <Link href={link.href} className="text-lg hover:underline">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
