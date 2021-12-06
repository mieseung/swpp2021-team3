import React, { Component } from "react";

import "./ReportingLog2.css";

class ReportingLog2 extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="ReportingLog2">
        <div className="ReportingLog2_Box">
          <div className="ReportingLog2_Text">
            Recent Reporting Log :{this.props.userID}
            {this.props.reportedSummoner}
            <br />
            태그:{this.props.tags}, 매너포인트:{this.props.userEvaluation}
            {/* {this.props.comments}
             {this.props.apology} */}
          </div>
          <img
            className="ReportingLog2_Paper"
            alt="paper_img"
            src={process.env.PUBLIC_URL + `/images/icons/icon-paper.png`}
            // onClick={() => this.props.clicked}
          />
          <img
            className="ReportingLog2_Delete"
            alt="delete_img"
            src={process.env.PUBLIC_URL + `/images/icons/icon-delete.png`}
            // onClick={() => this.props.clicked}
          />
        </div>
      </div>
    );
  }
}

export default ReportingLog2;
