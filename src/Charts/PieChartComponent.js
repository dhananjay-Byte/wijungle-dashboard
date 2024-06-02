import ReactEcharts from 'echarts-for-react';
const PieChartComponent = ({ data }) => {
    const categories = data.map(item => item.alert?.category);
    const categoryCounts = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    const option = {
        title: { text: 'Alert Category Distribution' },
        tooltip: { trigger: 'item' },
        series: [
            {
                name: 'Category',
                type: 'pie',
                radius: '50%',
                data: Object.entries(categoryCounts).map(([name, value]) => ({ name, value }))
            }
        ]
    };

    return <ReactEcharts option={option} style={{ height: '400px', width: '100%'}} />;
}

export default PieChartComponent;