import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import axios from "axios";
import "./MyReportingLogs.css";
// import Pencil from "../../Assets/Images/icon-pencil.png";
import Paper from "../../Assets/Images/icon-paper.png";
import Delete from "../../Assets/Images/icon-delete.png";

class MyReportingLogs extends Component {
  render() {
    return (
      <div className="myReportingLogsPage">
        {/* {redirect} */}
        <text className="myReportingLogsTitle">작성한 리포트</text>
        <div style={{ left: "38.5%" }}>
          <div className="reportinglogs_box1">
            <text className="reportinglogs_boxText1">
              Recent Reporting Log1 : ReportedSummoner
            </text>
            <text className="reportinglogs_boxText2">
              #tag1, #tag2, #tag3, Evalutation, Comment
            </text>
            <img className="reportinglogs_Paper" src={Paper} alt={Paper} />
            <img className="reportinglogs_Delete" src={Delete} alt={Delete} />
          </div>
          <div className="reportinglogs_box2">
            <text className="reportinglogs_boxText1">
              Recent Reporting Log1 : ReportedSummoner
            </text>
            <text className="reportinglogs_boxText2">
              #tag1, #tag2, #tag3, Evalutation, Comment
            </text>
            <img className="reportinglogs_Paper" src={Paper} alt={Paper} />
            <img className="reportinglogs_Delete" src={Delete} alt={Delete} />
          </div>
          <div className="reportinglogs_box3">
            <text className="reportinglogs_boxText1">
              Recent Reporting Log1 : ReportedSummoner
            </text>
            <text className="reportinglogs_boxText2">
              #tag1, #tag2, #tag3, Evalutation, Comment
            </text>
            <img className="reportinglogs_Paper" src={Paper} alt={Paper} />
            <img className="reportinglogs_Delete" src={Delete} alt={Delete} />
          </div>
          <div className="reportinglogs_box4">
            <text className="reportinglogs_boxText1">
              Recent Reporting Log1 : ReportedSummoner
            </text>
            <text className="reportinglogs_boxText2">
              #tag1, #tag2, #tag3, Evalutation, Comment
            </text>
            <img className="reportinglogs_Paper" src={Paper} alt={Paper} />
            <img className="reportinglogs_Delete" src={Delete} alt={Delete} />
          </div>
          <div className="reportinglogs_box5">
            <text className="reportinglogs_boxText1">
              Recent Reporting Log1 : ReportedSummoner
            </text>
            <text className="reportinglogs_boxText2">
              #tag1, #tag2, #tag3, Evalutation, Comment
            </text>
            <img className="reportinglogs_Paper" src={Paper} alt={Paper} />
            <img className="reportinglogs_Delete" src={Delete} alt={Delete} />
          </div>
          <div className="reportinglogs_box6">
            <text className="reportinglogs_boxText1">
              Recent Reporting Log1 : ReportedSummoner
            </text>
            <text className="reportinglogs_boxText2">
              #tag1, #tag2, #tag3, Evalutation, Comment
            </text>
            <img className="reportinglogs_Paper" src={Paper} alt={Paper} />
            <img className="reportinglogs_Delete" src={Delete} alt={Delete} />
          </div>
        </div>
      </div>
    );
  }
}

export default MyReportingLogs;