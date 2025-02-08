import { useState } from "react";
import { SearchIcon } from "../assets/Search";
import styles from "./AddCategory.module.css";

interface AddCategoryProps {
  onNewCategory: (value: string) => void;
}

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue.length > 0) {
      onNewCategory(trimmedValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles.searchForm}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputChange}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchIcon}>
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};
