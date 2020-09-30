export default function initialAnimation(){
  return dispatch => {
    dispatch({
      type: 'set_mic_send'
    });
  }
}
export function backMic(){
  return dispatch => {
    dispatch({
      type: 'set_back_mic'
    })
  }
}