import { Category } from "@/api/category/types";

interface MaterialList {
  fieldId: string;
  name: string;
  quantity: string;
}

interface Step {
  fieldId: string;
  title?: string;
  text: string;
  thumbnail?: Thumbnail;
}

interface Thumbnail {
  url: string;
  height: number;
  width: number;
}

export type Recipe = {
  title?: string;
  tagalog?: string;
  category?: Category;
  time?: string;
  level?: string[];
  overview?: string;
  introduction?: string;
  serving?: string;
  materialList?: MaterialList[];
  point?: string;
  step?: Step[];
};
