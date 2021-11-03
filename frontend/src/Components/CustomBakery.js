import React, { Component } from 'react'
import { Box, Img, Grid } from "@mui/material"
// import cake_img from "../../public/cake.webp"

export default class CustomBakery extends Component {
    render() {
        return (
            <Box sx={{ height: "50%", width: "50%" }}>
                <Grid container spacing={1} justifyContent="space-between" direction="column" alignItems="stretch">
                    <Grid item xs={2}><h1>Bakery Oven</h1></Grid>
                    <Grid item xs={10} container direction="row">
                        <Grid item xs={7}>
                            <img src={"../../public/logo512.png"} />
                        </Grid>
                        <Grid item xs={5}>FILLER TEXT</Grid>
                    </Grid>
                    <Grid item xs={2}>FILLER TEXT</Grid>
                </Grid>
            </Box>
        )
    }
}