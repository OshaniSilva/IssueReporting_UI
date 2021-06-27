import './App.css';
import LoginLogout from "./components/login/LoginLogout";
import CreateIssue from "./components/issue/create-issue/CreateIssue";
import IssueList from "./components/issue/show-issue-list/IssueList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Issue from "./components/issue/Issue";
import IssueHistory from "./components/issue/show-issue-list/issue-history/IssueHistory";
import Dashboard from "./components/issue/dashboard/Dashboard";
import IssueStateList from "./components/issue/dashboard/issue-state-list/IssueStateList";
import {RefreshToken} from "./components/login/RefreshToken";
// import "bootstrap.bundle.min.js";
// import Recaptcha from 'react-recaptcha';
// var Recaptcha = require('./react-recaptcha');

function App() {

    const getToken = () => {
        const loginData = localStorage.getItem('loginData');
        RefreshToken(loginData);
    };

    // useEffect(() => {
    //     const loginData = localStorage.getItem('loginData');
    //     console.log("login DATAA")
    //     console.log(loginData)
    //     RefreshToken(loginData);
    // });

      return (
        <div className="App">
            {/*<Logout/>*/}
            <Router>
                {/*<div>*/}
                {/*    {getToken}*/}
                {/*</div>*/}
                <Header/>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/"]} component={LoginLogout} />
                        <Route exact path={"/issue"} component={Issue} />
                        <Route exact path={"/issue/create"} component={CreateIssue} />
                        <Route exact path={"/issue/getAllIssues"} component={IssueList} />
                        <Route exact path={"/issue/getIssueHistory:id"} component={IssueHistory} />
                        <Route exact path={"/issue/dashboard"} component={Dashboard} />
                        <Route exact path={"/issue/issueStateList/:state"} component={IssueStateList} />
                    </Switch>
                </div>
            </Router>
        </div>
      );
}

export default App;
