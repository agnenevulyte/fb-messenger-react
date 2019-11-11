import React, { Component } from "react";
import Modal from "./Layout/Modal";
import LeanJSLogo from "./Layout/LeanJSLogo";
import Footer from "./Footer";
import TopBar from "./TopBar";
import Messenger from "./Messenger";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }));
  };

  render() {
    const loggedUser = { name: "Alex" };
    const { showModal } = this.state;
    const userPosition = "right";

    return (
      <div className="app">
        <Modal show={showModal} toggleModal={this.toggleModal} />
        <TopBar
          toggleModal={this.toggleModal}
          userPosition={userPosition}
          loggedUser={loggedUser}
        />
        <Messenger toggleModal={this.toggleModal} />
        <Footer />
      </div>
    );
  }
}

export default App;
