import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>(["javascript"]);

  const onAddCategory = (newCategory: string) => {
    if (!categories.includes(newCategory)) {
      setCategories([newCategory, ...categories]);
    }
  };

  return (
    <div className="gifApp">
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
