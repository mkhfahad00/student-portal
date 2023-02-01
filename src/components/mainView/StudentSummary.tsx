import React from "react";
import SummaryBox from "components/mainView/SummaryBox";
import { ISummaryData } from "utils";
import Grid from "@mui/material/Grid";

function StudentSummary({
  topGrade,
  minGrade,
  maxFail,
  maxPass,
}: ISummaryData) {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ padding: "25px" }}
        // sx={{ marginTop: "35px", marginBottom: "40px" }}
      >
        <Grid item>
          <SummaryBox text="Top Grade" subText={topGrade} color="#4aaa9a" />
        </Grid>
        <Grid item>
          <SummaryBox text="Most Passed" subText={maxPass} color="#4aaa9a" />
        </Grid>{" "}
        <Grid item>
          <SummaryBox text="Min Grade" subText={minGrade} color="#ff6897" />
        </Grid>{" "}
        <Grid item>
          <SummaryBox text="Most Failed" subText={maxFail} color="#ff6897" />
        </Grid>
      </Grid>
      {/* <Container style={{ padding: "25px" }}>
        <Row>
          <Col>
            <SummaryBox text="Top Grade" subText={topGrade} color="#4aaa9a" />
          </Col>
          <Col>
            <SummaryBox text="Most Passed" subText={maxPass} color="#4aaa9a" />
          </Col>
          <Col>
            <SummaryBox text="Min Grade" subText={minGrade} color="#ff6897" />
          </Col>
          <Col>
            <SummaryBox text="Most Failed" subText={maxFail} color="#ff6897" />
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default StudentSummary;
