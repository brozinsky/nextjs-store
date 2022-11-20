import Link from "next/link";

const sizeClasses = {
  xsm: "py-2 px-3 text-xs ",
  sm: "py-2 px-3 text-sm ",
  base: "px-5 py-2.5 text-base",
  lg: "py-3 px-5 text-base",
  xl: "px-6 py-3.5 text-base",
};

const variantClasses = {
  primary: "bg-primary-500 text-white",
  secondary: "border border-primary-500 text-black",
};

const roundedClasses = {
  base: "rounded-lg",
  none: "",
  full: "rounded-full",
  sm: "rounded-md",
};

const baseClasses = "text-center cursor-pointer";

const ButtonLink = ({
  href,
  children,
  className,
  bold = true,
  uppercase = true,
  size = "base",
  variant = "primary",
  rounded = "sm",
}) => {
  return (
    <Link href={href}>
      <span
        className={`${sizeClasses[size]} ${variantClasses[variant]} ${
          roundedClasses[rounded]
        } ${baseClasses} ${className} ${bold ? "font-semibold" : ""} ${
          uppercase ? "uppercase" : ""
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

export default ButtonLink;
