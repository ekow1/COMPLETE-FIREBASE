export const AddNewContact = (newContact) => {
  return {
    type: "ADD_NEW_CONTACT",
    payload: newContact,
  };
};
export const DeleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    payload: id,
  };
};
export const EditContact = (data) => {
  return {
    type: "EDIT_CONTACT",
    payload: { data },
  };
};
