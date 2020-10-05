const initialMessages = {
  loading: true,
  items: [],
  loadMessage: true,
  message: "",
  content: "",
  type: "",
  contactToHeader: "",
  opened: "",
  btnDelete: ""
};

export default function messages(state = initialMessages, action) {
  switch (action.type) {
    case "messages/load/start":
      return {
        ...state,
        loading: true,
        contactToHeader: action.payload,
        opened: action.payload._id
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

    default:
      return state;
  }
}
