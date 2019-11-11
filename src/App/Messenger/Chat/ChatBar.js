import React from 'react'
import Icon from '../../Layout/Icon'

export default function ChatBar({ selectedUser }) {
    return (
      <div className="chat-bar">
        <h2>
          {selectedUser.name &&
            `${selectedUser.name.first} ${selectedUser.name.last}`}
        </h2>
        <div className="chat-menu">
          <Icon name="phone" />
          <Icon name="video" />
          <Icon name="info-circle" />
        </div>
      </div>
    )
}
