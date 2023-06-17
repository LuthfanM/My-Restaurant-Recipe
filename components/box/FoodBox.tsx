import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Modal,
  Fade,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { convertLines } from "@/helpers/functions";

type FillFoodBox = {
  id: number;
  name: string;
  category_id: number;
  recipe_id: number;
  category_name: string;
  recipe: string;
  created_at: string;
};
interface FoodBoxProps {
  key: number;
  value: FillFoodBox;
}

const FoodBox: React.FC<FoodBoxProps> = (Props: FoodBoxProps) => {
  const {
    id,
    name,
    category_id,
    recipe_id,
    category_name,
    recipe,
    created_at,
  } = Props.value;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        marginTop: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flex: "1 0 calc(25% - 10px)",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "10px", color: "red" }}>
        {name.toLocaleUpperCase()}
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
        {category_name}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton
          onClick={handleOpen}
          disableRipple
          sx={{ backgroundColor: "transparent" }}
        >
          <RestaurantIcon />
        </IconButton>
      </Box>
      <Box sx={{ marginTop: "auto" }}>
        <Typography variant="caption">Created At: {created_at}</Typography>
      </Box>

      {/* Small Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
          invisible: true,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "20px",
              width: "40%",
              height: "40%",
              maxWidth: "90%",
              margin: "0 auto",
              marginTop: "20vh",
              display: "flex",
              flexDirection: "column",
              outline: "none",
            }}
          >
            <Typography
              variant="h6"
              sx={{ marginBottom: "10px", color: "red" }}
            >
              {name.toLocaleUpperCase()}'s Recipe
            </Typography>
            {convertLines(recipe)}
            <Button onClick={handleClose} sx={{ marginTop: "auto" }}>
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default FoodBox;
