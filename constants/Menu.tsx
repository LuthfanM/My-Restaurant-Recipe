import AddHomeIcon from '@mui/icons-material/AddHome';
import InfoIcon from '@mui/icons-material/Info';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { ReactElement } from 'react';
import { MenuType } from '@/types/common';

export interface MenuItem {
  key: string | MenuType;
  icon: ReactElement;
  name: string;
}

export const menuItems:MenuItem[] = [
    { key: 'categories', icon: <AddHomeIcon />, name: 'Add Categories' },    
    { key: 'foods', icon: <MenuBookIcon />, name: 'Add Foods' },  
    { key: 'recipes', icon: <FoodBankIcon />, name: 'Add Recipes' },    
    { key: 'abouts', icon: <InfoIcon />, name: 'About' },
  ];

