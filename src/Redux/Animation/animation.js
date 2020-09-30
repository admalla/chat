const initialAnimation = {
  mic: true,
  send: false,
};

export default function animation(state = initialAnimation, action) {
  switch (action.type) {
    case "set_mic_send":
      return {
        ...state,
        mic: false,
        send: true,
      };

    case "set_back_mic":
      return {
        ...state,
        send: false,
        mic: true,
      };

    default:
      return state;
  }
}
