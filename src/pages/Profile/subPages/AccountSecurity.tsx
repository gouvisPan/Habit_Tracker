import React from "react";
import "./AccountSecurity.scss";

const AccountSecurity = () => {
  return (
    <div className="account-security-container">
      <h3>Change Password</h3>
      <input placeholder="Current Password" />
      <input placeholder="New Password" />
      <input placeholder="Confirm New Password" />
    </div>
  );
};

export default AccountSecurity;
