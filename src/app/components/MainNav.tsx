import Link from "next/link";

const navLinks = [
  {
    title: "Dashboard Ops",
    href: "/",
  },

  {
    title: "COAs",
    href: "/coas",
  },
  {
    title: "Tools",
    href: "/tools",
  },
];

const MainNav = () => {
  return (
    <header>
      <nav>
        <ul className="px-8 md:px-24 py-3 flex gap-8 border-b border-r-slate-300">
          {navLinks.map((link) => (
            <li className="">
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
