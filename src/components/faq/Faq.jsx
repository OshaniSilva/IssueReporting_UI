// import React from 'react';
// // import './FaqStyles.css';
// import Accordion from 'react-bootstrap/Accordion'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
//
// class Faq extends React.Component {
//
//
//     render() {
//         return (
//             <React.Fragment>
//                 <div className="page-heading about-heading header-text">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-12">
//                                 <div className="text-content">
//                                     <h4>Frequently Asked Questions</h4>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div><br/><br/>
//                 <Accordion defaultActiveKey="0">
//                     <Card>
//                         <Card.Header>
//                             <Accordion.Toggle as={Button} variant="" eventKey="0">
//                                 <b>Number of P1 issues reported last month?</b>
//                             </Accordion.Toggle>
//                         </Card.Header>
//                         <Accordion.Collapse eventKey="0">
//                             <Card.Body>P1 issues percentage ranges from (1 - 20) %</Card.Body>
//                         </Accordion.Collapse>
//                     </Card>
//                     <Card>
//                         <Card.Header>
//                             <Accordion.Toggle as={Button} variant="" eventKey="1">
//                                 <b>How can I update to the new version?</b>
//                             </Accordion.Toggle>
//                         </Card.Header>
//                         <Accordion.Collapse eventKey="1">
//                             <Card.Body><a href="">Go to this link</a></Card.Body>
//                         </Accordion.Collapse>
//                     </Card>
//                 </Accordion>
//             </React.Fragment>
//
//         );
//     }
// }
//
// const data = {
//     title: "FAQ (How it works)",
//     rows: [
//         {
//             title: "Lorem ipsum dolor sit amet,",
//             content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
//               ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
//               In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
//               Fusce sed commodo purus, at tempus turpis.`,
//         },
//         {
//             title: "Nunc maximus, magna at ultricies elementum",
//             content:
//                 "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
//         },
//         {
//             title: "Curabitur laoreet, mauris vel blandit fringilla",
//             content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
//             Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
//             Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
//             Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
//         },
//         {
//             title: "What is the package version",
//             content: <p>current version is 1.2.1</p>,
//         },
//     ],
// };
//
// const styles = {
//     // bgColor: 'white',
//     titleTextColor: "blue",
//     rowTitleColor: "blue",
//     // rowContentColor: 'grey',
//     // arrowColor: "red",
// };
//
// const config = {
//     // animate: true,
//     // arrowIcon: "V",
//     // tabFocus: true
// };
//
// const ToggleButton = () => {
//     return(
//         <div className="wrg-toggle">
//             <div className="wrg-toggle-container">
//                 <div className="wrg-toggle-check">
//                     <span>🌜</span>
//                 </div>
//                 <div className="wrg-toggle-uncheck">
//                     <span>🌞</span>
//                 </div>
//             </div>
//             <div className="wrg-toggle-circle"></div>
//             <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
//         </div>
//     )
// }
//
//
// export default Faq;

import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Faq extends React.Component {


    render() {
        return (
            <React.Fragment>
                <div className="page-heading about-heading header-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-content" style={{marginTop:"3%"}}>
                                    <h4>Frequently Asked Questions</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="0">
                                <b>What is the Registration fee per year?</b>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Registration fee is $20 for the first yearand $79 for the rest of the years</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="" eventKey="1">
                                <b>How can I update to the new version?</b>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body><a href="">Go to this link</a></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </React.Fragment>

        );
    }
}

export default Faq;