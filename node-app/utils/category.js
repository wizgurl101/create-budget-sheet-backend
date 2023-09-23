import {
  CATEGORIES,
  CATEGORY_1,
  CATEGORY_1_KEYWORDS,
  CATEGORY_2,
  CATEGORY_2_KEYWORDS,
  CATEGORY_3,
  CATEGORY_3_KEYWORDS,
  CATEGORY_4,
  CATEGORY_4_KEYWORDS,
} from "../constants/category.constants.js";
import { createCategory } from "../model/category.js";

export const generateCategoryList = () => {
  let list = [];

  CATEGORIES.forEach((c) => {
    switch (c) {
      case CATEGORY_1:
        list.push(createCategory(c, CATEGORY_1_KEYWORDS, []));
        break;
      case CATEGORY_2:
        list.push(createCategory(c, CATEGORY_2_KEYWORDS, []));
        break;
      case CATEGORY_3:
        list.push(createCategory(c, CATEGORY_3_KEYWORDS, []));
        break;
      case CATEGORY_4:
        list.push(createCategory(c, CATEGORY_4_KEYWORDS, []));
        break;
      default:
        console.log("Invalid category");
    }
  });

  return list;
};
