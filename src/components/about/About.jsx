import React from 'react';
import './AboutStyles.css';
import about from './about.jpg';

// This class renders the UI of about page
class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="best-features about-features" style={{marginTop: "4%"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="right-image">
                                    <img src={about} alt="Photo of Co-Founder Kate Wills" style={{width:"100%", height: "430px"}}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="left-content">
                                    <h4>What we offer</h4>
                                    <p>An increasing number of teams today are developing more iteratively, and our
                                        platform is the central hub for the coding, collaboration, and release
                                        stages.</p>

                                    <p><a href="">Go to template library </a></p>
                                    <p>For issue management, we integrate with a variety of add-ons so the QA’s testing
                                        slides seamlessly into the software development cycle. Teams can test
                                        effectively and iteratively. </p>
                                    <p>Visualize and progress your project using issues on a powerful board. </p>
                                    <p>Choose from dozens of pre-configured templates, spanning teams, departments, and
                                        categories, to guide your team’s next project to success.
                                    </p>
                                    <p>Brand: Org brand or Private Brand.</p>
                                    <p>Manage activities for completing a business project. </p>
                                    <p>Plan, build, and operate software in one central project. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h4>Our Team Members</h4>
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <br/><br/>
                        <div className="col-md-4">
                            <div className="team-member">
                                <div className="down-content">
                                    <h4>Kate Wills</h4>
                                    <span>CO-Founder</span>
                                    <p>Kate Wills an entrepreneur and a world recognized Innovator.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <div className="down-content">
                                    <h4>Kay Zee</h4>
                                    <span>Product Expert</span>
                                    <p>Kay Zee is an Innovator and a Content creator</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                <div className="down-content">
                                    <h4>Oshani Silva</h4>
                                    <span>Developer</span>
                                    <p>Oshani Silva is a Software Engineer where she develops web resourses</p>
                                </div>
                                <br/><br/>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default About;