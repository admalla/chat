const initialContacts = {
  loading: true,
  items: [],
  loadContact: true,
  contact: "",
  searchString: "",
  colorContact: "",
  profile: {},
};

export default function contacts(state = initialContacts, action) {
  switch (action.type) {
    case "load_items_start":
      return {
        ...state,
        loading: true,
      };

    case "load_items_success":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "load_contact_start":
      return {
        ...state,
        loadContact: true,
      };

    case "load_contact_success":
      return {
        ...state,
        loadContact: false,
        contact: action.payload,
      };

    case "set_search_string":
      return {
        ...state,
        searchString: action.payload,
      };

    case "set_color_contact":
      return {
        ...state,
        colorContact: action.payload,
      };

    case "get_profile":
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
}
