import React from 'react'

export default function Messages({messages, selectedUser}) {
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
    )
}
