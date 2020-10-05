import React from "react";
import "material-design-icons/iconfont/material-icons.css";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import setSearchContact from "../../redux/application/action";

function Search() {
  const searchContact = useSelector((state) => state.application.searchContact);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchContact(e.target.value));
  };
  return (
    <form className="search">
      <div>
        <span className="material-icons">search</span>
      </div>
      <input
        type="text"
        value={searchContact}
        placeholder="Search contact"
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
