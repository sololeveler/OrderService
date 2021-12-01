import Header from "./Components/Header"
import LandingPage from "./Components/LandingPage"
import Footer from "./Components/Footer"
import CustomBakery from "./Components/CustomBakery"
import CartModal from "./Components/CartModal"
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import { Container, Grid, Box } from "@mui/material"
import { Component } from "react";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartState: {},
      modalState: false
    }
  }
  // updateCart = (item) => {
  //   const { cartState } = this.state;
  //   this.setState(...cartState, item);
  // }
  handleOpen = () => (this.setState({ modalState: true }));
  handleClose = () => (this.setState({ modalState: false }))

  render() {
    return (
      <Router>
        <Grid id="main" container spacing={0} direction="column" justifyContent="center" alignItems="stretch">
          <Grid item xs={0}>
            <Header handleOpen={this.handleOpen} updateCart={this.updateCart} />
          </Grid>
          <CartModal handleClose={this.handleClose} open={this.state.modalState} />
          <Grid item xs={9}>
            <Box sx={{ width: "100%", height: "100%",display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Route path="/" exact component={LandingPage} updateCart={this.updateCart} />
              <Route path="/custombakery" component={CustomBakery} updateCart={this.updateCart} />
            </Box>
          </Grid>
          <Grid item xs={0}>
            <Footer className="footer" />
          </Grid>
        </Grid>
      </Router>
    )
  }
}