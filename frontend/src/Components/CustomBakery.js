import React, { Component } from 'react'
import { Box, Grid, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material"
// import cake_img from "../../public/cake.webp"
import asset1 from "../asset1.jpg"

export default class CustomBakery extends Component {
    // const values =["Toppings","Layer 1",""]
    render() {
        return (
            <Box sx={{ height: "100%", width: "80%" }}>
                <Grid container spacing={0} justifyContent="space-between" direction="column" alignItems="stretch" height="100%">
                    <Grid item xs={1} sx={{ textAlign: "center" }}><h2>Bakery Oven</h2></Grid>
                    <Grid item xs={9} container direction="row" >
                        <Grid item xs={6} >
                            <img src={asset1} style={{ width: "400px", height: "300px" }} />
                        </Grid>
                        <Grid item xs={6} direction="column" container>
                            <Grid item xs={1}>Choose Layers and Topping</Grid>
                            <Grid item xs={11} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} sx={{ display: "flex", flexDirection: "row-reverse" }}>
                        <Button variant="contained">Add to Cart</Button>
                    </Grid>
                </Grid>
            </Box >
        )
    }
}