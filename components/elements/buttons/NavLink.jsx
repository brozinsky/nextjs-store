import Link from "next/link";

const NavLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <span className="block mt-4 text-lg text-black cursor-pointer lg:inline-block lg:mt-0 hover:text-primary-500">
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
