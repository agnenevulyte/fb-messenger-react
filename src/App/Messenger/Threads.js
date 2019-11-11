import React from "react";
import Avatar from "../Layout/Avatar";
import Icon from "../Layout/Icon";
import users from "../../mocks/users";

export default function Threads({
  selectedUser,
  selectUser,
  showSettings
}) {
  return (
    <div className="threads">
      <div className="thread-bar">
        <h2>
          <a onClick={showSettings}>
            <Icon name="cog" />
          </a>
          Messenger
          <Icon name="edit" />
        </h2>
      </div>
      <ul className="thread-list">
        {users.map((user, i) => (
          <li
            key={i}
            className={
              selectedUser.username === user.username ? "active-thread" : ""
            }
            onClick={() => selectUser(user)}
          >
            <Avatar user={user} size="large" />
            <div className="user-name">
              <span>{`${user.name.first} ${user.name.last}`}</span>
              <small>message preview</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
