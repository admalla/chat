import React from "react";
import 'material-design-icons/iconfont/material-icons.css';
import "./search.css"
import {useDispatch, useSelector} from "react-redux";
import {setSearchString} from "../../Redux/SideBar/action";


function Search() {
  const searchString = useSelector(state => state.contacts.searchString)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchString(e.target.value))
  }
  return (
    <form className='search'>
      <div>
        <span className="material-icons">
          search
        </span>
      </div>
      <input
        type='text'
        value={searchString}
        placeholder='Search contact'
        onChange={handleChange}
      />
    </form>
  )
}

export default Search;
