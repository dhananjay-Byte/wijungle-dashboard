import React from 'react';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';
import './dashboard.css';

const ProtoInfo = ({ data }) => {
    const protoCounts = data.reduce((acc, item) => {
        const proto = item.proto;
        if (acc[proto]) {
            acc[proto]++;
        } else {
            acc[proto] = 1;
        }
        return acc;
    }, {});

    return (
        <Container className="proto-info-container">
            <Typography variant="h5" gutterBottom>
                Protocols
            </Typography>
            <Grid container spacing={2}>
                {Object.keys(protoCounts).map((proto) => (
                    <Grid item xs={12} sm={6} md={4} key={proto}>
                        <Card className="proto-card">
                            <CardContent>
                                <Typography variant="h6">{proto}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {protoCounts[proto]} occurrences
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProtoInfo;