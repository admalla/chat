export function getProfile() {
  return (dispatch) => {
    dispatch({
      type: "profile/load/start"
    })

    fetch("https://api.intocode.ru:8001/api/profile")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "profile/load/success",
          payload: json,
        });
      });
  };
}

export function showProfile() {
  return {
    type: "profile/bar/show",
  };
}

export function hideProfile() {
  return {
    type: "profile/bar/hide",
  };
}