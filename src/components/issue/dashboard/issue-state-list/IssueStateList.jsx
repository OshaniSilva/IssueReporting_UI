import React from 'react';
import api from "../../../../api/api";

class IssueStateList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            issueState : props.match.params.state,
            issueStateData: []
        }
        // this.state = props.match.params.state;

        // const id = props.match.params.id;
        // this.setState({id:id})
        console.log("hereeeeeeeeee")
        console.log(this.state.issueState)


        // this.showHistory = this.showHistory.bind(this);

    }

    componentDidMount() {
        console.log("this.state")
        console.log(this.state.issueState)
        api.getIssuesByState(this.state.issueState).then(result => {
            console.log("issueState resiysss")
            console.log(result.data);

            this.setState({
                issueStateData: result.data
            })
        });
    }

    render() {
        let list = this.state.issueStateData;

        console.log("---list-----");
        console.log(list);

        let listItems = list.map((listItem) =>
            <tr key={listItem.id}>
                <td>{listItem.testUser.userId}</td>
                <td>{listItem.issueType}</td>
                <td> {listItem.issueState}</td>
                <td>{listItem.createdTime}</td>
            </tr>
        );

        // return (<h>hhhh</h>);
        return(
            <div>
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
            // <div><ul>{listItems}</ul></div>;
    }
}

export default IssueStateList;