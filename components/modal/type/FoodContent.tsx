import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import { fetchData } from "@/helpers/functions";
import { SV_CATEGORIES, SV_FOODS, SV_RECIPES } from "@/constants/endpoints";
import SubmitButton from "@/components/buttons/SubmitButton";

const FoodContent = ({
  title,
  handleClose,
}: {
  title: string;
  handleClose: any;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    recipe: "",
  });

  const [ddCategory, setddCategory] = useState([]);
  const [ddRecipe, setddRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  const additionalSubmitFunc = () => {
    setFormData({ name: "", category: "", recipe: "" });
    setddCategory([]);
    setddRecipe([]);
  };

  const handleNameChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      name: event.target.value,
    }));
  };

  const handleddCategory = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      category: event.target.value,
    }));
  };

  const handleddRecipe = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      recipe: event.target.value,
    }));
  };

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await Promise.all([
          fetchData(SV_CATEGORIES),
          fetchData(SV_RECIPES),
        ]);

        setddCategory(response[0].data);
        setddRecipe(response[1].data);
        console.log("res", response[0].data);
        console.log("res1", response[1].data);
        setLoading(false);
      } catch (error) {
        console.log("error in food", error);
      }
    };

    fetchAll();
  }, []);

  return (
    <Box
      sx={{                
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Typography variant="h5" sx={{ color: "black" }}>
        {title.toLocaleUpperCase()}
      </Typography>
      {loading ? (
        <CircularProgress style={{ alignSelf: "center", marginTop: "10px" }} />
      ) : (
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
            label="Name"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={handleNameChange}
          />

          <FormControl>
            <InputLabel>Pick Category</InputLabel>
            <Select value={formData.category} onChange={handleddCategory}>
              {ddCategory.length > 0 &&
                ddCategory.map((val, idx) => {
                  return (
                    <MenuItem key={"ctr-" + val?.id} value={val?.id}>
                      {val?.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>Pick Recipe</InputLabel>
            <Select value={formData.recipe} onChange={handleddRecipe}>
              {ddRecipe.length > 0 &&
                ddRecipe.map((val, idx) => {
                  return (
                    <MenuItem key={"ctr-" + val?.id} value={val?.id}>
                      {val?.title}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>

          <SubmitButton
            title="Submit Food"
            uri={SV_FOODS}
            payload={{
              name: formData.name,
              category_id: formData.category,
              recipe_id: formData.recipe,
            }}
            additionalSubmitFunc={additionalSubmitFunc}
          />
        </Box>
      )}
    </Box>
  );
};

export default FoodContent;
