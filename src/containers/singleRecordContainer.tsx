import React from "react";
import { connect } from "react-redux";
import { deleteStudent } from "state/ducks/students/actions";
import { ActionType } from "typesafe-actions";
import { IStudentRaw } from "state/ducks/students/types";
import SingleRecord from "components/mainView/SingleRecord";

type IContainerProps = {
  student: IStudentRaw;
  handleEdit: () => void;
  deleteStudent: (payload: string) => ActionType<typeof deleteStudent>;
};

const mapDispatchToProps = {
  deleteStudent,
};

const SingleRecordContainer = ({
  handleEdit,
  student,
  deleteStudent,
}: IContainerProps) => (
  <SingleRecord
    student={student}
    handleEdit={() => handleEdit()}
    deleteStudent={deleteStudent}
  />
);

export default connect(null, mapDispatchToProps)(SingleRecordContainer);

// const SingleRecordContainer = ({ handleEdit, student }: IContainerProps) => {
//   const dispatch = useDispatch();

//   const dispatchToProps = {
//     deleteStudent: useCallback(
//       (payload: string) => dispatch(deleteStudent(payload)),
//       [dispatch]
//     ),
//   };

//   return (
//     <SingleRecord
//       student={student}
//       handleEdit={() => handleEdit()}
//       {...dispatchToProps}
//     />
//   );
// };

// export default SingleRecordContainer;
