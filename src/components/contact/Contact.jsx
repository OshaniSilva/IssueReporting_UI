import React from 'react';

// This class renders the UI of Contact page
class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
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
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAIZwk0nrLWCPEij8xvOHnD47DVaNth7K8&q=Space+Needle,Seattle+WA"
                                        style={{width: "100%", height: "330px"}}></iframe>
                                </div>
                            </div>
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
                                            </fieldset>
                                            <br/>
                                        </div>
                                        <div className="col-lg-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="filled-button">Send
                                                    Message
                                                </button>
                                            </fieldset>
                                            <br/>
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
                                    </div>
                                    <br/><br/>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h5>Phone :</h5>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        07778949002
                                    </div>
                                    <div className="col-lg-12">
                                        07789913929
                                    </div>
                                    <br/><br/>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h5>Email :</h5>
                                    </div>
                                    <div className="col-lg-12">
                                        issuesys@gmail.com
                                    </div>
                                    <br/>
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

