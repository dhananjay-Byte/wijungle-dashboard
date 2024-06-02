import ReactEcharts from 'echarts-for-react';
const ScatterPlotComponent = ({ data }) => {
    const scatterData = data.map(item => [item.src_port, item.dest_port]);

    const option = {
        title: { text: 'Source Port vs Destination Port' },
        tooltip: { trigger: 'axis' },
        xAxis: { name: 'Source Port', type: 'value' },
        yAxis: { name: 'Destination Port', type: 'value' },
        series: [{
            name: 'Ports',
            type: 'scatter',
            data: scatterData
        }]
    };

    return <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default ScatterPlotComponent