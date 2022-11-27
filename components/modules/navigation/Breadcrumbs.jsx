import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü")
    .toUpperCase();
};

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav
      aria-label="breadcrumb"
      className="w-full p-4 mx-auto dark:bg-gray-800 dark:text-gray-100"
    >
      <ol className="flex items-center justify-center h-8 space-x-2 dark:text-gray-100">
        <Link href={"/"}>
          <li className="flex items-center cursor-pointer">
            {/* <svg
              class="w-5 h-auto fill-current mx-2 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
            </svg> */}
            Home
          </li>
        </Link>
        {breadcrumbs.map((breadcrumb, i) => {
          if (i + 1 === breadcrumbs.length) {
            // last item
            return (
              <Link key={breadcrumb.href} href={breadcrumb.href}>
                <li className="flex items-center space-x-1 capitalize select-none text-primary-500">
                  <span className="pr-2 text-black dark:text-gray-400">/</span>
                  {convertBreadcrumb(breadcrumb.breadcrumb).toLowerCase()}
                </li>
              </Link>
            );
          } else {
            // other
            return (
              <Link key={breadcrumb.href} href={breadcrumb.href}>
                <li className="flex items-center space-x-1 capitalize cursor-pointer">
                  <span className="pr-2 dark:text-gray-400">/</span>
                  {convertBreadcrumb(breadcrumb.breadcrumb).toLowerCase()}
                </li>
              </Link>
            );
          }
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
