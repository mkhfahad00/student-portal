import React from "react";

interface ISummaryBoxProps {
  color: string;
  text: string;
  subText: string;
}
const SummaryBox: React.FC<ISummaryBoxProps> = (props) => {
  return (
    <>
      <div className="summaryBox">
        <div className="summaryBoxInner" style={{background:props?.color}}></div>
        <span className="summaryBoxText">{props?.text}</span>
        <span className="summaryBoxSubtext">{props?.subText}</span>
      </div>
    </>
  );
};

export default SummaryBox;
