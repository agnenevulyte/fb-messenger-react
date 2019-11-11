import React from 'react';
import Avatar from "../../Layout/Avatar";
import Icon from "../../Layout/Icon";


export default function UserDetail({ selectedUser }) {
    return (
        <div className="user-detail">
          <div className="user">
            <div>
              <Avatar user={selectedUser} size="large" />
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
            <Icon name="cog" />
          </div>
          <div>Options</div>
          <div>Facebook Profile</div>
        </div>
    )
}
