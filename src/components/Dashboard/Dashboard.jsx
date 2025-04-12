import React, { useContext } from "react";
import Sidebar from "../Common/Sidebar";
import { useState } from "react";
import QuizTypeModal from "./SelectQuizType";
import { DataProvider } from "../../App";
import MyLibrary from "./MyLibrary";
import Reports from "./Reports";
import QuizDashboard from "./QuizDashboard";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {page,setPage} = useContext(DataProvider)
  return (
    <div className="flex h-screen w-full">
      <Sidebar onCreateQuiz={setIsModalOpen} />
      <div className="ml-64 w-full">
        <div className="p-5">
          <QuizTypeModal isOpen={isModalOpen} onClose={setIsModalOpen} />
          {page === "dashboard" && <QuizDashboard />}
          {page == 'my-library' && <MyLibrary/>}
          {page == 'reports' && <Reports/>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
