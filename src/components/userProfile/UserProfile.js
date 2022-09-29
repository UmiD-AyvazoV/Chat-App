import React from "react";
import "./userProfile.css";

export default function UserProfile() {
  const toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          <img src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg" />
        </div>
        <h4>Ümid Ayvazov</h4>
        <p>Front End Developer</p>
      </div>
      <div className="profile__card">
        <div className="card__header" onClick={toggleInfo}>
          <h4>Information</h4>
          <i className="fa fa-angle-down"></i>
        </div>
        <div className="card__content">
          <p>Passionate learner</p>
          <p>Front End Dev Candidate</p>
          <p>I love developing and learning new things.</p>
          <p>And this is the main reason why I chose the IT field.</p>
          <p>There is no limit to development in IT.</p>
        </div>
      </div>
    </div>
  );
}
