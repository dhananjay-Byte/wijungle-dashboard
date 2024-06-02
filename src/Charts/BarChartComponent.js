import ReactEcharts from 'echarts-for-react';
const BarChartComponent = ({ data }) => {
    const srcPorts = data.map(item => item.src_port);
    const portCounts = srcPorts.reduce((acc, port) => {
        acc[port] = (acc[port] || 0) + 1;
        return acc;
    }, {});

    const option = {
        title: { text: 'Source Port Frequencies' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: Object.keys(portCounts) },
        yAxis: { type: 'value' },
        series: [{ name: 'Count', type: 'bar', data: Object.values(portCounts) }]
    };

    return <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default BarChartComponent