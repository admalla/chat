const initialProfile = {
  loading: true,
  profile: {},
  showBar: false,
}

export default function profileContact(state = initialProfile, action) {
  switch (action.type) {

    case "profile/load/start":
      return {
        ...state,
        loading: true
      }

    case "profile/load/success":
      return {
        ...state,
        loading: false,
        profile: action.payload
      }

    case "profile/bar/show":
      return {
        ...state,
        showBar: true,
      };

    case "profile/bar/hide":
      return {
        ...state,
        showBar: false,
      };

    default:
      return state
  }
}