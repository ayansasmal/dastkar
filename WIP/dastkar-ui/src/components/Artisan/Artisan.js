import React, { useState } from "react";
import classes from "./Artisan.module.css";
import EditableLabel from "../UI/EditableLabel/EditableLabel";

const Artisan = (props) => {
  const getAddress = (address) => {
    if (address) {
      return `${address.street}, ${address.city}, ${address.state}, ${address.zip}, ${address.country}`;
    }
    return undefined;
  };

  /* input data */
  const [id, setId] = useState(props.uniqueName);
  const [title, setTitle] = useState(props.title);
  const [email, setEmail] = useState(props.email);
  const [contactNo, setContactNo] = useState(props.contactNo);
  const [address, setAddress] = useState(getAddress(props.address));

  const isValidEmail = (value) => {
    console.log("Validating email", value);
    return false;
  };

  return (
    <div className={classes.Artisan}>
      <EditableLabel label="Unique Id :" value={id} updateHandler={setId} />
      <EditableLabel label="Name :" value={title} updateHandler={setTitle} />
      <EditableLabel
        label="Email :"
        value={email}
        updateHandler={setEmail}
        validationHandler={isValidEmail}
      />
      <EditableLabel
        label="Contact No. :"
        value={contactNo}
        updateHandler={setContactNo}
      />
      <EditableLabel
        type="textArea"
        label="Address :"
        value={address}
        updateHandler={setAddress}
      />
    </div>
  );
};

export default Artisan;
