import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useStyles } from "components/mainView/styles";

interface ISummaryBoxProps {
  color?: string;
  text?: string;
  subText?: string;
}
const SummaryBox: React.FC<ISummaryBoxProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box bgcolor={props?.color} className={classes.summaryBoxInner}>
        <Typography variant="body1" className={classes.summaryBoxText}>
          {props?.text}
        </Typography>
        <Typography variant="body2" className={classes.summaryBoxSubtext}>
          {props?.subText}
        </Typography>
      </Box>
      {/* <div>
        <div className="summaryBoxInner" style={{ background: props?.color }}>
          <span className="summaryBoxText">{props?.text}</span>
          <span className="summaryBoxSubtext">{props?.subText}</span>
        </div>
      </div> */}
    </>
  );
};

export default SummaryBox;
