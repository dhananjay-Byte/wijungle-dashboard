import React from 'react';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';
import './dashboard.css';

const EventTypeInfo = ({ data }) => {
    const eventTypeCounts = data.reduce((acc, item) => {
        const eventType = item.event_type;
        if (acc[eventType]) {
            acc[eventType]++;
        } else {
            acc[eventType] = 1;
        }
        return acc;
    }, {});

    return (
        <Container className="event-type-info-container">
            <Typography variant="h5" gutterBottom>
                Event Types
            </Typography>
            <Grid container spacing={2}>
                {Object.keys(eventTypeCounts).map((eventType) => (
                    <Grid item xs={12} sm={6} md={4} key={eventType}>
                        <Card className="event-type-card">
                            <CardContent>
                                <Typography variant="h6">{eventType}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {eventTypeCounts[eventType]} occurrences
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default EventTypeInfo;