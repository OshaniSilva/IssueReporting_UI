import React from 'react';
import './CreateIssueStyles.css';
import {Col, Row} from 'react-bootstrap';
import { connect } from "react-redux";
import { createIssue } from "../../../actions/IssueAction";
// import bindActionCreators from "react-redux/lib/utils/bindActionCreators";
import {bindActionCreators} from 'redux';
import { ReCaptcha, loadReCaptcha} from 'react-recaptcha-v3'
import Recaptcha from 'react-recaptcha';
// import { loadReCaptcha } from 'react-recaptcha-v3'
import {GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

class CreateIssue extends React.Component{

    constructor(props) {
        super(props);
        this.state ={
            description: '',
            type:'',
            isVerified: false
        }
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveIssue = this.saveIssue.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        // this.verifyCallback = this.verifyCallback.bind(this);
        // this.updateToken = this.updateToken.bind(this);
    }

    verifyCallback(response) {
        console.log("verifyCallback")
        console.log(response)
        if (response) {
            this.setState({
                isVerified: true
            })
        }
    }

    recaptchaLoaded() {
        console.log('capcha successfully loaded');
    }


    // verifyCallback = (recaptchaToken) => {
    //     // Here you will get the final recaptchaToken!!!
    //     console.log("<<<<<<<<<<<<<<<<<<<<<  verifyCallback <<<<<<<<<<<<<<<<<<<<<<<");
    //     console.log(recaptchaToken, "<= your recaptcha token")
    // }
    //
    // updateToken = () => {
    //     // you will get a new token in verifyCallback
    //     console.log("<<<<<<<<<<<<<<<<<<<<<  updateToken <<<<<<<<<<<<<<<<<<<<<<<");
    //     this.recaptcha.execute();
    // }

    // componentDidMount() {
    //     loadReCaptcha("6Le3tlsbAAAAAJ9NoMtIfd9Ci7h-dBIMUrnXRp4j", this.verifyCallback);
    // }

    onChangeType = (e) => {
        this.setState({type: e.target.value});
        console.log("onChangeType");
        console.log(e.target.value);
        console.log("STATEEEE type--  ", this.state.type);
    }

    onChangeDescription = (e) => {
        this.setState({description: e});
        console.log("onChangeDescription");
        console.log(e);
        console.log("STATEEEE description-- ", this.state.description);
        // console.log(this.props);
    };

    saveIssue = () => {
        if (this.state.isVerified) {
            if (this.state.type != '' && this.state.type != 'Select type') {

                console.log("saveIssue description-- ", this.state.description);
                console.log("saveIssue type--  ", this.state.type);
                alert('You have successfully created an issue!');

                const issueData = {
                    issueType: this.state.type,
                    issueDescription: this.state.description
                }

                this.props.actions
                    .createIssue(issueData)
                    .then((data) => {
                        console.log("===========")
                        console.log(data);
                    })
                    .catch((e) => {
                        alert('Something went wrong please submit again');
                        console.log("ERRORRRRRRRRRR")
                        console.log(e);
                    });
                console.log("NEWWWWWWWWWWWWWWWWW");
                console.log(this.props.createIssueData);
                window.location.reload();
            } else {
                alert('Please enter an issue type!');
            }

        } else {
            alert('Please verify that you are a human!');
        }
    }

    // async componentDidMount() {
    //     const token = await this.props.googleReCaptchaProps.executeRecaptcha('homepage');
    // }

    render() {
        return (
            <div>
                <div id="issueTitle">
                    <h1>Create Issue</h1>
                </div>
                <div className="row">
                    <div id="issueTypes" className="dropdown col-sm-2">
                        <select className="form-select" aria-label="Default select example"
                                onChange={(e) => {
                                    // this.setState({type: e.target.value});
                                    this.onChangeType(e);
                                }}>
                            <option defaultValue>Select type</option>
                            <option value="Bug">Bug</option>
                            <option value="Question">Question</option>
                            <option value="Improvement">Improvement</option>
                        </select>
                    </div>
                    <div  className="dropdown col-sm-2 col-md-6 col-sm-12">
                        <textarea
                            id="issueDescription"
                            value={this.state.description}
                            type="textarea"
                            maxLength="3800"
                            className="issue-description"
                            onChange={(e) => {
                                // this.setState({description: e.target.value});
                                this.onChangeDescription(e.target.value);
                            }}/>
                    </div>
                </div>
                <div id="createIssueBtn" className="col-sm-2 col-md-6 col-sm-12">
                    <button
                        id="dLabel" type="button"
                        className="btn btn-success"
                        aria-expanded="false"
                        onClick={this.saveIssue}>
                        Create Issue
                    </button>
                </div>

                <Recaptcha
                    sitekey="6Ldx51sbAAAAAH6zbQv3XErISlklmvSxOgSs2Hqs"
                    render="explicit"
                    onloadCallback={this.recaptchaLoaded}
                    verifyCallback={this.verifyCallback}/>

                {/*<ReCaptcha*/}
                {/*    ref={ref => this.recaptcha = ref}*/}
                {/*    sitekey="6Le3tlsbAAAAAJ9NoMtIfd9Ci7h-dBIMUrnXRp4j"*/}
                {/*    size="normal"*/}
                {/*    action='action_name'*/}
                {/*    verifyCallback={this.verifyCallback}*/}
                {/*/>*/}
                {/*<GoogleReCaptchaProvider*/}
                {/*    reCaptchaKey="6Le3tlsbAAAAAJ9NoMtIfd9Ci7h-dBIMUrnXRp4j"*/}
                {/*    render="explicit">*/}
                {/*    <GoogleReCaptcha*/}
                {/*        onVerify={this.verifyCallback}*/}
                {/*        data-size="normal"*/}
                {/*    />*/}
                {/*</GoogleReCaptchaProvider>*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        createIssueData: state.createIssueData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            createIssue : bindActionCreators(createIssue, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateIssue);

{/*<button id="dLabel" type="button" data-bs-toggle="dropdown" className="btn btn-secondary dropdown-toggle"*/}
{/*        aria-expanded="false"*/}
{/*        onClick={(e) => {*/}
{/*            this.setState({type: e.target.id});*/}
{/*            this.onChangeType(e); }}>*/}
{/*    Issue Types*/}
{/*</button>*/}
{/*<ul className="dropdown-menu" aria-labelledby="dLabel">*/}
{/*    <li><a id="bug"  value={this.state.type} className="dropdown-item" href="#" >Bug</a></li>*/}
{/*    <li><a id="question"  value={this.state.type} className="dropdown-item" href="#">Question</a></li>*/}
{/*    <li><a id="improvement"  value={this.state.type} className="dropdown-item" href="#">Improvement</a></li>*/}
{/*</ul>*/}

{/*<div id="issueStat" className="dropdown col-sm-2">*/}
{/*    <button id="dLabel" type="button" data-bs-toggle="dropdown" className="btn btn-secondary dropdown-toggle"*/}
{/*            aria-expanded="false">*/}
{/*        Issue State*/}
{/*    </button>*/}
{/*    <ul className="dropdown-menu" aria-labelledby="dLabel" onClick={this.onChangeDescription}>*/}
{/*        <li><a id="issue" defaultValue="test" className="dropdown-item" href="#" >Open</a></li>*/}
{/*        <li><a className="dropdown-item" href="#">In-Progress</a></li>*/}
{/*        <li><a className="dropdown-item" href="#">Waiting on client</a></li>*/}
{/*        <li><a className="dropdown-item" href="#">Resolved</a></li>*/}
{/*    </ul>*/}
{/*</div>*/}

// export default connect(null, { createIssue })(CreateIssue);


// var myDropdown = document.getElementById('dLabel')
// myDropdown.addEventListener('show.bs.dropdown', function () {
//     console.log("hiiiiiiiiiiii")
// });


{/*onClick={(e) => {*/}
{/*    onChange();*/}
{/*}}*/}
{/*<div className="dropdown">*/}
{/*    <button className="btn btn-secondary dropdown-toggle" type="button" id="issueTypes"*/}
{/*            data-bs-toggle="dropdown" aria-expanded="false">*/}
{/*        Issue Types*/}
{/*    </button>*/}
{/*    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">*/}
{/*        <li><a className="dropdown-item" href="#">Issue</a></li>*/}
{/*        <li><a className="dropdown-item" href="#">Question</a></li>*/}
{/*        <li><a className="dropdown-item" href="#">Improvement</a></li>*/}
{/*    </ul>*/}
{/*</div>*/}
{/*<div className="btn-group">*/}
{/*    <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown"*/}
{/*            aria-haspopup="true" aria-expanded="true">*/}
{/*        Issue Type*/}
{/*    </button>*/}
{/*    <div className="dropdown-menu">*/}
{/*        <a className="dropdown-item" href="#">Bug</a>*/}
{/*        <a className="dropdown-item" href="#">Question</a>*/}
{/*        <a className="dropdown-item" href="#">Improvement</a>*/}
{/*    </div>*/}
{/*</div>*/}