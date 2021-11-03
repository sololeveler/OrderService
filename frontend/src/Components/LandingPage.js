import React, { Component } from 'react'
import { Paper, Box, Button, Grid, Container, Card, CardContent } from "@mui/material"
import { Link } from "react-router-dom"
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default class LandingPage extends Component {
    render() {
        return (
            <Card sx={{ paddingX: "12.5%", paddingY: "16%", flexDirection: "column", justifyContent: "center" }}>
                <Grid container spacing={0} justifyContent="space-between" direction="row" alignItems="stretch">
                    <Grid item xs={4}>
                        <Link to="/custombakery"><Item sx={{ height: "100%" }}>Custom Pastry</Item></Link>
                    </Grid>
                    <Grid container direction="column" item xs spacing={1}>
                        <Grid item xs={6}>
                            <Item>Menu</Item>
                        </Grid>
                        <Grid item xs container spacing={1}>
                            <Grid item xs={8}>
                                <Item>Beverages</Item>
                            </Grid>
                            <Grid item xs>
                                <Item>Surprise Me</Item>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        )
    }
}
