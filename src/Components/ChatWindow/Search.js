import React from "react";
import "material-design-icons/iconfont/material-icons.css";
import "./Style/search.css";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./PreLoader/preloader";
import {
  hideProfile,
  setSearchString,
  showProfile,
} from "../../Redux/ChatWindow/action";
import { useHotkeys } from "react-hotkeys-hook";

function Search() {
  const contact = useSelector((state) => state.contacts.contact);
  const searchString = useSelector((state) => state.messages.searchString);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.messages.profile);
  const loadContact = useSelector((state) => state.messages.loading);

  const handleOnChange = (e) => {
    dispatch(setSearchString(e.target.value));
  };

  const handleOnClick = () => {
    if (profile === false) {
      dispatch(showProfile());
    } else {
      dispatch(hideProfile());
    }
  };
  useHotkeys("shift+p", () => {
    if (profile === false) {
      dispatch(showProfile());
    } else {
      dispatch(hideProfile());
    }
  });

  return (
    <div>
      {loadContact ? (
        <Preloader />
      ) : (
        <div className="search-message">
          <div>
            <span className="material-icons">search</span>
          </div>
          <input
            type="text"
            value={searchString}
            placeholder="Search message"
            onChange={handleOnChange}
          />
          <div className="user-in-header">
            <b>{contact.fullname}</b>{" "}
            <span id={contact.online && "user-online-header"}></span>
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
