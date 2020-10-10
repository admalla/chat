export default function loadingMessages(myId, contact) {
  return (dispatch) => {
    dispatch({
      type: "messages/load/start",
      payload: contact
    });

    fetch(`https://api.intocode.ru:8001/api/messages/${myId}/${contact._id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "messages/load/success",
          payload: json,
        });
      });
  };
}

export function sentMessage(myId, contactId, content, type) {
  return (dispatch) => {
    dispatch({ type: "message/send" });

    fetch("https://api.intocode.ru:8001/api/messages", {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        myId,
        contactId,
        type: "text",
        content,
      }),
    })
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: "message/sent",
          payload: json,
        })
      );
  };
}

export function sentContent(string) {
  return {
    type: "content/sent",
    payload: string,
  };
}

export function typeMessage(string) {
  return {
    type: "content/type/sent",
    payload: string,
  };
}

export function setBtnDelete(id) {
  return {
    type: "delete/btn/set",
    payload: id
  }
}

export function setDelete(id) {
  return {
    type: "message/delete",
    payload: id
  }
}
