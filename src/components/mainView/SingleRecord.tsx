import React from "react";
import DropdownMenu from "components/dropdownMenu/index";
import { IStudentRaw } from "state/ducks/students/types";
import { deleteStudent } from "state/ducks/students/actions";
import { ActionType } from "typesafe-actions";
import { Typography, Grid } from "@mui/material";
import { useStyles } from "components/mainView/styles";

type SingleRecordProps = {
  student: IStudentRaw;
  handleEdit: () => void;
  deleteStudent: (payload: string) => ActionType<typeof deleteStudent>;
};

const SingleRecord = ({
  student,
  handleEdit,
  deleteStudent,
}: SingleRecordProps) => {
  const classes = useStyles();

  // const grade: "gradeA" | "gradeB" = "gradeA";
  let gradeClass;
  switch (student.grade) {
    case "A":
      gradeClass = classes.gradeA;
      break;
    case "B":
      gradeClass = classes.gradeB;
      break;
    case "C":
      gradeClass = classes.gradeC;
      break;
    case "D":
      gradeClass = classes.gradeD;
      break;
    case "F":
      gradeClass = classes.gradeF;
      break;
    default:
      gradeClass = classes.gradeA;
      break;
  }
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="space-evenly"
        // sx={{ margin: "20px" }}
        className={classes.text}
      >
        <Grid item xs={2} md={2}>
          <Typography> {student?.name}</Typography>
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography> {student?.marks} </Typography>{" "}
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography> {student?.subject} </Typography>{" "}
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography className={gradeClass}>{student?.grade}</Typography>
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography> {student?.date} </Typography>
          <Typography className={classes.timeStamp}>{student?.time}</Typography>
        </Grid>

        <Grid item xs={2} md={2}>
          <DropdownMenu
            handleEdit={handleEdit}
            handleDelete={() => deleteStudent(student?._id)}
          />{" "}
        </Grid>
      </Grid>
      {/* <Divider /> */}
      {/* <Row style={{ marginTop: "20px" }}>
        <Col> {student?.name} </Col>
        <Col> {student?.marks} </Col>
        <Col> {student?.subject} </Col>
        <Col>
          <div className={`gradeBox grade${student.grade}`}>
            {student?.grade}
          </div>
        </Col>
        <Col>
          <div> {student?.date} </div>
          <div className="timeStamp"> at {student?.time}</div>
        </Col>
        <Col>
          <DropdownMenu
            handleEdit={handleEdit}
            handleDelete={() => deleteStudent(student?._id)}
          />
        </Col>
      </Row>
      <hr style={{ borderColor: "gray" }} /> */}
    </>
  );
};

export default SingleRecord;
