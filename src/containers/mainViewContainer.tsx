import React from "react";
import { connect } from "react-redux";
import MainView from "components/mainView";
import { IApplicationState } from "state/ducks/index";
import { fetchStudents } from "state/ducks/students/actions";
import { IStudentState } from "state/ducks/students/types";
import { ActionType } from "typesafe-actions";
import { getSummaryData } from "state/ducks/students/reselectors";
import { ISummaryData } from "utils";

interface IContainerProps extends IStudentState {
  fetchStudents: () => ActionType<typeof fetchStudents>;
  dashboardData: ISummaryData;
}
const mapStateToProps = (state: IApplicationState) => ({
  loading: state.students.loading,
  errors: state.students.errors,
  data: state.students.data,
  dashboardData: getSummaryData(state),
});

const mapDispatchToProps = {
  fetchStudents,
};

const MainViewContainer = ({
  data,
  fetchStudents,
  errors,
  loading,
  dashboardData,
}: // dashboardData,

IContainerProps) => (
  <MainView
    data={data}
    fetchStudents={fetchStudents}
    loading={loading}
    errors={errors}
    dashboardData={dashboardData}
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(MainViewContainer);

// const MainViewContainer = () => {
//   const dispatch = useDispatch();

//   const stateToProps: IStudentState = useSelector(
//     ({ students }: IApplicationState) => ({
//       loading: students.loading,
//       errors: students.errors,
//       data: students.data,
//     })
//   );

//   const dispatchToProps = {
//     fetchStudents: useCallback(() => dispatch(fetchStudents()), [dispatch]),
//   };

//   return <MainView {...stateToProps} {...dispatchToProps} />;
// };

// export default MainViewContainer;
