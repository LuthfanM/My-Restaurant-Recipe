import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { postData } from "@/helpers/functions";
import { SV_RECIPES } from "@/constants/endpoints";
import SubmitButton from "@/components/buttons/SubmitButton";

const RecipeContent = ({
  title,
  handleClose,
}: {
  title: string;
  handleClose: any;
}) => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [titleRecipe, setTitleRecipe] = useState("");

  const handleTitleRecipeChange = (event) => {
    setTitleRecipe(event.target.value);
  };

  const handleRecipeChange = (event) => {
    setText(event.target.value);
  };

  const handlePreview = (event) => {
    event.preventDefault();
    const lines = text.split("\n");

    const jsonObject = {};
    lines.forEach((line, index) => {
      jsonObject[index] = line.trim();
    });

    const jsonString = JSON.stringify(jsonObject);

    setResult(jsonString);
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
      <Typography variant="h5" sx={{ color: "black", marginBottom: "10px" }}>
        {title.toLocaleUpperCase()}
      </Typography>
      <form>
        <TextField
          label="Recipe Title"
          value={titleRecipe}
          onChange={handleTitleRecipeChange}
          fullWidth
          sx={{
            width: "100%",
            minWidth: "350px",
            marginBottom: "1rem",
            overflow: "scroll",
          }}
        />
        <TextField
          label="Enter text lines"
          multiline
          rows={4}
          value={text}
          onChange={handleRecipeChange}
          fullWidth
          required
          sx={{
            width: "100%",
            minWidth: "350px",
          }}
        />
        <Button onClick={handlePreview} color="primary">
          Preview Recipe
        </Button>
        {result && (
          <div>
            <Box
              sx={{
                width: "100%",
                marginTop: "1rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                maxHeight: "250px",
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <List sx={{ flexGrow: 1 }}>
                {Object.entries(JSON.parse(result)).map(([index, value]) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText primary={value} />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
            </Box>
            <SubmitButton
              title="Submit Recipe"
              uri={SV_RECIPES}
              payload={{
                title: titleRecipe,
                recipe: result,
              }}
            />
          </div>
        )}
      </form>
    </Box>
  );
};

export default RecipeContent;
