// import React from 'react';
// import './IssueStyles.css';
// import {Row, Col} from "react-bootstrap";
// import CreateIssue from "./create-issue/CreateIssue";
// import IssueList from "./show-issue-list/IssueList";
//
// class Issue extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             showCreateAssignement: false,
//             value: true
//         }
//         this.createIssue = this.createIssue.bind(this);
//     }
//
//     createIssue = () => {
//         window.location.href = "/issue/create";
//     }
//
//     render() {
//         return (
//             <React.Fragment>
//                 <Row>
//                     <Col md={6} sm={12} lg={3}>
//                         <div id="issueBtn">
//                             <button
//                                 id="issueBtn"
//                                 type="button"
//                                 className="btn btn-success"
//                                 aria-expanded="false"
//                                 // onClick={(e) => {
//                                 //     this.setState({showCreateAssignement: true});
//                                 //     this.setState({value: false});
//                                 // }}
//                                 onClick={this.createIssue}>
//                                 Create Issue
//                             </button>
//                         </div>
//                     </Col>
//                     <Col md={6} sm={12} lg={3}>
//                         <div id="showIssueBtn">
//                             <button
//                                 id="issueBtn"
//                                 type="button"
//                                 className="btn btn-success"
//                                 aria-expanded="false"
//                                 onClick={(e) => {
//                                     window.location.href = "/issue/getAllIssues";
//                                 }}>
//                                 Show Issue List
//                             </button>
//                         </div>
//                     </Col>
//                     <Col md={6} sm={12} lg={3}>
//                         <div id="dashboardBtn">
//                             <button
//                                 id="issueBtn"
//                                 type="button"
//                                 className="btn btn-success"
//                                 aria-expanded="false"
//                                 onClick={(e) => {
//                                     window.location.href = "/issue/dashboard";
//                                 }}>
//                                 Dashboard
//                             </button>
//                         </div>
//                     </Col>
//                 </Row>
//             </React.Fragment>
//         );
//     }
// }
//
// export default Issue;
//
