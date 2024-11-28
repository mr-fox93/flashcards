import React from "react";
import styles from "./CategoryBtn.module.scss";

interface CategoryBtnProps {
  children: React.ReactNode;
  onClick: () => Promise<void>;
}

const CategoryBtn: React.FC<CategoryBtnProps> = ({ children, onClick }) => {
  return (
    <button className={styles.main} onClick={onClick}>
      {children}
    </button>
  );
};

export default CategoryBtn;
