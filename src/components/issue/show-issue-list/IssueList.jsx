import React from 'react';
import api from "../../../api/api";
import {Link} from "react-router-dom";

// This class is used for rendering all issues and to handle events related to it
class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issueList: [],
            updatedIssueState: '',
            issueHistory: []
        }
        this.editIssue = this.editIssue.bind(this);
        this.showHistory = this.showHistory.bind(this);
    }

    // All Issues are loaded
    componentDidMount() {
        api.getAllIssuesApi().then(result => {

            // issueList is set to the retrieved issues list
            this.setState({ issueList: result.data});
        }).catch((error) => {
            console.log(error);
        });
    }

    // Update changes
    editIssue = (editedIssue) => {

        // Validation is done here to check if user has clicked edit button without editing issue state
        if (this.state.updatedIssueState != "" ) {

            // If value is changes item issueState is updated
            editedIssue.issueState = this.state.updatedIssueState

            // After updating issueState in the edited issue updatedIssueState is set to empty string again
            this.setState({ updatedIssueState:''});
        }
        api.editIssue(editedIssue, editedIssue.id).then(result => {
            alert('You have successfully updated the issue!');
        }).catch((error) => {
            alert('Error in updating the issue. Pleas try again!');
            console.log(error);
        });
    }

    // History is  shown once link is clicked
    showHistory = (id) => {

        // issueHistory is set to the retrieved issue history data
        api.getIssueHistory(id).then(result => {
            this.setState({ issueHistory: result.data});
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {

        let allIssues = this.state.issueList;
        let issueTable;

        // Retrieved issues list is iterated and displayed in a table
        if (allIssues) {
            issueTable = allIssues.map((issue) =>
                <tr key={issue.id}>
                    <td>{issue.id}</td>
                    <td>{issue.testUser.username}</td>
                    <td>
                        <select className="form-select" aria-label="Default select example"
                                 onChange={(e) => {
                                     this.setState({updatedIssueState: e.target.value});
                                 }}>
                            <option defaultValue>{issue.issueState}</option>
                            <option value="Open">Open</option>
                            <option value="Progress">In-Progress</option>
                            <option value="Waiting">Waiting on client</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </td>
                    <td>{issue.issueType}</td>
                    <td>{issue.issueDescription}</td>
                    <td>{issue.createdTime}</td>
                    <td>
                        <button
                            id="dLabel" type="button"
                            className="btn btn-info"
                            aria-expanded="false"
                            onClick={(e) => {
                                this.editIssue(issue);
                            }}>Edit Issue
                        </button>
                    </td>
                    <td> <Link to={`/issue/getIssueHistory${issue.id}`}>Show History</Link></td>
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
                        {issueTable}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IssueList;
