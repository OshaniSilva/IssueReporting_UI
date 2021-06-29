import React from 'react';
import './IssueList.css';
import {Col, Row} from 'react-bootstrap';
import api from "../../../api/api";
import {Link} from "react-router-dom";

class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            issueList: [],
            updatedIssueState: '',
            issueHistory: [],
            isShowHistory: false
        }
        this.editIssue = this.editIssue.bind(this);
        this.showHistory = this.showHistory.bind(this);
    }

    // All Issues are loaded
    componentDidMount() {
        api.getAllIssuesApi().then(result => {
            this.setState({ issueList: result.data});
        }).catch((error) => {
            console.log(error);
        });
    }

    // Update changes
    editIssue = (item) => {
        if (this.state.updatedIssueState != "" ) {
            item.issueState = this.state.updatedIssueState
            this.setState({ updatedIssueState:''});
        }
        api.editIssue(item, item.id).then(result => {
            // this.setState({ issueList: result.data});
        });
    }

    // History is  shown once link is clicked
    showHistory = (id) => {
        api.getIssueHistory(id).then(result => {
            this.setState({ issueHistory: result.data});
            if (result.data) {
                this.setState({isShowHistory:true});
            }
        });
    }

    render() {

        let list = this.state.issueList;
        let listItems;

        if (list) {
            listItems = list.map((listItem) =>
                <tr key={listItem.id}>
                    <td>{listItem.id}</td>
                    <td>{listItem.testUser.username}</td>
                    <td>
                        <select className="form-select" aria-label="Default select example"
                                 onChange={(e) => {
                                     this.setState({updatedIssueState: e.target.value});
                                 }}>
                            <option defaultValue>{listItem.issueState}</option>
                            <option value="Open">Open</option>
                            <option value="Progress">In-Progress</option>
                            <option value="Waiting">Waiting on client</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </td>
                    <td>{listItem.issueType}</td>
                    <td>{listItem.issueDescription}</td>
                    <td>{listItem.createdTime}</td>
                    <td>
                        <button
                            id="dLabel" type="button"
                            className="btn btn-info"
                            aria-expanded="false"
                            onClick={(e) => {
                                this.editIssue(listItem);
                            }}>Edit Issue
                        </button>
                    </td>
                    <td> <Link to={`/issue/getIssueHistory${listItem.id}`}>Show History</Link></td>
                </tr>
            );
        }

        return(
            <div id="issueTitle">
                <div id="issueTitle">
                    <h4>All Issues Reported</h4>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Issue Id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Issue State</th>
                            <th scope="col">Issue Type</th>
                            <th scope="col">Issue Description</th>
                            <th scope="col">Created Time</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Show History</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IssueList;
