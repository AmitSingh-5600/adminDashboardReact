import React, { useState } from "react";
import Logo from "../imgs/logo.png";
import "./sidebar.css";
import { sidebarMenuItems } from "../Data/data";
// import {
//   UilCreateDashboard,
//   UilClipboardNotes,
//   UilUsersAlt,
//   UilBox,
//   UilGraphBar,
// } from "@iconscout/react-unicons";

let Icon = sidebarMenuItems[1].icon;

function Sidebar() {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <div className="menu-items-container">
        {sidebarMenuItems.map((item, i) => (
          <div
            key={i}
            className={activeLink == i ? "menu-item active" : "menu-item"}
            onClick={() => setActiveLink(i)}
          >
            <item.icon size="30" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
