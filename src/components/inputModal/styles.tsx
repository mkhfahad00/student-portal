import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  inputFormBtnGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  btnInputSuccess: {
    backgroundColor: "#4aaa9a",
    paddingLeft: "60px",
    paddingRight: "60px",
  },
  btnInputCancel: {
    backgroundColor: "white",
    paddingLeft: "60px",
    paddingRight: "60px",
    borderColor: "#4aaa9a",
    color: "black",
  },
}));
