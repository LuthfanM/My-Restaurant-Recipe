import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import {
  deleteData,
  determiner,
  editData,
  fetchData,
} from "@/helpers/functions";
import { useGlobalContext } from "@/helpers/contexts/NotificationContext";
import { CategoryList, RecipeList } from "./list";

const CurrentContent = ({ item }: { item: string }) => {
  const { message } = useGlobalContext();
  const [data, setData] = useState([]);
  const [tempText, setTempText] = useState("");
  const [editMode, setEditMode] = useState(null);

  const handleEdit = async (id: number) => {
    if (editMode === id) {
      setEditMode(null);
      try {
        let payload = data.find((item) => item.id === id);
        payload = {
          ...payload,
          name: tempText,
        };
        await editData(determiner(item), id, payload);
        loadData();
      } catch (error) {
        console.error("Error Current Edit", error);
      }
    } else {
      setEditMode(id);
      setTempText(data.find((item) => item.id === id)?.name || "");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteData(determiner(item), id);
      loadData();
    } catch (error) {
      console.error("Error Current delete", error);
    }
  };

  const loadData = async () => {
    try {
      const response = await fetchData(determiner(item));
      const sortedData = response.data.sort((a, b) => a.id - b.id);
      setData(sortedData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const listPicker = () => {
    switch (item) {
      case "categories":
        return (
          <CategoryList
            data={data}
            editMode={editMode}
            tempText={tempText}
            handleTempTf={handleTempTf}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        );
      case "foods":
        return (
          <CategoryList
            data={data}
            editMode={editMode}
            tempText={tempText}
            handleTempTf={handleTempTf}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        );
      case "recipes":
        return (
          <RecipeList
            data={data}
            editMode={editMode}
            tempText={tempText}
            handleTempTf={handleTempTf}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        );
      case "abouts":
        return "";
      default:
        return "";
    }
  };

  useEffect(() => {
    loadData();
  }, [item, message]);

  console.log("data apa dah", data);

  const handleTempTf = (event) => {
    setTempText(event.target.value);
  };

  return (
    <>
      <Typography
        variant="h5"
        sx={{ right: "auto", color: "black", padding: 1 }}
      >
        Current Data : {data.length} records
      </Typography>
      {listPicker()}
    </>
  );
};

export default CurrentContent;
