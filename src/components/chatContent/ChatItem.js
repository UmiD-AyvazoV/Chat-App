import React from "react";

export default function chatItem({ msg }) {
  return (
    <>
      <div
        style={{ animationDelay: `0.8s` }}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{msg}</div>
          <div className="chat__meta">
            <span>just now</span>
          </div>
        </div>
      </div>
      <img
        className="profile"
        src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
      />
    </>
  );
}
