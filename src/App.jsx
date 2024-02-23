import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashBoard from "./components/dashboard/DashBoard";
import Courses from "./pages/TeacherPage/Courses";
import AddNewCourse from "./pages/TeacherPage/AddNewCourse";
import PrivateRoute from "./components/private-route";
import HomeTemplate from "./homeTemplate/HomeTemplate";
import HomePage from "./pages/homePage/HomePage";
import ViewCourses from "./pages/homePage/ViewCourses";
// import ViewCourseDetail from "./pages/homePage/ViewCourseDetail";
import Payment from "./pages/homePage/Payment";
import CourseDetail from "./pages/homePage/CourseDetail";
import MyCourse from "./pages/homePage/MyCourse";
import MyCourseDetail from "./pages/homePage/MyCourseDetail";

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
              {/* <Route path="add-new" element={<AddNewCourse />}></Route> */}
            </Route>
          </Route>
          <Route path="admin" element={<PrivateRoute role={"ADMIN"} />}>
            <Route path="" element={<DashBoard role={"ADMIN"} />}></Route>
          </Route>
          <Route path="admin" element={<DashBoard role={"ADMIN"} />}></Route>
        </Route>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />}></Route>
          <Route path="course">
            <Route path="" element={<ViewCourses />}></Route>
            <Route path=":id" element={<CourseDetail />}></Route>
          </Route>
          <Route path="enrolled">
            <Route path="" element={<MyCourse />}></Route>
            <Route path=":id" element={<MyCourseDetail />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
