import React from 'react';
import './CreateIssueStyles.css';
import {GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import api from "../../../api/api";
import {logDOM} from "@testing-library/react";

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
        this.verifyCallback = this.verifyCallback.bind(this);
        this.updateToken = this.updateToken.bind(this);
    }

    verifyCallback = (recaptchaToken) => {

        // The final recaptchaToken
        console.log(recaptchaToken, "<= your recaptcha token")
        this.setState({
            isVerified: true
        });
    }

    updateToken = () => {

        // Will get a new token in verifyCallback
        this.recaptcha.execute();
    }

    onChangeType = (e) => {
        this.setState({type: e.target.value});
    }

    onChangeDescription = (e) => {
        this.setState({description: e});
    };

    // This method is used to save the newly created issue
    saveIssue = () => {
        if (this.state.isVerified) {

            // Validation for dropdown is done
            if (this.state.type != '' && this.state.type != 'Select type') {

                alert('You have successfully created an issue!');

                const issueData = {
                    issueType: this.state.type,
                    issueDescription: this.state.description
                }

                // Data is sent through the createIssueApi at api.js
                api.createIssueApi(issueData)
                    .then((data) => {
                        console.log('You have successfully created an issue!');
                    })
                    .catch((error) => {
                        console.log(error);
                        alert('Something went wrong please submit again');
                    });
                window.location.reload();
            } else {
                alert('Please enter an issue type!');
            }
        } else {
            alert('Please verify that you are a human!');
        }
    }

    render() {
        return (
            <div>
                <div id="issueTitle">
                    <h4>Provide Issue Information</h4>
                </div>
                <div className="row">
                    <div id="issueTypes" className="dropdown col-sm-2">
                        <select className="form-select"
                                aria-label="Default select example"
                                onChange={(e) => {
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
                </div><br/>
                <GoogleReCaptchaProvider
                    reCaptchaKey="6Le3tlsbAAAAAJ9NoMtIfd9Ci7h-dBIMUrnXRp4j"
                    render="explicit">
                    <GoogleReCaptcha
                        onVerify={this.verifyCallback}
                        data-size="normal"
                    />
                </GoogleReCaptchaProvider>
            </div>
        );
    }
}

export default CreateIssue;
