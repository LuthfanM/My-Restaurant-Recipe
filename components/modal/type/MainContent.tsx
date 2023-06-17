import { useGlobalContext } from "@/helpers/contexts/NotificationContext";
import { Box } from "@mui/material";
import React from "react";

const MainContent = ({ children }) => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContent;
