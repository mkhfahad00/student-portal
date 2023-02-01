import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  inputFormBtnGroup: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "15px",
  },
  btnInputSuccess: {
    backgroundColor: "#4aaa9a !important",
    paddingLeft: "60px !important",
    paddingRight: "60px !important",
  },
  btnInputCancel: {
    backgroundColor: "white !important",
    paddingLeft: "60px !important",
    paddingRight: "60px !important",
    color: "black !important",
  },
}));
