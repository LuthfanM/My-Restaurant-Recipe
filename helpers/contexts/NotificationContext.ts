import { createContext, useContext } from "react";

export interface NotificationContextData {
  message: string;
  showMessage: (message: string) => void;
}

export const NotificationContext = createContext<NotificationContextData>({
    message: "",
    showMessage: () => {},
  });

export const useGlobalContext = () => useContext(NotificationContext)
