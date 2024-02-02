import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashBoard from "./components/dashboard/DashBoard";
import Courses from "./pages/TeacherPage/Courses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="dashboard">
          <Route path="teacher" element={<DashBoard role={"TEACHER"} />}>
            <Route path="courses" element={<Courses />}></Route>
          </Route>
          <Route path="admin" element={<DashBoard role={"ADMIN"} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
