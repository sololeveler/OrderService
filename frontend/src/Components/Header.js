import React from 'react'
import { Button, Box } from '@mui/material'
import PropTypes from 'prop-types'

function Header(props) {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between', alignItems: "center",
            backgroundColor: "black"
        }}>
            <h3 style={{ color: "#FFFFFF" }}>PastryWorks</h3>
            <Box>
                <Button variant="contained" onClick={props.handleOpen}>Cart</Button>
                <Button >Login</Button>
            </Box>
        </Box>
    )
}

Header.propTypes = {

}

export default Header

