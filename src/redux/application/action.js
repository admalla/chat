export default function setSearchContact(string) {
  return {
    type: "search/contact/set",
    payload: string
  };
}

export function setSearchMessage(string) {
  return {
    type: "search/message/set",
    payload: string
  };
}

export function setAnimationSend() {
  return (dispatch) => {
    dispatch({
      type: "animation/icon/send",
    });
  };
}
export function setAnimationMic() {
  return (dispatch) => {
    dispatch({
      type: "animation/icon/mic",
    });
  };
}
