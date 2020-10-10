export default function loadingContacts() {
  return (dispatch) => {
    dispatch({ type: "contacts/load/start" });

    fetch("https://api.intocode.ru:8001/api/contacts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "contacts/load/success",
          payload: json,
        });
      });
  };
}
