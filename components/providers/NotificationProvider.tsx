import { NotificationContext, NotificationContextData } from "@/helpers/contexts/NotificationContext";
import React, { PropsWithChildren, useState } from "react";

const NotificationProvider: React.FC = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [message, setMessage] = useState("");

  const showMessage = (message: string) => {
    setMessage(message);
  };

  const contextValue: NotificationContextData = {
    message,
    showMessage,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
