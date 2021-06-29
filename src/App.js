import './App.css';
import LoginLogout from "./components/login/LoginLogout";
import CreateIssue from "./components/issue/create-issue/CreateIssue";
import IssueList from "./components/issue/show-issue-list/IssueList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import Issue from "./components/issue/Issue";
import IssueHistory from "./components/issue/show-issue-list/issue-history/IssueHistory";
import Dashboard from "./components/issue/dashboard/Dashboard";
import IssueStateList from "./components/issue/dashboard/issue-state-list/IssueStateList";
import {RefreshToken} from "./components/login/RefreshToken";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
// import Logout from "./components/login/Logout";
// import "bootstrap.bundle.min.js";
// import Recaptcha from 'react-recaptcha';
// var Recaptcha = require('./react-recaptcha');
const Page404 = () =>
<div><h2>You do not have access to this page</h2></div>;
var loginSuccess = JSON.parse(localStorage.getItem('loginSuccess'));

function App() {

    // useEffect(() => {
    //     var loginData = JSON.parse(localStorage.getItem('loginData'));
    //     var loginSuccess = JSON.parse(localStorage.getItem('loginSuccess'));
    //     // const loginData = localStorage.getItem('loginData');
    //
    //     if (loginSuccess ) {
    //         RefreshToken(loginData);
    //     }
    // });

      return (
        <div className="App">
            <Router>
                {
                (window.location.href != "http://localhost:3000/") ?
                    <Header/> :null
                }

                {/*{*/}
                {/*    (window.location.href == "http://localhost:3000/") ?*/}
                {/*       <LoginLogout/> :null*/}
                {/*}*/}

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/login"]} component={LoginLogout} />
                        {/*<Route exact path={"/issue"} component={Issue} />*/}
                        <Route exact path={"/issue/create"} component={CreateIssue} />
                        {
                            (loginSuccess) ? <Route exact path={"/issue/getAllIssues"} component={IssueList} /> :null
                        }

                        <Route exact path={"/issue/getIssueHistory:id"} component={IssueHistory} />
                        <Route exact path={"/issue/dashboard"} component={Dashboard} />y
                        <Route exact path={"/contact"} component={Contact} />
                        <Route exact path={"/about"} component={About} />
                        {/*<Route exact path={"/logout"} component={Logout} />*/}
                        <Route exact path={"/issue/issueStateList/:state"} component={IssueStateList} />
                        <Route component={Page404} />
                    </Switch>
                </div>
            </Router>
        </div>
      );
}

export default App;
