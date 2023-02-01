import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IStudentRaw } from "state/ducks/students/types";
import SingleRecordContainer from "containers/singleRecordContainer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { useStyles } from "components/mainView/styles";

type IProps = {
  setStudentData: (std: IStudentRaw) => void;
  setShow: (x: boolean) => void;
  studentList: IStudentRaw[];
};
const StudentDetails = (props: IProps) => {
  const handleEdit = (student: IStudentRaw) => {
    props.setShow(true);
    props.setStudentData(student);
  };
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="space-evenly"
        className={classes.text}
        // spacing={3}
      >
        <Grid item xs={2} md={2}>
          <Typography> Name</Typography>
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography> Marks </Typography>{" "}
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography> Subject </Typography>{" "}
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography> Grade </Typography>{" "}
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography> Date </Typography>{" "}
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography> Action </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "gray" }} />

      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        // spacing={2}
        divider={<Divider sx={{ borderColor: "gray" }} flexItem />}
      >
        {props?.studentList?.map((student: IStudentRaw, key) => (
          <SingleRecordContainer
            student={student}
            key={key}
            handleEdit={() => handleEdit(student)}
          />
        ))}
      </Stack>

      {/* // <Container>
    //   <>
    //     <Row style={{ marginTop: "20px" }} className="text">
    //       <Col> Name </Col>
    //       <Col> Marks </Col>
    //       <Col> Subject </Col>
    //       <Col> Grade </Col>
    //       <Col> Date </Col>
    //       <Col> Action </Col>
    //     </Row>
    //     <hr style={{ borderColor: "gray" }} />
    //     {props?.studentList?.map((student: IStudentRaw, key) => ( */}
      {/* //       <SingleRecordContainer */}
      {/* //         student={student}
    //         key={key}
    //         handleEdit={() => handleEdit(student)}
    //       />
    //     ))} */}
    </>
    // </Container>
  );
};

export default StudentDetails;
