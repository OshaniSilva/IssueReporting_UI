import React from 'react';
import api from "../../../../api/api";

// This class is used for rendering issue list by state UI and to handle events related to it
class IssueStateList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            // issueState is assigned the state value passed as a param
            issueState : props.match.params.state,
            issueStateData: []
        }
    }

    // getIssuesByState function is called to load all issues by state
    componentDidMount() {
        api.getIssuesByState(this.state.issueState).then(result => {

            // issueStateData is set to the retrieved issue data
            this.setState({
                issueStateData: result.data
            })
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {

        // Retrieved issues by state list is iterated and displayed in a table
        let issueList = this.state.issueStateData;
        let tableIssueList = issueList.map((issue) =>
            <tr key={issue.id}>
                <td>{issue.testUser.userId}</td>
                <td>{issue.issueType}</td>
                <td> {issue.issueState}</td>
                <td>{issue.createdTime}</td>
            </tr>
        );

        return(
            <div>
                <div id="issueTitle">
                    <h4>Issues By Workflow State</h4>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Issue Type</th>
                            <th scope="col">Issue State</th>
                            <th scope="col">Created Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableIssueList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IssueStateList;