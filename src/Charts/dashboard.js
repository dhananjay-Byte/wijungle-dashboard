import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, FormControl, Select, MenuItem, Container, Grid, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LineChartComponent from './LineChartComponent';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';
import ScatterPlotComponent from './ScatterPlotComponent';
import HistogramComponent from './HistogramComponent';
import './dashboard.css';
import AlertCategoryInfo from './AlertCategoryInfo';
import ProtoInfo from './PortoInfo';
import EventTypeInfo from './EventTypeInfo';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#040D12',
            paper: '#183D3D'
        },
        primary: {
            main: '#5C8374',
        },
        secondary: {
            main: '#93B1A6',
        },
        text: {
            primary: '#ffffff',
            secondary: '#93B1A6',
        },
    },
});

const Dashboard = ({ data }) => {
    const [selectedChart, setSelectedChart] = useState('Histogram');

    const handleChange = (event) => {
        setSelectedChart(event.target.value);
    };

    const chartComponents = {
        Histogram: <HistogramComponent data={data} />,
        LineChart: <LineChartComponent data={data} />,
        BarChart: <BarChartComponent data={data} />,
        PieChart: <PieChartComponent data={data} />,
        ScatterPlot: <ScatterPlotComponent data={data} />,
      
    };

    const chartExplanations = {
        LineChart: 'This line chart shows the changes in source and destination ports over time, helping to identify trends and patterns in network traffic.',
        BarChart: 'The bar chart displays the frequency of different source ports, illustrating which ports are most commonly used.',
        PieChart: 'This pie chart depicts the distribution of alert categories, providing a quick overview of the types of alerts generated.',
        ScatterPlot: 'The scatter plot shows the relationship between source and destination ports, helping to identify any correlation between them.',
        Histogram: 'This histogram displays the distribution of source ports, showing how often each port appears in the data.',
    };

    return (
 <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" className='dashboard-info'>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="#1597BB">
                            DashBoard
                        </Typography>
                        <FormControl className='check-form' sx={{ minWidth: 200 }}>
                            <Select
                                value={selectedChart}
                                onChange={handleChange}
                                // label="Select Chart"
                                style={{ color: 'white',  borderColor: 'blue' }}
                            >
                                <MenuItem value="Histogram">Histogram</MenuItem>
                                <MenuItem value="LineChart">Line Chart</MenuItem>
                                <MenuItem value="BarChart">Bar Chart</MenuItem>
                                <MenuItem value="PieChart">Pie Chart</MenuItem>
                                <MenuItem value="ScatterPlot">Scatter Plot</MenuItem>
                             
                            </Select>
                        </FormControl>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container className='info-Container'>
                <Box>

            <AlertCategoryInfo data={data}/>
                <ProtoInfo data={data}/>
                <EventTypeInfo data={data}/>
                </Box>
            </Container>
            <Container maxWidth="xl" className="dashboard-container">
               
                <Grid container spacing={2} className="chart-container">
                    <Grid item xs={12}>
                        {chartComponents[selectedChart]}
                    </Grid>
                </Grid>
                <Box className="chart-explanation">
                    <h1 style={{color:'wheat'}}>Chart Insight</h1>
                    <Typography variant="h6" gutterBottom color="#1597BB" fontSize='25px'>
                        {chartExplanations[selectedChart]}
                    </Typography>
                </Box>
            </Container>
 </>

    );
};

export default Dashboard;