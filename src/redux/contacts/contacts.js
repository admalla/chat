const initialContacts = {
  loading: true,
  items: [],
};

export default function contacts(state = initialContacts, action) {
  switch (action.type) {
    case "contacts/load/start":
      return {
        ...state,
        loading: true,
      };

    case "contacts/load/success":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    default:
      return state;
  }
}
