import React from "react";
import { connect } from "react-redux";
import MainView from "components/mainView";
import { IApplicationState } from "state/ducks/index";
import { fetchStudents } from "state/ducks/students/actions";
import { getSummaryData } from "state/ducks/students/reselectors";

const mapStateToProps = (state: IApplicationState) => ({
  loading: state.students.loading,
  errors: state.students.errors,
  data: state.students.data,
  dashboardData: getSummaryData(state),
});

const mapDispatchToProps = {
  fetchStudents,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
