import React from 'react';
import './IssueHistoryStyles.css';
import api from "../../../../api/api";

class IssueHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            historyData: []
        }
    }

    // Issue history is loaded through sending issue id
    componentDidMount() {
        api.getIssueHistory(this.state.id).then(result => {
            this.setState({
                historyData: result.data
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {

        let list = this.state.historyData;
        let listItems = list.map((listItem) =>
            <tr key={listItem.id}>
                <td>{listItem.createdTime}</td>
                <td>{listItem.issueState}</td>
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
                        {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IssueHistory;