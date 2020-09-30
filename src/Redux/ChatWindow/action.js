export default function loadingMessages(myId, contactId) {
  return (dispatch) => {
    dispatch({ type: "load_messages_start" });

    fetch(`http://151.248.117.7:8001/api/messages/${myId}/${contactId}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load_messages_success",
          payload: json,
        });
      });
  };
}

export function setSearchString(string) {
  return {
    type: "set_search_string",
    payload: string,
  };
}

export function sentMessage(myId, contactId, content, type) {
  return (dispatch) => {
    dispatch({ type: "send_message_start" });

    fetch("http://151.248.117.7:8001/api/messages", {
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
          type: "send_message_success",
          payload: json,
        })
      );
  };
}

export function sentContent(string) {
  return {
    type: "sent_content",
    payload: string,
  };
}

export function typeMessage(string) {
  return {
    type: "type_message",
    payload: string,
  };
}

export function showProfile() {
  return {
    type: "get_bar_profile",
  };
}

export function hideProfile() {
  return {
    type: "hide_profile",
  };
}
