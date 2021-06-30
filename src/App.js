import './App.css';
import LoginLogout from "./components/login/LoginLogout";
import CreateIssue from "./components/issue/create-issue/CreateIssue";
import IssueList from "./components/issue/show-issue-list/IssueList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import IssueHistory from "./components/issue/show-issue-list/issue-history/IssueHistory";
import Dashboard from "./components/issue/dashboard/Dashboard";
import IssueStateList from "./components/issue/dashboard/issue-state-list/IssueStateList";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Faq from "./components/faq/Faq";
const Page404 = () =>
<div><h2>You do not have access to this page</h2></div>;

function App() {
      return (
        <div className="App">
            <Router>
                {
                    (window.location.href != "http://localhost:3000/") ?
                        <Header/> :null
                }

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/login"]} component={LoginLogout} />
                        {/*{*/}
                        {/*    (loginSuccess) ?*/}
                        {/*        <div>*/}
                                    <Route exact path={"/issue/create"} component={CreateIssue} />
                                    <Route exact path={"/issue/getAllIssues"} component={IssueList} />
                                    <Route exact path={"/issue/getIssueHistory:id"} component={IssueHistory} />
                                    <Route exact path={"/issue/dashboard"} component={Dashboard} />
                                    <Route exact path={"/contact"} component={Contact} />
                                    <Route exact path={"/about"} component={About} />
                                    <Route exact path={"/faq"} component={Faq} />
                                    <Route exact path={"/issue/issueStateList/:state"} component={IssueStateList} />
                        {/*        </div>*/}
                        {/*        : null*/}
                        {/*}*/}
                        <Route component={Page404} />
                    </Switch>
                </div>
            </Router>
        </div>
      );
}

export default App;
