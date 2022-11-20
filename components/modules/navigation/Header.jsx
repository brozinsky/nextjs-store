import Link from "next/link";
import Hamburger from "@/elements/buttons/Hamburger";
import NavLink from "@/elements/buttons/NavLink";
import CartButton from "@/elements/buttons/CartButton";

const navItems = [
  { name: "Sale", url: "/sale", type: "sale" },
  { name: "Products", url: "/products", type: "normal" },
  { name: "About", url: "/about", type: "normal" },
  { name: "Contact", url: "/contact", type: "normal" },
];

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="container flex flex-wrap items-center justify-between">
          <Link href="/">
            <div className="flex items-center flex-shrink-0 mr-6 text-white cursor-pointer select-none">
              <svg
                className="w-8 h-8 mr-2 fill-current"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#1188f7"
                  d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                />
              </svg>
              <span className="text-xl font-semibold tracking-tight text-primary-500">
                Clothing Store
              </span>
            </div>
          </Link>
          <Hamburger />
          <div className="justify-end flex-grow block w-full lg:flex lg:items-center lg:w-auto">
            <ul className="flex items-center justify-end space-x-8 text-sm">
              {navItems.map(({ name, url, type }, i) => {
                return (
                  <NavLink key={name + i} href={url} type={type}>
                    {name}
                  </NavLink>
                );
              })}
              <CartButton href={"/cart"}>Cart</CartButton>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
