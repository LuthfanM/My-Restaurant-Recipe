import { List, ListItem, ListItemText, Box, Button } from "@mui/material";
import React from "react";

const CategoryList = ({
  data,
  editMode,
  tempText,
  handleTempTf,
  handleEdit,
  handleDelete,
}) => {
  return (
    <List
      sx={{
        border: "1px solid green",
        flexGrow: 1,
        height: "70%",
        overflow: "scroll",
      }}
    >
      {data.length > 0 ? (
        data.map((item) => (
          <ListItem
            key={item.id}
            sx={{
              backgroundColor: editMode === item.id ? "#7d7878" : "inherit",
            }}
          >
            {editMode === item.id ? (
              <input type="text" value={tempText} onChange={handleTempTf} />
            ) : (
              <ListItemText primary={item.name} />
            )}
            <Box>
              <Button
                sx={{
                  color: editMode === item.id ? "#ffffff" : "inherit",
                }}
                onClick={() => handleEdit(item.id)}
              >
                {editMode === item.id ? "Save" : "Edit"}
              </Button>
              <Button
                sx={{
                  color: editMode === item.id ? "#ffffff" : "inherit",
                }}
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Button>
            </Box>
          </ListItem>
        ))
      ) : (
        <div style={{ textAlign: "center" }}>Empty Data</div>
      )}
    </List>
  );
};

export default CategoryList;
