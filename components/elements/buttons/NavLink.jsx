import Link from "next/link";
import { useRouter } from "next/router";

const typeClasses = {
  base: "text-black",
  sale: "text-red-500 navlink--sale",
};

const NavLink = ({ children, href, type }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <span
        className={`${router.route === href ? "navlink--active" : ""} ${
          typeClasses[type]
        } navlink select-none block mt-4 text-lg cursor-pointer lg:inline-block lg:mt-0 `}
      >
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
