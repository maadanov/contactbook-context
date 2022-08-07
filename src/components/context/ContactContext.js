import axios from "axios";
import React, { createContext, useReducer } from "react";

export const ContactContext = createContext();
const INIT_STATE = {
  contact: [],
  contactToEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACT":
      return { ...state, contact: action.payload };
    case "EDIT_CONTACT":
      return { ...state, contactToEdit: action.payload };
    default:
      return state;
  }
};

const ContactContextProvaider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, INIT_STATE);

  const getContact = async () => {
    const { data } = await axios("http://localhost:8001/contact");
    dispach({
      type: "GET_CONTACT",
      payload: data,
    });
  };

  const addContact = async (newContact) => {
    console.log(newContact);
    await axios.post("http://localhost:8001/contact", newContact);
    getContact();
  };

  const changeStatus = async (id) => {
    let { data } = await axios.patch(`http://localhost:8001/contact/${id}`);

    await axios.patch(`http://localhost:8001/contact/${id}`, {
      status: !data.status,
    });
    getContact();
  };

  const deleteContact = async (id) => {
    await axios.delete(`http://localhost:8001/contact/${id}`);
    getContact();
  };

  const editContact = async (id) => {
    let { data } = await axios(`http://localhost:8001/contact/${id}`);
    dispach({
      type: "EDIT_CONTACT",
      payload: data,
    });
  };

  const saveContact = async (newContact) => {
    await axios.patch(
      `http://localhost:8001/contact/${newContact.id}`,
      newContact
    );
    getContact();
  };
  return (
    <ContactContext.Provider
      value={{
        contact: state.contact,
        contactToEdit: state.contactToEdit,
        addContact,
        getContact,
        changeStatus,
        deleteContact,
        editContact,
        saveContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvaider;
