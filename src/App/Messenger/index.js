import React, { Component } from "react";
import users from "../../mocks/users.js";
import messages from "../../mocks/messages.js";
import Threads from "./Threads.js";
import Chat from "./Chat.js";

const filterMessageByUsername = ({ username } = {}) => message =>
  message.from === username || message.to === username;

export default class Messenger extends Component {
  constructor(props) {
    super(props);
    const selectedUser = users[0];
    this.state = {
      selectedUser: selectedUser,
      messages: messages.filter(filterMessageByUsername(selectedUser))
    };
  }

  selectUser = (user = {}) => {
    this.setState({
      selectedUser: user,
      messages: messages.filter(filterMessageByUsername(user))
    });
  };

  showSettings = () => {
    this.toggleModal();
  };

  render() {
    const selectedUser = this.state.selectedUser;

    return (
      <div className="messenger">
        <Threads
          selectedUser={selectedUser}
          users={users}
          selectUser={this.selectUser}
          showSettings={this.showSettings}
        />
        <Chat messages={this.state.messages} selectedUser={selectedUser} />
      </div>
    );
  }
}
