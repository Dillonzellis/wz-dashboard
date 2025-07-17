import Link from "next/link";
import { navLinks } from "../data/navData";

const MainNav = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-8 border-b border-r-slate-300 px-8 py-3 md:px-24">
          {navLinks.map((link, idx) => (
            <li className="" key={idx}>
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
