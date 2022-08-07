import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "./context/ContactContext";

const EditContact = () => {
  const { contactToEdit, saveContact } = useContext(ContactContext);
  const [newEditItem, setNewEditItem] = useState(contactToEdit);
  const navigate = useNavigate();

  function handleEditInput(e) {
    let newContact = {
      ...newEditItem,
      contact: e.target.value,
    };
    setNewEditItem(newContact);
  }

  useEffect(() => {
    setNewEditItem(contactToEdit);
  }, [contactToEdit]);

  console.log(newEditItem);

  return (
    <div className="d-flex m-3">
      {newEditItem ? (
        <>
          {" "}
          <Form.Control
            type="text"
            placeholder="add contact"
            className="w-25"
            value={newEditItem.contact}
            onClick={handleEditInput}
          />
          <Button
            variant="warning"
            onClick={() => {
              saveContact(newEditItem);
              navigate("/");
            }}
          >
            save
          </Button>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default EditContact;
