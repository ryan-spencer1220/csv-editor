import React, { useState } from "react";

const EsdForm = ({ esdFormData, objectFormData }) => {
  const [addFormData, setAddFormData] = useState({
    "ESD Name": "",
    "ESD Code": "",
    AddressLine1: "",
    AddressLine2: "",
    State: "",
    ZipCode: "",
    "Administrator Name": "",
    Phone: "",
    Email: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

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
    const newObject = {
      "ESD Name": addFormData.esdName,
      "ESD Code": addFormData.esdCode,
      AddressLine1: addFormData.addressLine1,
      AddressLine2: addFormData.addressLine2,
      State: addFormData.state,
      ZipCode: addFormData.zipCode,
      "Administrator Name": addFormData.administratorName,
      Phone: addFormData.phone,
      Email: addFormData.email,
    };
    esdFormData(newRow);
    objectFormData(newObject);
  };

  return (
    <form
      onSubmit={handleAddFormSubmit}
      className="grid grid-cols-4 gap-4 card bg-slate-200 p-10 m-10 shadow-xl"
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

export default EsdForm;
