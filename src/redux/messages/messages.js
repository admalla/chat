const initialMessages = {
  loading: true,
  items: [],
  loadMessage: true,
  message: "",
  content: "",
  type: "",
  contactToHeader: "",
  btnDelete: "",
  deleting: false
};

export default function messages(state = initialMessages, action) {
  switch (action.type) {
    case "messages/load/start":
      return {
        ...state,
        loading: true,
        contactToHeader: action.payload,
      };

    case "messages/load/success":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "message/send":
      return {
        ...state,
        loadMessage: true,
      };

    case "message/sent":
      return {
        ...state,
        loadMessage: false,
        items: [...state.items, action.payload],
        content: "",
      };

    case "content/sent":
      return {
        ...state,
        content: action.payload,
      };

    case "content/type/sent":
      return {
        ...state,
        type: action.payload,
      };

    case "delete/btn/set":
      return {
        ...state,
        btnDelete: action.payload
      }

    case "message/delete":
      return {
        ...state,
        items: state.items.filter(item => {
          if(item._id === action.payload) {
            return false
          } return true
        })
      }

    default:
      return state;
  }
}
