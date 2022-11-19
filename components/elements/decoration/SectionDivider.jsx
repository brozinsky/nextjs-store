const SectionDivider = ({ align = "right" }) => {
  return (
    <div
      className={`flex flex-col  space-y-3 ${
        { left: "items-end", right: "items-start" }[align]
      }`}
    >
      <div
        className={`w-full h-3 bg-primary-500 ${
          { left: "w-full", right: "w-10/12" }[align]
        }`}
      ></div>
      <div className="w-11/12 h-3 bg-primary-500"></div>
      <div
        className={`h-3 bg-primary-500 ${
          { left: "w-10/12", right: "w-full" }[align]
        }`}
      ></div>
    </div>
  );
};

export default SectionDivider;
