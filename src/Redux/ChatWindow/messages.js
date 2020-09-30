const initialMessages = {
  loading: true,
  items: [],
  searchString: "",
  loadMessage: true,
  message: "",
  content: "",
  type: "",
  profile: false,
};

export default function messages(state = initialMessages, action) {
  switch (action.type) {
    case "load_messages_start":
      return {
        ...state,
        loading: true,
      };

    case "load_messages_success":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "set_search_string":
      return {
        ...state,
        searchString: action.payload,
      };

    case "send_message_start":
      return {
        ...state,
        loadMessage: true,
      };

    case "send_message_success":
      return {
        ...state,
        loadMessage: false,
        items: [...state.items, action.payload],
        content: "",
      };

    case "sent_content":
      return {
        ...state,
        content: action.payload,
      };

    case "type_message":
      return {
        ...state,
        type: action.payload,
      };

    case "get_bar_profile":
      return {
        ...state,
        profile: true,
      };

    case "hide_profile":
      return {
        ...state,
        profile: false,
      };

    default:
      return state;
  }
}
