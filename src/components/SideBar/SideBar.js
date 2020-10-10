import React, { useEffect } from "react";
import Search from "./Search";
import Contacts from "./Contacts";
import "./Side-bar.css";
import loadingContacts from "../../redux/contacts/action";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./PreLoader/Preloader";
import { getProfile } from "../../redux/profile/action";

function SideBar() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(loadingContacts());
  }, [dispatch]);

  return (
    <div className="Side-bar">
      <Search />
      {loading ? <Preloader /> : <Contacts />}
    </div>
  );
}

export default SideBar;
