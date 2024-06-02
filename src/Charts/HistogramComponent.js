import ReactEcharts from 'echarts-for-react';
const HistogramComponent = ({ data }) => {
    const srcPorts = data.map(item => item.src_port);
    const bins = {};
    srcPorts.forEach(port => bins[port] = (bins[port] || 0) + 1);

    const option = {
        title: { text: 'Source Port Distribution' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: Object.keys(bins) },
        yAxis: { type: 'value' },
        series: [{
            name: 'Frequency',
            type: 'bar',
            data: Object.values(bins)
        }]
    };

    return <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default HistogramComponent;