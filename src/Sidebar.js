import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (result) => (
    <div className="sidebar-recent">
      <span className="sidebar-hash">#</span>
      <p>{result}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.pexels.com/photos/1548111/pexels-photo-1548111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <Avatar className="sidebar-avatar" />
        <h2>Prathmesh Rathod</h2>
        <h4>prathmeshrathod123@gmail.com</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed your profile</p>
          <p className="sidebar-statnumber">22,345</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on posts</p>
          <p className="sidebar-statnumber">32,345</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programing")}
        {recentItem("jobs")}
        {recentItem("web developer")}
      </div>
    </div>
  );
}

export default Sidebar;
