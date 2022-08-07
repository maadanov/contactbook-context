import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ContactContext } from "./context/ContactContext";

const AddContact = () => {
  const [inpValue, setInpValue] = useState("");
  const { addContact } = useContext(ContactContext);

  function handleClick() {
    let newObj = {
      contact: inpValue,
      status: false,
    };
    addContact(newObj);
    setInpValue("");
  }

  return (
    <div className="d-flex m-3">
      <Form.Control
        type="text"
        placeholder="add contact"
        className="w-25"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />

      <Button variant="warning" onClick={handleClick}>
        Add
      </Button>
    </div>
  );
};

export default AddContact;
