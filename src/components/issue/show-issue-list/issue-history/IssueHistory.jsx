import React from 'react';
import api from "../../../../api/api";

// This class is used for rendering the workflow of an issue and to handle events related to it
class IssueHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            // id is assigned the issue id passed as a param
            id: props.match.params.id,
            historyData: []
        }
    }

    // Issue history is loaded through sending issue id
    componentDidMount() {
        api.getIssueHistory(this.state.id).then(result => {

            // historyData of a particular issue is set to the retrieved issue history data
            this.setState({
                historyData: result.data
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {

        // Retrieved issueHistory data object is iterated and data is displayed in a table
        let issueHistory = this.state.historyData;
        let issueHistoryTable = issueHistory.map((issue) =>
            <tr key={issue.id}>
                <td>{issue.createdTime}</td>
                <td>{issue.issueState}</td>
            </tr>
        );

        return (
            <div>
                <div id="issueTitle">
                    <h4>Workflow History of Issue</h4>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Issue Timestamp</th>
                            <th scope="col">Issue State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issueHistoryTable}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IssueHistory;