import clsx from "clsx";

const Textarea = ({ name, required, placeholder, label }) => {
  const isError = true;
  return (
    <label
      className={clsx("block mb-2 text-sm font-medium col-start-1 col-end-3", {
        "text-red-700": isError,
      })}
    >
      <span className="inline-block mb-2">
        {label}
        {required ? "*" : null}
      </span>
      <textarea
        className={clsx("text-sm block w-full px-5 py-2.5 border resize-none", {
          "border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 bg-red-50":
            isError,
          "border-slate-300 focus:ring-primary-100 bg-white": !isError,
        })}
        name={name}
        placeholder={placeholder}
        cols="30"
        rows="6"
      ></textarea>
      {isError ? (
        <p className="mt-2 ml-2 text-sm text-red-600">Username available!</p>
      ) : null}
    </label>
  );
};

export default Textarea;
