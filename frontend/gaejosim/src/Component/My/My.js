import React, { Component } from "react";
import {withRouter } from "react-router-dom";
import axios from "axios";

import ReportedLog from "../ReportedLog/ReportedLog";
import ReportingLog from "../ReportingLog/ReportingLog";

import "./My.css";

class My extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username : '',
      email : '',
      summonerName : '',
      mannerPoint : 0,
      reportsForUser : [],
      reportsByUser : [],
      getResult: false,
    };
  }

  getMyInfo = async () => {
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFToken";

    axios.get("/api/token/").then();

    console.log("getMyInfo")
    const response = await axios.get('/api/mypage/', {  
    })
    .then(res => {
      let userInfo = res.data.user
      let reportInfo = res.data.reports
      this.setState({username: userInfo.username, email: userInfo.email, summonerName: userInfo.summoner_name, mannerPoint: userInfo.mannerPoint,
          reportsForUser: reportInfo.reports_for_user, reportsByUser : reportInfo.reports_by_user, getResult : true
      })
    })
  };

  onClickReportedLogs = () => {
    this.props.history.push('/myReportedLogs')
  };

  onClickReportingLogs = () => {
    this.props.history.push('/myReportingLogs')
  };

  render() {
    let reportedLogs = []
    let reportingLogs = []
    if (this.state.getResult === false) {
      this.getMyInfo()
    } 
    else {
      let idx = 0
      reportedLogs = this.state.reportsForUser.map((report) => {
        idx++
        return (
          <ReportedLog key={idx} userID={report.id} userEvaluation={report.userEvaluation}
            tags={report.tags} comment={report.comment} apology={report.apology}
          />
        )
      })
    }
    return (
      <div className="myPage">
        <div className="mypageTitle">마이페이지</div>
        {this.state.getResult && 
          <div className = 'resultDisplay'>
            <div className="mypageContent">
              <div style={{ fontWeight: "bold" }}>유저네임</div>
              {this.state.username}
              <br />
              <br />
              <div style={{ fontWeight: "bold" }}>이메일</div>
              {this.state.email}
              <br />
              <br />
              <div style={{ fontWeight: "bold" }}>소환사이름</div>
              {this.state.summonerName}
              <br />
              <br />
              <div style={{ fontWeight: "bold" }}>매너포인트</div>
              {this.state.mannerPoint}
            </div>
            <div style={{ left: "38.5%" }}>
              <div className="recentText1">Recent Reporting Logs</div>
              <div
                className="SeemoreText1"
                onClick={() => this.onClickReportingLogs()}
              >
                더보기
              </div>
              <div className="mypage_box1">
                {reportedLogs}
              </div>
              <div className="mypage_box2">
                <ReportingLog />
              </div>
            </div>
            <div>
              <div className="recentText2">Recent Reported Logs</div>
              <div
                className="SeemoreText2"
                onClick={() => this.onClickReportedLogs()}
              >
                더보기
              </div>
              <div className="mypage_box3">
                <ReportedLog />
              </div>
              <div className="mypage_box4">
                <ReportedLog />
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default withRouter(My)
