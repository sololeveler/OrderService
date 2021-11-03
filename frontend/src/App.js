import Header from "./Components/Header"
import LandingPage from "./Components/LandingPage"
import Footer from "./Components/Footer"
import CustomBakery from "./Components/CustomBakery"
import CartModal from "./Components/CartModal"
import { Link, BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "@mui/material"
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
        <div className="Container">
          <Header handleOpen={this.handleOpen} updateCart={this.updateCart} />
          <CartModal handleClose={this.handleClose} open={this.state.modalState} />
          <Route path="/" exact component={LandingPage} updateCart={this.updateCart} />
          <Route path="/custombakery" component={CustomBakery} updateCart={this.updateCart} />
          <Footer className="footer" />
        </div>
      </Router>
    )
  }
}