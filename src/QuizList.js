// import React from "react";

// const QuizList = ({ quizzes, selectQuiz }) => {
//   return (
//     <div>
//       <h2>Выберите тест</h2>
//       <ul>
//         {quizzes.map((quiz, index) => (
//           <li key={index}>
//             <button onClick={() => selectQuiz(index)}>{quiz.title}</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default QuizList;
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
