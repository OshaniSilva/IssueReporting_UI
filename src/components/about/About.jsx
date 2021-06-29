import React from 'react';
import './AboutStyles.css';
import {Row, Col} from "react-bootstrap";


class About extends React.Component{

    constructor(props) {
        super(props);
        this.state ={

        }
    }

    render() {
        return (
            <React.Fragment>
                {/*<div className="page-heading about-heading header-text">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-md-12">*/}
                {/*                <div className="text-content">*/}
                {/*                    <h2>Our Product</h2>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="best-features about-features">
                    <div className="container">
                        <div className="row">
                            {/*<div className="col-md-12">*/}
                            {/*    <div className="section-heading">*/}
                            {/*        <h2>Product details</h2>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="col-md-6">
                                <div className="right-image">
                                    <img src="./about.jpg" alt=""></img>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="left-content">
                                    <h4>What we offer</h4>
                                    <p>We are certified for Eu Organic, USDA NOP Organic, JAS Organic Certification
                                        Body: Control Union Sri Lanka for Netherlands.</p>

                                    <p>Registration No: CU836896.</p>
                                    <p>Eu Commission Registration 834/2007 and 889/2008.</p>
                                    <p>Expiration: 02 Years from the date of Manufacture under recommended storage
                                        conditions.</p>
                                    <p>Storage: Store Cool Dry place away from Direct sunlight and other heat resources.
                                        Do not refrigerate. Naturally solidify below 240C. Always use a dry spoon to
                                        take the product out. Once opened, close the lid tightly.
                                    </p>
                                    <p>Brand: Nutrinut brand or Private Brand.</p>
                                    <p>Language & Labels: Possible to include information in customer specified State
                                        Languages if required. Need buyer assistance to verify the label content for
                                        foreign languages. Organic, Kosher and FDA certification logos can be placed in
                                        the labels.
                                    </p>
                                    <p>Container: Retail in glass / PET / HDPE jars, Bulk in IBC Paper totes, steel
                                        drums and Plastic pails.</p>

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
                        </div><br/>
                        <hr/> <br/><br/>
                        <div className="col-md-4">
                            <div className="team-member">
                                {/*<div className="thumb-container">*/}
                                {/*    <img src="assets/images/team_01.jpg" alt=""></img>*/}
                                {/*        <div className="hover-effect">*/}
                                {/*            <div className="hover-content">*/}
                                {/*                <ul className="social-icons">*/}
                                {/*                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>*/}
                                {/*                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>*/}
                                {/*                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>*/}
                                {/*                    <li><a href="#"><i className="fa fa-behance"></i></a></li>*/}
                                {/*                </ul>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*</div>*/}
                                <div className="down-content">
                                    <h4>Johnny William</h4>
                                    <span>CO-Founder</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                {/*<div className="thumb-container">*/}
                                {/*    <img src="assets/images/team_02.jpg" alt=""></img>*/}
                                {/*        <div className="hover-effect">*/}
                                {/*            <div className="hover-content">*/}
                                {/*                <ul className="social-icons">*/}
                                {/*                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>*/}
                                {/*                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>*/}
                                {/*                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>*/}
                                {/*                    <li><a href="#"><i className="fa fa-behance"></i></a></li>*/}
                                {/*                </ul>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*</div>*/}
                                <div className="down-content">
                                    <h4>Karry Pitcher</h4>
                                    <span>Product Expert</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="team-member">
                                {/*<div className="thumb-container">*/}
                                {/*    <img src="assets/images/team_03.jpg" alt=""></img>*/}
                                {/*        <div className="hover-effect">*/}
                                {/*            <div className="hover-content">*/}
                                {/*                <ul className="social-icons">*/}
                                {/*                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>*/}
                                {/*                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>*/}
                                {/*                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>*/}
                                {/*                    <li><a href="#"><i className="fa fa-behance"></i></a></li>*/}
                                {/*                </ul>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*</div>*/}
                                <div className="down-content">
                                    <h4>Michael Soft</h4>
                                    <span>Chief Marketing</span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
                                </div><br/><br/>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default About;

