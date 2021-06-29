import React from 'react';
import api from "../../../../api/api";

class IssueStateList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            issueState : props.match.params.state,
            issueStateData: []
        }
    }

    // getIssuesByState function is called to load all issues
    componentDidMount() {
        api.getIssuesByState(this.state.issueState).then(result => {
            this.setState({
                issueStateData: result.data
            })
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {

        // Retrieved issues are displayed in a table
        let list = this.state.issueStateData;
        let listItems = list.map((listItem) =>
            <tr key={listItem.id}>
                <td>{listItem.testUser.userId}</td>
                <td>{listItem.issueType}</td>
                <td> {listItem.issueState}</td>
                <td>{listItem.createdTime}</td>
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
                        {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IssueStateList;