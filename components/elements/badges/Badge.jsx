const theme = {
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800",
  red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-800",
};

const Badge = ({ text, color }) => {
  return (
    <span
      className={`right-0 absolute text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ${
        {
          red: theme.red,
          blue: theme.blue,
        }[color]
      }`}
    >
      {text}
    </span>
  );
};

export default Badge;
