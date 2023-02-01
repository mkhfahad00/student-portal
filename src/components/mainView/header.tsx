import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import { makeStyles } from '@mui/styles';
import { useStyles } from "components/mainView/styles";
// import "components/mainView/styles.css";
interface IHeaderProps {
  setShow: (x: boolean) => void;
}

const Header: React.FC<IHeaderProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box

      //sx={{ paddingLeft: "10px" }}
      >
        <Typography variant="h4" className={classes.mainHeading}>
          Student Portal
        </Typography>
      </Box>
      <Divider sx={{ borderColor: "gray" }} />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ margin: "20px" }}
      >
        <Grid item xs={8}>
          <Typography variant="h6" className={classes.subHeading}>
            Student Summary
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            className={classes.addButton}
            onClick={() => props.setShow(true)}
          >
            + Add Data
          </Button>
        </Grid>
      </Grid>

      {/* <div className="main-heading">Student Portal</div> */}
      {/* <hr style= /> */}
      {/* <Stack
        direction="horizontal"
        style={{ justifyContent: "space-between", margin: "20px" }}
      > */}
      {/* <div className="sub-heading">Students Summary</div> */}
      {/* <div className="ml-auto"> */}
      {/* <button
            className="btn btn-border"
            style={{ float: "right", marginRight: "200px" }}
            onClick={() => props.setShow(true)}
          >
            + Add Data
          </button> */}
      {/* </div>
      </Stack> */}
    </>
  );
};

export default Header;
