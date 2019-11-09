import React from 'react'

export default function UserDetail({selectedUser}) {
    return (
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
    )
}
