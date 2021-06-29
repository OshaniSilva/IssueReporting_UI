import React from 'react';
import api from "../../../api/api";
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            issueStateData: []
        }
    }

    // Percentages of issue state is shown in pie chart
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
                    window.location.href = `/issue/issueStateList/${e.dataPoint.label}`;
                },
                dataPoints: this.state.issueStateData
            }]
        }
        return (
            <div>
                <CanvasJSChart options = {options} />
            </div>
        );
    }
}
export default Dashboard;