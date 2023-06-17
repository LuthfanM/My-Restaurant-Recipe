import { ChangeEvent } from "react";

export type MenuType = "categories" | "foods" | "recipes" | "abouts";

export interface Recipes {
  id: string;
  title: string;
  recipe: string;
}

export interface Foods {
  id: string;
  title: string;
  recipe: string;
}

export interface Categories {
  id: string;
  name: string;
}

export type ListProps = {
  data: Recipes[] | Categories[] | Foods[]; 
  editMode: string;
  tempText: string;
  handleTempTf: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
};
