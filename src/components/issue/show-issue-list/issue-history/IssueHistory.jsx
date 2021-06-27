import React from 'react';
import './IssueHistoryStyles.css';
import api from "../../../../api/api";

class IssueHistory extends React.Component {

    constructor(props) {
        super(props);

        // this.state = props.match.params.id;
        // let historyData = [];

        this.state = {
            id : props.match.params.id,
            historyData: []
        }

        // const id = props.match.params.id;
        // this.setState({id:id})


        // this.showHistory = this.showHistory.bind(this);

    }

    componentDidMount() {
        // const { id } = this.props;
        // eslint-disable-next-line no-undef

        console.log("---showHistory--ID-- ",this.state.id);
        api.getIssueHistory(this.state.id).then(result => {
            console.log("showHistory resiysss")
            console.log(result.data);

            this.setState({
                historyData: result.data
            })

            // let listItems = result.data.map((listItem) =>
            //     <li key={listItem.id}>
            //         {listItem.createdTime}<br/>
            //         {listItem.issueState}<br/>
            //         <br/>
            //     </li>
            // );
            // return <div><ul>{listItems}</ul></div>;
        });
    }

    render() {

        console.log("---STATE-----");
        console.log(this.state.id);

        let list = this.state.historyData;

        console.log("---list-----");
        console.log(list);

        let listItems = list.map((listItem) =>
                <tr key={listItem.id}>
                    <td>{listItem.createdTime}</td>
                    <td>{listItem.issueState}</td>
                </tr>
            // <li key={listItem.id}>
            //     {listItem.createdTime}<br/>
            //     {listItem.issueState}<br/>
            //     <br/>
            // </li>
        );


        // return (<h>hhhh</h>);
        return(
                <div>
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

// import api from "../../../../api/api";
// import React from "react";
// import {Link} from "react-router-dom";
//
// export default function IssueHistory(props) {
//
//     const id = props.match.params.id;
//     let historyData = [];
//     let listItems;
//
//     console.log("---showHistory---- ",id);
//     api.getIssueHistory(id).then(result => {
//         console.log("showHistory resiysss")
//         console.log(result.data);
//         historyData = result.data;
//
//         console.log("dataaaaaaa");
//         console.log(historyData)
//         let listItems = historyData.map((listItem) =>
//             <li key={listItem.id}>
//                 {listItem.createdTime}<br/>
//                 {listItem.issueState}<br/>
//                 <br/>
//             </li>
//         );
//         return <div><ul>{listItems}</ul></div>;
//     });
//     return null;
// }