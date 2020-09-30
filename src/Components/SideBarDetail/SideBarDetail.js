import React from "react";
import ContactMenu from "./ContactMenu";
import Info from "./Info";
import "./Style/sideBarDetail.css";
import {useSelector} from "react-redux";
import {CSSTransition} from "react-transition-group";

function SideBarDetail() {
  const profile = useSelector(state => state.messages.profile)
  console.log(profile)

  return (
    <CSSTransition
      in={profile}
      timeout={1000}
      unmountOnExit
    >
      <div className="detail">
        <div style={{width: 370}}>
          <ContactMenu/>
          <Info/>
        </div>

      </div>
    </CSSTransition>
  );
}

export default SideBarDetail;
