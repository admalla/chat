import React from "react";
import "material-design-icons/iconfont/material-icons.css";
import "./style/search.css";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./PreLoader/Preloader";
import { useHotkeys } from "react-hotkeys-hook";
import { setSearchMessage } from "../../redux/application/action";
import { hideProfile, showProfile } from "../../redux/profile/action";

function Search() {
  const contactToHeader = useSelector(
    (state) => state.messages.contactToHeader
  );
  const searchMessage = useSelector((state) => state.application.searchMessage);
  const dispatch = useDispatch();
  const showBar = useSelector((state) => state.profileContact.showBar);
  const loading = useSelector((state) => state.messages.loading);

  const handleOnChange = (e) => {
    dispatch(setSearchMessage(e.target.value));
  };

  const handleOnClick = () => {
    if (showBar === false) {
      dispatch(showProfile());
    } else {
      dispatch(hideProfile());
    }
  };

  useHotkeys("shift+p", () => {
    if (showBar === false) {
      dispatch(showProfile());
    } else {
      dispatch(hideProfile());
    }
  });

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div className="search-message">
          <div>
            <span className="material-icons">search</span>
          </div>
          <input
            type="text"
            value={searchMessage}
            placeholder="Search message"
            onChange={handleOnChange}
          />
          <div className="user-in-header">
            <b>{contactToHeader.fullname}</b>{" "}
            <span id={contactToHeader.online && "user-online-header"}></span>
          </div>
          <div>
            <span
              id="settings"
              className="material-icons"
              onClick={handleOnClick}
            >
              settings
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
