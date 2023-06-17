import {
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React from "react";
import { ListProps } from "@/types/common";
import { convertLines } from "@/helpers/functions";


const RecipeList: React.FC<ListProps> = ({
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
              <ListItemText primary={item.title} />
            )}
            <Box>
              <Tooltip
                title={convertLines(item.recipe)}
                placement="right"
                arrow
              >
                <IconButton>
                  <RemoveRedEyeIcon sx={{ color: "red" }} />
                </IconButton>
              </Tooltip>
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

export default RecipeList;
