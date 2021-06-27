import React from 'react';
// import { PieChart } from 'react-minimal-pie-chart';
import api from "../../../api/api";
import CanvasJSReact from './canvasjs.react';
import IssueStateList from "./issue-state-list/IssueStateList";
// var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            issueStateData: []
        }
        this.showIssueList = this.showIssueList.bind(this);
    }

    showIssueList () {
        console.log("showIssueList");
    }

    componentDidMount() {
        api.getStatusPercentage().then(result => {
            console.log("showHistory resiysss")
            console.log(result.data);
            this.setState({
                issueStateData: result.data
            })
        });
    }

    render() {
        console.log("RENDERRRRRRRRR")
        console.log(this.state.issueStateData);
        console.log("renderrrrrrrrrrrrrrrrr")
        const options = {
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: "Issue State Percentages"
            },
            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                click: function(e){
                    // <IssueStateList
                    //     data = {e.dataSeries.type}/>
                    window.location.href = `/issue/issueStateList/${e.dataPoint.label}`;
                    // alert(  e.dataSeries.type+ ", dataPoint { x:" + e.dataPoint.label + ", y: "+ e.dataPoint.y + " }" );
                },
                dataPoints: this.state.issueStateData
            }]
        }
        return (
            <div>
                <CanvasJSChart options = {options}
                    // onRef={ref => this.chart = ref}

                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}
export default Dashboard;


// let options = [
//     {
//         "stateTitle": "Open",
//         "statePercentage": 54.0
//     },
//     {
//         "stateTitle": "Waiting",
//         "statePercentage": 9.0
//     },
//     {
//         "stateTitle": "In Progress",
//         "statePercentage": 18.0
//     },
//     {
//         "stateTitle": "Resolved",
//         "statePercentage": 18.0
//     }
// ]
//
// return (
//     <div>
//         <PieChart
//             data={[
//                 { title: 'One', value: 10, color: '#1fdbdb' },
//                 { title: 'Two', value: 15, color: '#b1e2dc' },
//                 { title: 'Three', value: 20, color: '#2a61e7' },
//             ]}
//         />;
//     </div>
// );