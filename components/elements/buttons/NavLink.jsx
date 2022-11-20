import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ children, href }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <span
        className={`${
          router.route === href ? "navlink--active" : ""
        } navlink select-none block mt-4 text-lg text-black cursor-pointer lg:inline-block lg:mt-0 hover:text-primary-500`}
      >
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
