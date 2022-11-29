const Input = ({ name, required, placeholder, label }) => {
  const isError = false;
  return (
    <label
      className={`${
        isError ? "text-red-700" : ""
      } block mb-2 text-sm font-medium  `}
    >
      <span className="inline-block mb-2">
        {label}
        {required ? "*" : null}
      </span>
      <input
        className={`${
          isError
            ? "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 bg-red-50"
            : ""
        } text-sm block w-full px-5 py-2.5 bg-white border-slate-300 border focus:ring-primary-100`}
        name={name}
        type="text"
        placeholder={placeholder}
      />
      {isError ? (
        <p className="mt-2 ml-2 text-sm text-red-600 dark:text-red-500">
          Username available!
        </p>
      ) : null}
    </label>
  );
};

export default Input;
