import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Box,
  Icon,
} from "@mui/material";
import { menuItems } from "@/constants/Menu";
import FormModal from "@/components/modal/FormModal";

const AppMenu = () => {
  const [modalData, setModalData] = useState({
    open: false,
    selectedItem: null,
  });

  const handleIconClick = (item: string) => {
    setModalData({ open: true, selectedItem: item });
  };

  const handleCloseModal = () => {
    setModalData({ open: false, selectedItem: null });
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant="h5" sx={{ right: "auto", color: "black" }}>
            My Restaurant
          </Typography>
          <Box sx={{ marginLeft: "auto" }}>
            {menuItems.map((item) => (
              <Tooltip key={item.key} title={item.name} placement="bottom">
                <IconButton
                  onClick={() => handleIconClick(item.key)}
                  sx={{
                    flexDirection: "column",
                    "&:hover .MuiIconButton-label": {
                      display: "block",
                    },
                  }}
                >
                  <Icon>{item.icon}</Icon>
                  <Typography variant="caption">{item.name}</Typography>
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <FormModal
        open={modalData.open}
        handleClose={handleCloseModal}
        selectedItem={modalData.selectedItem}
      />
    </div>
  );
};

export default AppMenu;
