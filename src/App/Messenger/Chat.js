import React from "react";

export default function Chat({ messages, selectedUser }) {
  const conversation = messages.map((message, i) => (
    <div
      key={i}
      className={`message-wrapper ${
        message.from === "you" ? "sent" : "received"
      }`}
    >
      {message.to === "you" && (
        <img
          src={`images/${selectedUser.username}_lg.jpg`}
          alt={`${selectedUser.username}`}
          className="avatar medium"
        />
      )}
      <div className="message">{message.message}</div>
      {message.from === "you" && (
        <div className="message-read">
          <i className="icon fa fa-check-circle" />
        </div>
      )}
    </div>
  ));
  return (
    <div className="chat">
      <div className="chat-bar">
        <h2>
          {selectedUser.name &&
            `${selectedUser.name.first} ${selectedUser.name.last}`}
        </h2>
        <div className="chat-menu">
          <i className="icon fas fa-phone" />
          <i className="icon fas fa-video" />
          <i className="icon fas fa-info-circle" />
        </div>
      </div>
      <div className="chat-content">
        <div className="messages">
          <div className="list">
            {conversation || <p>You have no messages</p>}
          </div>
          <div className="new-message">
            <input
              type="text"
              placeholder="Type your message..."
              className="message-box"
            />
            <button>Send</button>
          </div>
        </div>
        <div className="user-detail">
          <div className="user">
            <div>
              <img
                className="avatar large"
                src={`images/${selectedUser.username}_lg.jpg`}
                alt={`${selectedUser.username}`}
              />
              <div className="user-title">
                <div className="user-name">
                  {selectedUser.name &&
                    `${selectedUser.name.first} ${selectedUser.name.last}`}
                </div>
                <div className="last-active">
                  Active {Math.floor(Math.random() * 3) + 1}m ago
                </div>
              </div>
            </div>
            <i className="icon fas fa-cog" />
          </div>
          <div>Options</div>
          <div>Facebook Profile</div>
        </div>
      </div>
    </div>
  );
}
