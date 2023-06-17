import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import FullScreen from "@/components/box/FullScreen";
import AppMenu from "@/components/menu/AppMenu";
import { fetchData, fetchDataWithPayload } from "@/helpers/functions";
import { SV_CATEGORIES, SV_FOODS_CATEGORY } from "@/constants/endpoints";
import { useGlobalContext } from "@/helpers/contexts/NotificationContext";
import FoodBox from "@/components/box/FoodBox";

const MyComponent: React.FC = () => {
  const [data, setData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const { message } = useGlobalContext();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as number;
    setSelectedCategory(selectedValue);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData(SV_CATEGORIES);
        setData(response.data);
      } catch (error) {
        console.log("error my component", error);
      }
    };

    getData();
  }, [message]);

  useEffect(() => {
    const fetchFoodsByCategory = async () => {
      try {
        const response = await fetchDataWithPayload(
          SV_FOODS_CATEGORY,
          selectedCategory
        );

        setFoodData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedCategory || message) {
      fetchFoodsByCategory();
    }
  }, [selectedCategory, message]);

  const filteredFoodData = foodData.filter((food) =>
    food.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <AppMenu />
      <FullScreen>
        <Box
          sx={{
            justifyContent: "center",
            padding: "10px",
            width: "100%",
            height: "100vh",
            border: "5px solid #CFCFCF",
          }}
        >
          <Box
            boxShadow={12}
            p={3}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextField
              id="search"
              label="Search"
              variant="outlined"
              onChange={handleSearch}
              sx={{ width: "80%" }}
            />
            <FormControl sx={{ m: 1, width: "80%" }}>
              <InputLabel id="dropdown-label">Categories</InputLabel>
              <Select
                sx={{ width: "100%" }}
                labelId="dropdown-label"
                id="dropdown"
                value={selectedCategory}
                onChange={handleChange}
              >
                {data.length > 0 &&
                  data.map((val, idx) => (
                    <MenuItem key={"ctr-" + val?.id} value={val?.id}>
                      {val?.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flex: "1 0 calc(25% - 10px)",
              flexWrap: "wrap",
              marginTop: "10px",
              overflowY: "auto",
              maxHeight: "calc(100vh - 200px)",
            }}
          >
            {filteredFoodData.length > 0 ? (
              filteredFoodData.map((val, idx) => (
                <FoodBox key={val?.id} value={val} />
              ))
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  textAlign: "center",
                  marginTop: '10px', 
                  padding: '5px',                  
                  border: "5px solid grey"
                }}
              >
                {selectedCategory === 0 ? "" : "No results found"}
              </Box>
            )}
          </Box>
        </Box>
      </FullScreen>
    </>
  );
};

export default MyComponent;
