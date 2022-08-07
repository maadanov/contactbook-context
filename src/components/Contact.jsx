import React, { useContext, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContactContext } from "./context/ContactContext";

const Contact = () => {
  const { contact, getContact, changeStatus, deleteContact, editContact } =
    useContext(ContactContext);
  useEffect(() => {
    getContact();
  }, []);
  //   console.log(contact);
  return (
    <div>
      {contact.map((item) => (
        <Card border="primary" style={{ width: "18rem" }} key={item.id}>
          <Card.Header className="d-flex justify-content-between aling-items-center">
            <span>{item.contact}</span>
            <div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteContact(item.id)}
              >
                delete
              </Button>
              <Link to={"/edit"}>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => editContact(item.id)}
                >
                  edit
                </Button>
              </Link>
            </div>
          </Card.Header>
        </Card>
      ))}
    </div>
  );
};

export default Contact;
