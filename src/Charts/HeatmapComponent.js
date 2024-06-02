import ReactEcharts from 'echarts-for-react';
const HeatmapComponent = ({ data }) => {
    const heatmapData = data.map(item => [item.src_ip, item.dest_port, 1]);

    const option = {
        title: { text: 'Source IP vs Destination Port Heatmap' },
        tooltip: { position: 'top' },
        xAxis: { type: 'category', data: Array.from(new Set(data.map(item => item.src_ip))) },
        yAxis: { type: 'category', data: Array.from(new Set(data.map(item => item.dest_port))) },
        visualMap: {
            min: 0,
            max: 10,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%'
        },
        series: [{
            name: 'Heatmap',
            type: 'heatmap',
            data: heatmapData,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    return <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default HeatmapComponent;