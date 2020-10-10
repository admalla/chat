import React from "react";
import {useDispatch} from "react-redux";
import {setDelete} from "../../redux/messages/action";

function DeleteMessage({message}) {
  const dispatch = useDispatch();

  console.log(message)

  const handleOnClick = (message) => {
    dispatch(setDelete(message._id))
  }
  return (
    <div className="btn-delete">
      <button
        id='btn'
        onClick={() => handleOnClick(message)}
      >
        delete
      </button>
    </div>
  );
}

export default DeleteMessage;
