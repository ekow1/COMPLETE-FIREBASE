let initialStore = {
  contacts: [],
};

let ContactReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "ADD_NEW_CONTACT":
      return { ...state, contacts: action.payload };
    case "DELETE_CONTACT":
      const tempContact = state.contacts.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, contacts: tempContact };
    case "EDIT_CONTACT":
      const temp = state.contacts.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return item;
        }
      });
      return { ...state, contacts: temp };
    default:
      return state;
  }
};

export default ContactReducer;
