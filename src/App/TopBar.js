import React from "react";

export default function TopBar({ toggleModal, userPosition, loggedUser }) {
  return (
    <div className="top-bar">
      <i className="icon fab fa-facebook-messenger" />
      <a onClick={toggleModal} className={`username ${userPosition || "left"}`}>
        {loggedUser.name}
      </a>
    </div>
  );
}
