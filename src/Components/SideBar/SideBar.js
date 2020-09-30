import React, {useEffect} from "react";
import Search from "./Search";
import Contacts from "./Contacts";
import "./Side-bar.css"
import loadingContacts, {getProfile} from "../../Redux/SideBar/action";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "./PreLoader/preloader";


function SideBar() {
  //TODO сделать прелоадер здесь

  const dispatch = useDispatch();
  const LoadingContacts = useSelector(state => state.contacts.loading)

  useEffect(() => {
    dispatch(getProfile())
    dispatch(loadingContacts())
  }, [dispatch])

  return (
      <div className='Side-bar'>
        <Search />
        {LoadingContacts ? <Preloader/> : <Contacts />}
      </div>

  );
}

export default SideBar;
