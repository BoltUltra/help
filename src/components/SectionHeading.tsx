import React from "react";

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}
const SectionHeading: React.FC<SectionHeadingProps> = ({
  subHeading,
  heading,
}) => {
  return (
    <div className="space-y-2 mb-5 text-center">
      <h4 className="font-montserrat text-primary">{subHeading}</h4>
      <h3 className="font-raleway font-bold text-3xl">{heading}</h3>
    </div>
  );
};

export default SectionHeading;
