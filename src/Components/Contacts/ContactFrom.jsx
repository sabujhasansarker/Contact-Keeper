import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../Context/Contact/ContactContext";

const ContactFrom = () => {
  // * useContaxt
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  // * useEffect
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }

    // * useEffect Hook dependency use jokon kaj ta babbar hobe tokon / notun kore selete kora hobe
  }, [contactContext, current]);

  // * declear contact state
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });
  const { name, email, phone, type } = contact;

  // * Change contact value
  const hendelChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // * onSubmite contact
  const onsubmit = e => {
    e.preventDefault();
    if (current == null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
    clearCurrent();
  };

  // * clear current value
  const clearAll = () => clearCurrent();

  return (
    <form onSubmit={onsubmit}>
      <h2 className="text-primary text-center">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        placeholder="name"
        value={name}
        name="name"
        onChange={hendelChange}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={hendelChange}
      />
      <input
        type="text"
        placeholder="phone"
        name="phone"
        value={phone}
        onChange={hendelChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        onChange={hendelChange}
        checked={type == "personal"}
      />{" "}
      Personal{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        onChange={hendelChange}
        checked={type === "professional"}
      />{" "}
      Professional
      <div>
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="btn-block btn btn-primary"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactFrom;
