import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const FullScreen: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        padding: "10px",
        margin: 0,
        flex: 1,
        display: "flex",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default FullScreen;
