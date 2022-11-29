import Link from "next/link";
import Image from "next/image";

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
  "outlined-black": "button--outlined-black",
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
  icon,
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
        {icon ? (
          <Image
            className="button-icon"
            width={22}
            height={22}
            src={icon}
            alt=""
          />
        ) : null}
      </span>
    </Link>
  );
};

export default ButtonLink;
