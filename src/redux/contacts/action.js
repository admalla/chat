export default function loadingContacts() {
  return (dispatch) => {
    dispatch({ type: "contacts/load/start" });

    fetch("http://151.248.117.7:8001/api/contacts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "contacts/load/success",
          payload: json,
        });
      });
  };
}
