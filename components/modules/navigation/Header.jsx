import { useRouter } from 'next/router';
import Hamburger from "@/elements/buttons/Hamburger";
import CartDrawer from "@/modules/cart/CartDrawer";

const navItems = [
  { name: "Home", url: "/" },
  { name: "Cart", url: "/cart" },
];

const Header = () => {
  const router = useRouter();
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <svg
            className="w-8 h-8 mr-2 fill-current"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="text-xl font-semibold tracking-tight">
            Clothing Store
          </span>
        </div>
        <Hamburger />
        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            {navItems.map(({ name, url }, i) => {
              return (
                <a
                  key={i}
                  href={url}
                  className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white"
                >
                  {name}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
      {router.pathname === "/cart" 
      ? null
      : <CartDrawer />}
      
    </>
  );
};

export default Header;
