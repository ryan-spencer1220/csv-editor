import React, { useState } from "react";
import { nanoid } from "nanoid";

const NewEntry = ({ fileName, esdFormData }) => {
  const [addFormData, setAddFormData] = useState({
    esdName: "",
    esdCode: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    zipCode: "",
    administratorName: "",
    phone: "",
    email: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  // const handleAddFormSubmit = (event) => {
  //   event.preventDefault();
  //   const newRow = {
  //     id: nanoid(),
  //     esdName: addFormData.esdName,
  //     esdCode: addFormData.esdCode,
  //     addressLine1: addFormData.addressLine1,
  //     addressLine2: addFormData.addressLine2,
  //     state: addFormData.state,
  //     zipCode: addFormData.zipCode,
  //     administratorName: addFormData.administratorName,
  //     phone: addFormData.phone,
  //     email: addFormData.email,
  //   };
  //   esdFormData(newRow);
  // };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newRow = [
      addFormData.esdName,
      addFormData.esdCode,
      addFormData.addressLine1,
      addFormData.addressLine2,
      addFormData.state,
      addFormData.zipCode,
      addFormData.administratorName,
      addFormData.phone,
      addFormData.email,
    ];
    esdFormData(newRow);
  };

  return (
    <form
      onSubmit={handleAddFormSubmit}
      className="grid grid-cols-4 gap-4 m-4 card bg-slate-200 p-10 m-10 shadow-xl"
    >
      <label>ESD Name</label>
      <input
        className="input input-bordered max-w-xs m-1"
        name="esdName"
        onChange={handleAddFormChange}
      />
      <label>ESD Code</label>
      <input
        className="input input-bordered w-full max-w-xs m-1"
        name="esdCode"
        onChange={handleAddFormChange}
      />
      <label>Address Line 1</label>
      <input
        className="input input-bordered w-full max-w-xs m-1"
        name="addressLine1"
        onChange={handleAddFormChange}
      />
      <label>Address Line 2</label>
      <input
        className="input input-bordered w-full max-w-xs m-1"
        name="addressLine2"
        onChange={handleAddFormChange}
      />
      <label>State</label>
      <input
        className="input input-bordered w-full max-w-xs m-1"
        name="state"
        onChange={handleAddFormChange}
      />
      <label>Zip Code</label>
      <input
        className="input input-bordered w-full max-w-xs m-1"
        name="zipCode"
        onChange={handleAddFormChange}
      />
      <label>Administrator Name</label>
      <input
        className="input input-bordered w-full max-w-xs m-1"
        name="administratorName"
        onChange={handleAddFormChange}
      />
      <label>Phone</label>
      <input
        className="input input-bordered w-full max-w-xs m-1"
        name="phone"
        onChange={handleAddFormChange}
      />
      <label>Email</label>
      <input
        className="input input-bordered w-full max-w-xs m-1"
        name="email"
        onChange={handleAddFormChange}
      />
      <button className="btn items-center" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewEntry;
