import React, { createContext, useReducer } from "react";

export const ContactContext = createContext();
const INIT_STATE = {
  contact: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACT":
      return { ...state, contact: action.payload };
    default:
      return state;
  }
};

const ContactContextProvaider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, INIT_STATE);

  const addContact = (newContact) => {
    console.log(newContact);
  };

  return (
    <ContactContext.Provider value={{ addContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvaider;
