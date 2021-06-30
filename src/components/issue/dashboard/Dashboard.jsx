import React from 'react';
import api from "../../../api/api";
import CanvasJSReact from './canvasjs.react';
import "./PieChartStyles.css";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// This class is used for rendering the pie chart and to handle events of issue state percentages
class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            issueStateData: []
        }
    }

    // getStatusPercentage api is called to get all the percentages of each state
    componentDidMount() {
        api.getStatusPercentage().then(result => {
            this.setState({
                issueStateData: result.data
            })
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        const pieChartOptions = {
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
                    window.location.href = `/issue/issueStateList/${e.dataPoint.label}`;
                },
                dataPoints: this.state.issueStateData
            }]
        }
        return (
            <div style={{marginTop:"10%"}}>
                <CanvasJSChart options = {pieChartOptions} />
            </div>
        );
    }
}
export default Dashboard;