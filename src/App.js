// import React, { useState } from "react";
// import { quizzes } from "./data";
// import Quiz from "./Quiz";
// import QuizList from "./QuizList";
// // Основной файл приложения, который управляет состоянием и отображает компоненты.
// const App = () => {
//   const [currentQuizIndex, setCurrentQuizIndex] = useState(null);
//   const [currentQuiz, setCurrentQuiz] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [userAnswers, setUserAnswers] = useState([]);

//   const handleAnswer = (answer) => {
//     const question = quizzes[currentQuizIndex].questions[currentQuiz];
//     const newUserAnswers = [
//       ...userAnswers,
//       {
//         question: question.question,
//         answer: question[answer],
//         correct: question[question.correct],
//       },
//     ];
//     setUserAnswers(newUserAnswers);

//     if (answer === question.correct) {
//       setScore(score + 1);
//     }
//     if (currentQuiz < quizzes[currentQuizIndex].questions.length - 1) {
//       setCurrentQuiz(currentQuiz + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const selectQuiz = (index) => {
//     setCurrentQuizIndex(index);
//     setCurrentQuiz(0);
//     setScore(0);
//     setShowResult(false);
//     setUserAnswers([]);
//   };

//   const backToMain = () => {
//     setCurrentQuizIndex(null);
//   };

//   return (
//     <div>
//       <h1>Тесты</h1>
//       {currentQuizIndex === null ? (
//         <QuizList quizzes={quizzes} selectQuiz={selectQuiz} />
//       ) : (
//         <Quiz
//           quiz={quizzes[currentQuizIndex].questions}
//           currentQuiz={currentQuiz}
//           handleAnswer={handleAnswer}
//           showResult={showResult}
//           score={score}
//           backToMain={backToMain}
//           userAnswers={userAnswers}
//         />
//       )}
//     </div>
//   );
// };

// export default App;

//////////////////////////////////

// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Navigate,
// } from "react-router-dom";
// import Quiz from "./Quiz";
// import "./styles.css";
// // import Header from "./Header";
// import News from "./components/News";
// import Contacts from "./components/Contacts";
// import Backs from "./components/Backs";

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Backs />
//         <div className="content">
//           <ul className="allList">
//             <li>
//               <Link className="link" to="/">
//                 Главная
//               </Link>
//             </li>
//             <li>
//               <Link className="link" to="/news">
//                 Новости
//               </Link>
//             </li>
//             <li>
//               <Link className="link" to="/contacts">
//                 Контакты
//               </Link>
//             </li>
//           </ul>

//           <Routes>
//             <Route path="/" element={<Quiz />} />
//             <Route path="/news" element={<News />} />
//             <Route path="/contacts" element={<Contacts />} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;
// ReactDOM.render(<App />, document.getElementById("root"));

// Этот файл App.js импортирует компонент Quiz и стили из styles.css, а затем рендерит компонент Quiz внутри элемента с id root!
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Quiz from "./Quiz";
import "./styles.css";
import News from "./components/News";
import Contacts from "./components/Contacts";
import Backs from "./components/Backs";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  return (
    <div className="app">
      <Backs />
      <div className="content">
        <ul className="allList">
          <li>
            <Link className="link" to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className="link" to="/news">
              Новости
            </Link>
          </li>
          <li>
            <Link className="link" to="/contacts">
              Контакты
            </Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
