import React from "react";
import "./styles.css";

const QuizList = ({ categories, onCategoryClick }) => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <button key={index} onClick={() => onCategoryClick(category)}>
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default QuizList;
