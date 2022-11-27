import clsx from "clsx";
import Link from "next/link";

const sizeClasses = {
  xsm: "button--xsm",
  sm: "button--sm",
  base: "",
  lg: "button--lg",
  xl: "button--xl",
};

const variantClasses = {
  primary: "",
  outlined: "button--outlined ",
  "outlined-white": "button--outlined-white",
};

const roundedClasses = {
  base: "rounded-lg",
  none: "",
  full: "rounded-full",
  sm: "rounded-md",
};

const hoverClasses = {
  default: "hover--default",
  up: "hover--up",
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
  hover = "default",
}) => {
  return (
    <Link href={href}>
      <span
        className={`button ${hoverClasses[hover]} ${sizeClasses[size]} ${
          variantClasses[variant]
        } ${roundedClasses[rounded]} ${baseClasses} ${className} ${
          bold ? "font-semibold" : ""
        } ${uppercase ? "uppercase" : ""}`}
      >
        {children}
      </span>
    </Link>
  );
};

export default ButtonLink;
