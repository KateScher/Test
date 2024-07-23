// import React from "react";
// // Компонент, который отображает вопросы и результаты.
// const Quiz = ({
//   quiz,
//   currentQuiz,
//   handleAnswer,
//   showResult,
//   score,
//   backToMain,
//   userAnswers,
// }) => {
//   if (showResult) {
//     return (
//       <div>
//         <h2>Результаты</h2>
//         <p>
//           Ваш счет: {score} из {quiz.length}
//         </p>
//         <ul>
//           {userAnswers.map((answer, index) => (
//             <li key={index}>
//               <p>
//                 <strong>Вопрос:</strong> {answer.question}
//               </p>
//               <p>
//                 <strong>Ваш ответ:</strong> {answer.answer}
//               </p>
//               <p>
//                 <strong>Правильный ответ:</strong> {answer.correct}
//               </p>
//             </li>
//           ))}
//         </ul>
//         <button onClick={backToMain}>Вернуться к списку тестов</button>
//       </div>
//     );
//   }

//   const question = quiz[currentQuiz];
//   return (
//     <div>
//       <h2>{question.question}</h2>
//       <button onClick={() => handleAnswer("a")}>{question.a}</button>
//       <button onClick={() => handleAnswer("b")}>{question.b}</button>
//       <button onClick={() => handleAnswer("c")}>{question.c}</button>
//       <button onClick={() => handleAnswer("d")}>{question.d}</button>
//     </div>
//   );
// };

// export default Quiz;

////// следующий вариант

// import React, { useState } from "react";
// import quizData from "./data";
// import QuizList from "./QuizList";

// const Quiz = () => {
//   const [currentCategory, setCurrentCategory] = useState(null);
//   const [currentSubcategory, setCurrentSubcategory] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);
//   const [userAnswers, setUserAnswers] = useState([]);

//   const handleAnswerOptionClick = (isCorrect, questionText) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }
//     setUserAnswers([...userAnswers, { questionText, isCorrect }]);
//     const nextQuestion = currentQuestionIndex + 1;
//     if (nextQuestion < currentSubcategory.questions.length) {
//       setCurrentQuestionIndex(nextQuestion);
//     } else {
//       setShowResults(true);
//     }
//   };

//   const handleCategoryClick = (category) => {
//     setCurrentCategory(category);
//     setCurrentSubcategory(null);
//     setCurrentQuestionIndex(0);
//     setScore(0);
//     setShowResults(false);
//     setUserAnswers([]);
//   };

//   const handleSubcategoryClick = (subcategory) => {
//     setCurrentSubcategory(subcategory);
//     setCurrentQuestionIndex(0);
//     setScore(0);
//     setShowResults(false);
//     setUserAnswers([]);
//   };

//   return (
//     <div className="quiz">
//       <h1 className="mainTitle">Проверь себя!</h1>
//       {!currentCategory ? (
//         <QuizList categories={quizData} onCategoryClick={handleCategoryClick} />
//       ) : !currentSubcategory ? (
//         <div className="subcategory-list">
//           {currentCategory.subcategories.map((subcategory, index) => (
//             <button
//               key={index}
//               onClick={() => handleSubcategoryClick(subcategory)}
//             >
//               {subcategory.title}
//             </button>
//           ))}
//         </div>
//       ) : showResults ? (
//         <div className="results">
//           <h2 className="yourResult">
//             Ваш результат: {score} правильных ответов из{" "}
//             {currentSubcategory.questions.length}
//           </h2>
//           <ul>
//             {userAnswers.map((answer, index) => (
//               <li
//                 key={index}
//                 style={{ color: answer.isCorrect ? "green" : "red" }}
//               >
//                 {answer.questionText}
//               </li>
//             ))}
//           </ul>
//           <button onClick={() => handleCategoryClick(null)}>
//             Выбрать тест для прохождения
//           </button>
//         </div>
//       ) : (
//         <div className="question-section">
//           <h2>{currentSubcategory.title}</h2>
//           <div className="question-text">
//             {currentSubcategory.questions[currentQuestionIndex].questionText}
//           </div>
//           <div className="answer-section">
//             {currentSubcategory.questions[
//               currentQuestionIndex
//             ].answerOptions.map((answerOption, index) => (
//               <button
//                 key={index}
//                 onClick={() =>
//                   handleAnswerOptionClick(
//                     answerOption.isCorrect,
//                     currentSubcategory.questions[currentQuestionIndex]
//                       .questionText
//                   )
//                 }
//               >
//                 {answerOption.answerText}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Quiz;
import React, { useState } from "react";
import quizData from "./data";
import QuizList from "./QuizList";

const Quiz = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSubcategory, setCurrentSubcategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerOptionClick = (isCorrect, questionText) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setUserAnswers([...userAnswers, { questionText, isCorrect }]);
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < currentSubcategory.questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    setCurrentSubcategory(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setUserAnswers([]);
  };

  const handleSubcategoryClick = (subcategory) => {
    setCurrentSubcategory(subcategory);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setUserAnswers([]);
  };

  return (
    <div className="quiz">
      {!currentCategory && !currentSubcategory && (
        <h1 className="mainTitle">Проверь себя!</h1>
      )}
      {!currentCategory ? (
        <QuizList categories={quizData} onCategoryClick={handleCategoryClick} />
      ) : !currentSubcategory ? (
        <div className="subcategory-list">
          {currentCategory.subcategories.map((subcategory, index) => (
            <button
              key={index}
              onClick={() => handleSubcategoryClick(subcategory)}
            >
              {subcategory.title}
            </button>
          ))}
        </div>
      ) : showResults ? (
        <div className="results">
          <h2 className="yourResult">
            Ваш результат: {score} правильных ответов из{" "}
            {currentSubcategory.questions.length}
          </h2>
          <ul>
            {userAnswers.map((answer, index) => (
              <li
                key={index}
                style={{ color: answer.isCorrect ? "green" : "red" }}
              >
                {answer.questionText}
              </li>
            ))}
          </ul>
          <button onClick={() => handleCategoryClick(null)}>
            Выбрать тест для прохождения
          </button>
        </div>
      ) : (
        <div className="question-section">
          <h2>{currentSubcategory.title}</h2>
          <div className="question-text">
            {currentSubcategory.questions[currentQuestionIndex].questionText}
          </div>
          <div className="answer-section">
            {currentSubcategory.questions[
              currentQuestionIndex
            ].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() =>
                  handleAnswerOptionClick(
                    answerOption.isCorrect,
                    currentSubcategory.questions[currentQuestionIndex]
                      .questionText
                  )
                }
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
