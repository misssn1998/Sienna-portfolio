

const SectionTitle = ({ text, isFirst }) => {
  const textTitle = text.endsWith("Projects");
  return (
    <div className={`mx-auto max-w-7xl pl-32 pr-28 ${isFirst ? "" : "mt-40"}`}>
      <h2
        className={`divider mb-16 text-neutral ${
          textTitle ? "divider-end" : "divider-start"
        } text-6xl font-bold`}
      >
        {text} <span className="text-primary">.</span>
      </h2>
    </div>
  );
};

export default SectionTitle;
