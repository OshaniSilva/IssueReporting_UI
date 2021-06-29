import React from 'react';
import './ContactStyles.css';
import {Row, Col} from "react-bootstrap";


class Contact extends React.Component{

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                {/*<div class="page-heading contact-heading header-text">*/}
                {/*    <div class="container">*/}
                {/*        <div class="row">*/}
                {/*            <div class="col-md-12">*/}
                {/*                <div class="text-content">*/}
                {/*                    <h4>contact us</h4>*/}
                {/*                    <h2>let’s get in touch</h2>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="find-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-heading">
                                    <h4>Contact us</h4>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div id="map">
                                    <iframe
                                        src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                       style={{ width:"100%", height:"330px"}}></iframe>
                                </div>
                            </div>
                            {/*<div className="col-md-4">*/}
                            {/*    <div className="left-content">*/}
                            {/*        <h4>About our company</h4>*/}
                            {/*        <p>We are Sri Lankan comapny that exports Organic Virgin Coconut Oil to Europe. We*/}
                            {/*            gurantee that are our*/}
                            {/*            of best quality and made of 100% natural coconut white meat(kernal) of well*/}
                            {/*            matured Coconut.</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h4>Send us a Message</h4>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <form id="contact" action="" method="post">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                                <input name="name" type="text" className="form-control" id="name"
                                                       placeholder="Full Name" required=""></input>

                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                                <input name="email" type="text" className="form-control" id="email"
                                                       placeholder="E-Mail Address" required=""></input>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                                <input name="subject" type="text" className="form-control" id="subject"
                                                       placeholder="Subject" required=""></input>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" className="form-control" id="message"
                                                          placeholder="Your Message" required=""></textarea>
                                            </fieldset><br/>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="filled-button">Send
                                                    Message
                                                </button>
                                            </fieldset><br/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-form">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                           <h5>Address</h5>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            17/5, Maithree MW, Waragoda, Kelamiya
                                        </div><br/><br/>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <h5>Phone :</h5>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                           07778949002
                                        </div>
                                        <div className="col-lg-12">
                                           07789913929
                                        </div><br/><br/>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <h5>Email :</h5>
                                        </div>
                                        <div className="col-lg-12">
                                            issuesys@gmail.com
                                        </div><br/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
    );
    }
    }

    export default Contact;

