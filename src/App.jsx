import "./App.css";
import 'animate.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/LandingPage/Landing";
<<<<<<< HEAD
import Signup from './components/Authentication/Signup';
=======
import JoinPage from "./pages/Join";
import QuizPage from "./pages/QuizPage";
import AdminPage from "./pages/QuizCreate";
>>>>>>> 714cd355a2349b3673ae02093adea56364207ba7

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
<<<<<<< HEAD
        <Route path="/Signup" element={<Signup />} />
=======
        <Route path="/join" element={<JoinPage />} />
        <Route path="/quizpage" element={<QuizPage />} />
        <Route path="/createQuiz" element={<AdminPage />} />
>>>>>>> 714cd355a2349b3673ae02093adea56364207ba7
      </Routes>
    </BrowserRouter>
  );
}

export default App;