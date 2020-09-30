export default function loadingContacts() {
  return (dispatch) => {
    dispatch({ type: "load_items_start" });

    fetch('http://151.248.117.7:8001/api/contacts')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load_items_success",
          payload: json,
        });
      });
  };
}

export function inContact(item){
  return dispatch => {
    dispatch({type: 'load_contact_start'});
    dispatch({
      type: 'load_contact_success',
      payload: item
    })
  }
}
export function setSearchString(string){
  return {
    type: 'set_search_string',
    payload: string
  }
}
export function setColorContact(payload){
  return{
    type: 'set_color_contact',
    payload
  }
}

export function getProfile(){
  return dispatch => {
    fetch('http://151.248.117.7:8001/api/profile')
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'get_profile',
          payload: json
        })
      })
  }

}
