import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../../store/notification";
import "./styles.css";

const Notification = () => {
  const { notification } = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  return (
    <div
      className={notification.show ? "notification-show" : "notification-hide"}
    >
      <span>{notification.message}</span>
      <img
        src="/close.svg"
        alt="close"
        onClick={() => dispatch(setNotification({ show: false, message: "" }))}
      />
    </div>
  );
};

export default Notification;
