import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { SV_CATEGORIES } from "@/constants/endpoints";
import SubmitButton from "@/components/buttons/SubmitButton";

const CategoryContent = ({ title }: { title: string; handleClose: any }) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

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
      <Typography variant="h5" sx={{ right: "auto", color: "black" }}>
        {title.toLocaleUpperCase()}
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "10px",
          width: "300px",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          label={`Enter new ${title}`}
          variant="outlined"
          fullWidth
          required
          value={name}
          onChange={handleNameChange}
        />
        <SubmitButton title="Submit Categories" uri={SV_CATEGORIES} payload={{ name: name }} />
      </Box>
    </Box>
  );
};

export default CategoryContent;
