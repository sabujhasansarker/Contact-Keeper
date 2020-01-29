import React, { useContext } from "react";
import propTypes from "prop-types";
import ContactContext from "../../Context/Contact/ContactContext";
const ContactsItam = ({ contact }) => {
  // * UseContext Hook
  const contactContaxt = useContext(ContactContext);
  const {
    deleteContact,
    setCurrent,
    clearCurrent,
    clearFilter
  } = contactContaxt;

  // * distaccher from Contact
  const { id, name, email, phone, type } = contact;

  // * Delete Contact
  const hendelClick = id => {
    deleteContact(id);
    clearCurrent();
    clearFilter();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {/* For first letter uper case */}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {/* && If the email does not show then the tag will not show */}
        {email && (
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={id => hendelClick(contact.id)}
        >
          Delete
        </button>
      </p>
    </div>
  );
};

ContactsItam.propTypes = {
  contact: propTypes.object.isRequired
};
export default ContactsItam;
