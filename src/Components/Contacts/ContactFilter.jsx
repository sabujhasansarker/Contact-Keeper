import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../Context/Contact/ContactContext";

export const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filtered, filterContent, clearFilter } = contactContext;

  //   * useRef is a react hook like onChange hendelar (look at console )
  const text = useRef("");
  //   console.log(text.current.value);

  //   * useEffect hook
  useEffect(() => {
    if (filtered == null) {
      text.current.value = "";
    }
  });

  //   * Add filterContent & Clear filterContent
  const hendelChange = e => {
    text.current.value !== "" ? filterContent(e.target.value) : clearFilter();
  };

  return (
    <form action="">
      <input
        type="text"
        ref={text}
        placeholder="Filter Contacts..."
        onChange={hendelChange}
      />
    </form>
  );
};
