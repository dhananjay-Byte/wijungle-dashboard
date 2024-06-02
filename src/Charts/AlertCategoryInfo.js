import React from 'react';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';
import './dashboard.css';

const AlertCategoryInfo = ({ data }) => {
    const alertCategoryCounts = data.reduce((acc, item) => {
        const category = item.alert?.category;
        if (acc[category]) {
            acc[category]++;
        } else {
            acc[category] = 1;
        }
        return acc;
    }, {});

    return (
        <Container className="alert-category-container">
            <Typography variant="h5" gutterBottom>
                Alert Categories
            </Typography>
            <Grid container spacing={2}>
                {Object.keys(alertCategoryCounts).map((category) => (
                    <Grid item xs={12} sm={6} md={4} key={category}>
                        <Card className="alert-category-card">
                            <CardContent>
                                <Typography variant="h6">{category}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {alertCategoryCounts[category]} occurrences
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default AlertCategoryInfo;