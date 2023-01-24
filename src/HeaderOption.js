import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
function HeaderOption({ title, Icon, avatar }) {
  return (
    <div className="headeroption">
      {Icon && <Icon className="headeroption-icon" />}
      {avatar && <Avatar className="headeroption-icon" src={avatar} />}
      <h3 className="headeroption-title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
