import React, { Fragment, useContext } from "react";

// * Import react transition group
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../Context/Contact/ContactContext";
import ContactsItam from "./ContactsItam";

const Contacts = () => {
  // * Context Api add
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  // * contact == 0
  if (contacts.length === 0) {
    return <h4>Pleace Add a contact</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup className="todo-list">
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactsItam contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactsItam contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
