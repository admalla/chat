const initialApplication = {
  searchContact: "",
  searchMessage: "",
  mic: true,
  send: false
}

export default function application(state = initialApplication, action) {
  switch (action.type) {

    case "search/contact/set":
      return {
        ...state,
        searchContact: action.payload
      }

    case "search/message/set":
      return {
        ...state,
        searchMessage: action.payload
      }

    case "animation/icon/send":
      return {
        ...state,
        mic: false,
        send: true,
      };

    case "animation/icon/mic":
      return {
        ...state,
        send: false,
        mic: true,
      };

    default:
      return state
  }
}