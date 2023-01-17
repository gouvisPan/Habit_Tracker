import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import "./Notification.scss";

interface NotificationProps {
  message: string | null;
  type: string;
}

const Notification: React.FC<NotificationProps> = (props) => {
  return (
    <div className={`notification ${props.type}`}>
      <p>{props.message}</p>
      <BiErrorCircle className="message-icon" />
    </div>
  );
};

export default Notification;
