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
        this.changeState = this.changeState.bind(this);
        this.editIssue = this.editIssue.bind(this);
        this.showHistory = this.showHistory.bind(this);

    }

    componentDidMount() {
        // const res =  api.getAllIssuesApi();
        console.log("---componentDidMount---");
        // console.log(res.data);

        api.getAllIssuesApi().then(result => {
            console.log("resiysss")
            console.log(result.data);
            this.setState({ issueList: result.data});
        })
    }

    changeState = (item) => {

        console.log("onChangeType");
        console.log(item);
        console.log("STATEEEE type--  ", this.state.updatedIssueState);
    };

    editIssue = (item) => {
        console.log("----editIssue---  ", this.state.updatedIssueState);
        console.log("---BEFORE---item---  ", item);
        if (this.state.updatedIssueState != "" ) {
            item.issueState = this.state.updatedIssueState
            this.setState({ updatedIssueState:''});
        }
        console.log("---AFTER----item---  ", item);
        api.editIssue(item, item.id).then(result => {
            console.log("resiysss")
            console.log(result.data);

            // this.setState({ issueList: result.data});
        });
    }

    showHistory = (id) => {
        console.log("---showHistory---- ",id);
        api.getIssueHistory(id).then(result => {
            console.log("showHistory resiysss")
            console.log(result.data);
            this.setState({ issueHistory: result.data});
            if (result.data) {
                this.setState({isShowHistory:true});
                console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<")
                return (
                    <h1>HIIIIIIIIIIIIIIIIIIIIIIIIIIIII</h1>
                );
            }
        });
    }

    render() {

        let list = this.state.issueList;
        console.log("=======render=== ",  list);

        // const listItems = list.map((listItem) =>
        //     <li key={listItem.id}>
        //         {listItem.issueType}<br/>
        //         {listItem.issueDescription}<br/>
        //         <select className="form-select" aria-label="Default select example"
        //                 onChange={(e) => {
        //                     this.setState({updatedIssueState: e.target.value});
        //                     this.changeState(listItem);
        //                 }}>
        //             <option defaultValue>{listItem.issueState}</option>
        //             <option value="Open">Open</option>
        //             <option value="Progress">In-Progress</option>
        //             <option value="Waiting">Waiting on client</option>
        //             <option value="Resolved">Resolved</option>
        //         </select><br/>
        //         {listItem.createdTime}<br/>
        //         {listItem.testUser.username}<br/>
        //         <button
        //             id="dLabel" type="button"
        //             className="btn btn-info"
        //             aria-expanded="false"
        //             onClick={(e) => {
        //                 this.editIssue(listItem);
        //             }}>
        //             Edit Issue
        //         </button><br/><br/>
        //         <Link to={`/issue/getIssueHistory${listItem.id}`}>Show History</Link>
        //         <br/><br/>
        //     </li>
        // );

        let listItems = list.map((listItem) =>
                <tr key={listItem.id}>
                    <td>{listItem.id}</td>
                    <td>{listItem.testUser.username}</td>
                    <td> <select className="form-select" aria-label="Default select example"
                                 onChange={(e) => {
                                     this.setState({updatedIssueState: e.target.value});
                                     this.changeState(listItem);
                                 }}>
                        <option defaultValue>{listItem.issueState}</option>
                        <option value="Open">Open</option>
                        <option value="Progress">In-Progress</option>
                        <option value="Waiting">Waiting on client</option>
                        <option value="Resolved">Resolved</option>
                    </select></td>
                    <td>{listItem.issueType}</td>
                    <td>{listItem.issueDescription}</td>
                    <td>{listItem.createdTime}</td>
                    <td><button
                        id="dLabel" type="button"
                        className="btn btn-info"
                        aria-expanded="false"
                        onClick={(e) => {
                            this.editIssue(listItem);
                        }}>
                        Edit Issue
                    </button></td>
                    <td> <Link to={`/issue/getIssueHistory${listItem.id}`}>Show History</Link></td>
                </tr>
        );

        return(
            <div id="issueTitle">
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

        // return (
        //     <div>
        //         <div id="issueTitle">
        //             <h1>Issue List</h1>
        //         </div>
        //         <div>
        //             <ul>{listItems}</ul>
        //         </div>
        //
        //
        //     </div>
        // );
    }
}

export default IssueList;


{/*{*/}
{/*    (this.state.isShowHistory == true) ? (*/}
{/*        <div className="modal" tabIndex="-1" role="dialog">*/}
{/*        <div className="modal-dialog" role="document">*/}
{/*        <div className="modal-content">*/}
{/*        <div className="modal-header">*/}
{/*        <h5 className="modal-title">Modal title</h5>*/}
{/*        <button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
{/*        <span aria-hidden="true">&times;</span>*/}
{/*        </button>*/}
{/*        </div>*/}
{/*        <div className="modal-body">*/}
{/*        <p>Modal body text goes here.</p>*/}
{/*        </div>*/}
{/*        <div className="modal-footer">*/}
{/*        <button type="button" className="btn btn-primary">Save changes</button>*/}
{/*        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>*/}
{/*        </div>*/}
{/*        </div>*/}
{/*        </div>*/}
{/*        </div> ) : null*/}
{/*}*/}
