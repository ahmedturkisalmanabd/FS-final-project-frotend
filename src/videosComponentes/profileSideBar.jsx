import React, { Component } from "react";
import profileImage from "./css/profile.png";
import ProgressCounter from "./progressCounter";
import "./css/profileSideBar.css";
class ProfileSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="profileSideBar-container">
        <div className="profile-container">
          <img src={profileImage} width={80} />
          <h4>رتاج محمد العتيبي</h4>
          <div className="cards-container">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
        <div className="progress-items-container">
          <h2>تطورك في هذا الكورس</h2>
          <ProgressCounter done={70} />
        </div>
      </div>
    );
  }
}

export default ProfileSideBar;