import React from "react";
import ContactMenu from "./ContactMenu";
import Info from "./Info";
import "./style/sideBarDetail.css";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

function SideBarDetail() {
  const showBar = useSelector((state) => state.profileContact.showBar);

  return (
    <CSSTransition in={showBar} timeout={1000} unmountOnExit>
      <div className="detail">
        <div style={{ width: 370 }}>
          <ContactMenu />
          <Info />
        </div>
      </div>
    </CSSTransition>
  );
}

export default SideBarDetail;
