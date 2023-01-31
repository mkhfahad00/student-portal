import React from "react";
import { connect } from "react-redux";
import { deleteStudent } from "state/ducks/students/actions";
import { IStudentRaw } from "state/ducks/students/types";
import StudentDetails from "components/mainView/StudentDetails";
import { IApplicationState } from "state/ducks";

type IContainerProps = {
  setShow: (x: boolean) => void;
  setStudentData: (std: IStudentRaw) => void;
  studentList: IStudentRaw[];
};

const StudentDetailsContainer = ({
  setShow,
  setStudentData,
  studentList,
}: IContainerProps) => {
  return (
    <StudentDetails
      setStudentData={setStudentData}
      studentList={studentList}
      setShow={setShow}
    />
  );
};

const mapStateToProps = (state: IApplicationState) => ({
  studentList: state?.students?.data,
});

const mapDispatchToProps = {
  deleteStudent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentDetailsContainer);

// const StudentDetailsContainer = ({
//   setShow,
//   setStudentData,
// }: IContainerProps) => {
//   const dispatch = useDispatch();
//   const studentList = useSelector(
//     (state: IApplicationState) => state?.students?.data
//   );

//   const dispatchToProps = {
//     deleteStudent: useCallback(
//       (payload: string) => dispatch(deleteStudent(payload)),
//       [dispatch]
//     ),
//   };

//   return (
//     <StudentDetails
//       setStudentData={setStudentData}
//       studentList={studentList}
//       setShow={setShow}
//       {...dispatchToProps}
//     />
//   );
// };

// export default StudentDetailsContainer;
