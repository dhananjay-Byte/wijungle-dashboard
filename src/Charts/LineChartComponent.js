import ReactEcharts from 'echarts-for-react';
const LineChartComponent = ({ data }) => {
    const timestamps = data.map(item => item.timestamp);
    const srcPorts = data.map(item => item.src_port);
    const destPorts = data.map(item => item.dest_port);

    const option = {
        title: { text: 'Source and Destination Ports over Time' },
        tooltip: { trigger: 'axis' },
        legend: { data: ['Source Port', 'Destination Port'] },
        xAxis: { type: 'category', data: timestamps },
        yAxis: { type: 'value' },
        series: [
            { name: 'Source Port', type: 'line', data: srcPorts },
            { name: 'Destination Port', type: 'line', data: destPorts }
        ]
    };

    return <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default LineChartComponent;