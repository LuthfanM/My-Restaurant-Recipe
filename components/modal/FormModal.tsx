import React from "react";
import { Box, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CategoryContent from "./type/CategoryContent";
import MainContent from "./type/MainContent";
import FoodContent from "./type/FoodContent";
import RecipeContent from "./type/RecipeContent";
import AboutContent from "./type/AboutContent";
import CurrentContent from "./current/CurrentContent";

const FormModal: React.FC = ({
  open,
  handleClose,
  selectedItem,
}: {
  open: any;
  handleClose;
  selectedItem: string;
}) => {
  const modalContent = () => {
    switch (selectedItem) {
      case "categories":
        return (
          <CategoryContent title={selectedItem} handleClose={handleClose} />
        );
      case "foods":
        return <FoodContent title={selectedItem} handleClose={handleClose} />;
      case "recipes":
        return <RecipeContent title={selectedItem} handleClose={handleClose} />;
      case "abouts":
        return <AboutContent />;
      default:
        return <div>No Category</div>;
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          outline: "none",
          width: "80%",
          height: "80%",
          borderRadius: "4px",
          position: "relative",
          display: "flex",
          overflow: 'auto'
        }}
      >
        {selectedItem != "abouts" && (
          <Box
            sx={{
              flex: 1,
              borderRight: "5px solid black",
              padding: "16px",
            }}
          >
            <CurrentContent item={selectedItem} />
          </Box>
        )}
        <Box
          sx={{
            flex: 1,
            padding: "16px",
          }}
        >
          <MainContent>{modalContent()}</MainContent>
        </Box>
        <IconButton
          placeholder="close modal"
          onClick={handleClose}
          sx={{
            color: "red",
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default FormModal;
