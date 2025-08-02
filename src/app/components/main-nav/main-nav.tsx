import Link from "next/link";
import { navLinks } from "./data";

const MainNav = () => {
  return (
    <header className="border-b border-neutral-100">
      <nav className="relative">
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-neutral-900/80 to-transparent md:hidden" />
        <ul className="scrollbar-hide mx-auto flex w-full max-w-[1500px] gap-8 overflow-x-scroll px-5 py-3 md:overflow-hidden md:px-24">
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
