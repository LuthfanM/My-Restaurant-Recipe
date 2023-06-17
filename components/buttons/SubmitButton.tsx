import { useGlobalContext } from "@/helpers/contexts/NotificationContext";
import { postData } from "@/helpers/functions";
import { Button } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const SubmitButton = ({
  title,
  uri,
  payload,
  additionalSubmitFunc,
}: {
  title: string;
  uri: string;
  payload: Record<string, string>;
  additionalSubmitFunc?: () => void;
}) => {
  const uid = uuidv4();
  const { showMessage } = useGlobalContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      toast
        .promise(postData(uri, payload), {
          loading: "Saving data...",
          success: "Data Created Successfully",
          error: (error) => {
            console.error("Error:", error);
            showMessage("dont");
            return "An error occurred";
          },
        })
        .then(() => {
          // handleClose();
          //do nothing or clear form
          showMessage(uid);
          if (additionalSubmitFunc) additionalSubmitFunc();
        });
    } catch (error) {
      console.error("Error:", error);
      showMessage("dont");
    }
  };

  return <Button onClick={handleSubmit}>{title}</Button>;
};

export default SubmitButton;
