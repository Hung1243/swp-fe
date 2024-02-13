import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashBoard from "./components/dashboard/DashBoard";
import Courses from "./pages/TeacherPage/Courses";
import AddNewCourse from "./pages/TeacherPage/AddNewCourse";
import PrivateRoute from "./components/private-route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="dashboard">
          <Route path="teacher" element={<PrivateRoute role={"TEACHER"} />}>
            <Route path="" element={<DashBoard role={"TEACHER"} />}>
              <Route path="courses" element={<Courses />}></Route>
              <Route path="add-new" element={<AddNewCourse />}></Route>
            </Route>
          </Route>
          <Route path="admin" element={<PrivateRoute role={"ADMIN"} />}>
            <Route path="" element={<DashBoard role={"ADMIN"} />}>
              {/* <Route path="courses" element={<Courses />}></Route>
              <Route path="add-new" element={<AddNewCourse />}></Route> */}
            </Route>
          </Route>
          {/* <Route path="admin" element={<DashBoard role={"ADMIN"} />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
