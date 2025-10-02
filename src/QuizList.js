import React from "react";
import "./styles.css";

// Компонент принимает 2 пропса: массив категорий тестов и ф-ю обработки клика по категории. Отображает список кнопок, каждая из которых предстпвляет категорию теста. По клику на кнопку вызывается ф-я onCategoryClick, передавая ей выбранную категорию.

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
