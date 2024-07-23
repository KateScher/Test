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
