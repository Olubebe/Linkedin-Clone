import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";

const HeaderOptions = ({ avater, Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avater && (
        <Avatar className="headerOption__icon" src={avater} alt="avater" />
      )}
      <h3 classN ame="headerOption__title">
        {title}
      </h3>
    </div>
  );
};

export default HeaderOptions;
