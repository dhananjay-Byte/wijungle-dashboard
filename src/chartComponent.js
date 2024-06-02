import React from 'react';
import ReactEcharts from 'echarts-for-react';

const ChartComponent = ({ data }) => {
    // Transform the data to match the chart requirements
    const timestamps = data.map(item => item.timestamp);
    const srcPorts = data.map(item => item.src_port);
    const destPorts = data.map(item => item.dest_port);

    const getOption = () => ({
        title: {
            text: 'Network Alerts'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Source Port', 'Destination Port']
        },
        xAxis: {
            type: 'category',
            data: timestamps
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Source Port',
                type: 'line',
                data: srcPorts
            },
            {
                name: 'Destination Port',
                type: 'line',
                data: destPorts
            }
        ]
    });

    return (
        <ReactEcharts option={getOption()} style={{ height: '400px', width: '100%' }} />
    );
};

export default ChartComponent;