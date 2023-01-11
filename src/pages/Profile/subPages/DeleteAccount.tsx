import React from "react";
import "./DeleteAccount.scss";
const DeleteAccount = () => {
  return (
    <div className="delete-account-container ">
      <h3>Deleting your account is permanent</h3>
      <h2>Whould you like to proceed?</h2>
      <button>Delete</button>
    </div>
  );
};

export default DeleteAccount;
