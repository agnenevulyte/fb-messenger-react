import React from "react";
import ChatBar from "./ChatBar";
import Messages from './Messages'
import UserDetail from "./UserDetail";

export default function Chat({ messages, selectedUser }) {
  
  return (
    <div className="chat">
      <ChatBar selectedUser={selectedUser}/>
      <div className="chat-content">
        <Messages messages={messages} selectedUser={selectedUser} />
        <UserDetail selectedUser={selectedUser}/>
      </div>
    </div>
  );
}
