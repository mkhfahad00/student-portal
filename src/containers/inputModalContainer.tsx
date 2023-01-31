import React from "react";
import { connect } from "react-redux";
import { addStudent, updateStudent } from "state/ducks/students/actions";
import { IStudentRaw } from "state/ducks/students/types";
import StudentInputModal from "components/inputModal";
import { ActionType } from "typesafe-actions";

interface IModalContainerProps {
  visible: boolean;
  setVisible: (x: boolean) => void;
  studentData: IStudentRaw;
  setStudentData: (std: IStudentRaw | null) => void;
  addStudent: (payload: IStudentRaw) => ActionType<typeof addStudent>;
  updateStudent: (payload: IStudentRaw) => ActionType<typeof updateStudent>;
}
const InputModalContainer = ({
  visible,
  setVisible,
  studentData,
  setStudentData,
  addStudent,
  updateStudent,
}: IModalContainerProps) => {
  return (
    <StudentInputModal
      visible={visible}
      setVisible={setVisible}
      studentData={studentData as IStudentRaw}
      setStudentData={setStudentData}
      addStudent={addStudent}
      updateStudent={updateStudent}
    />
  );
};

const mapDispatchToProps = {
  addStudent,
  updateStudent,
};

export default connect(null, mapDispatchToProps)(InputModalContainer);

// const InputModalContainer = ({
//   visible,
//   setVisible,
//   studentData,
//   setStudentData,
// }: IModalContainerProps) => {
//   const dispatch = useDispatch();

//   const dispatchToProps = {
//     addStudent: useCallback(
//       (payload: IStudentRaw) => dispatch(addStudent(payload)),
//       [dispatch]
//     ),
//     updateStudent: useCallback(
//       (payload: IStudentRaw) => dispatch(updateStudent(payload)),
//       [dispatch]
//     ),
//   };

//   return (
//     <StudentInputModal
//       visible={visible}
//       setVisible={setVisible}
//       studentData={studentData as IStudentRaw}
//       setStudentData={setStudentData}
//       {...dispatchToProps}
//     />
//   );
// };

// export default InputModalContainer;
