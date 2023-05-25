import React from "react";

const EditName = ({ firstName, lastName, onSubmit, onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
    };
    onSubmit(credentials);
  };

  const closeForm = (e) => {
    e.preventDefault();
    onCancel();
  };
  return (
    <div className="edit-name">
      <form onSubmit={handleSubmit} className="form-name">
        <div className="form-input">
          <input
            type="text"
            placeholder={firstName}
            name="firstName"
            onChange={(e) => e.target.value}
            required
          />
          <input
            type="text"
            placeholder={lastName}
            name="lastName"
            onChange={(e) => e.target.value}
            required
          />
        </div>
        <div className="form-button">
          <button type="submit">Save</button>
          <button onClick={closeForm}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditName;
