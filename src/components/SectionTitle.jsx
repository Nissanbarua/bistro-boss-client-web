const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-3/12 mx-auto text-center space-y-4">
      <p className="text-sm text-[#D99904] "> {subHeading} </p>
      <h2 className="text-2xl border-y-4 py-2">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
