import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./ContactContext";
import ContectReducer from "./ContectReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTANT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from "../Type";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "sabuj",
        email: "sabuj@gmail.com",
        phone: "123456",
        type: "personal"
      },
      {
        id: 2,
        name: "abir",
        email: "abir@gmail.com",
        phone: "123456",
        type: "professional"
      },
      {
        id: 3,
        name: "fahad",
        email: "fahad@gmail.com",
        phone: "123456",
        type: "personal"
      }
    ],
    current: null,
    filtered: null
  };
  const [state, dispatch] = useReducer(ContectReducer, initialState);

  // ? Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //// Delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // ? set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //// clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // * update contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTANT, payload: contact });
  };

  // ! Filter contact
  const filterContent = text => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  //// Clear contact
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContent,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
