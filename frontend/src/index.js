import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from "./Screens/Login";
import { RegistryStudent } from "./Screens/RegistryStudent";
import { RegistryTeacher } from "./Screens/RegistryTeacher";


import { Publications } from "./Screens/teacherScreens/Publications.js";
import { Activities } from "./Screens/teacherScreens/Activities.js";
import { Exams } from "./Screens/teacherScreens/Exams.js";
import { Students } from "./Screens/teacherScreens/Students.js";
import { App } from "./App";
import { AdminScreen } from "./Screens/AdminScreens/AdminScreen";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registryTeacher" element={<RegistryTeacher />} />
      <Route path="/registryStudent" element={<RegistryStudent />} />
      <Route path="/teacherPublications"  element={<Publications />} />
      <Route path="/teacherActivities"  element={<Activities />} />
      <Route path="/teacherExams"  element={<Exams/>} />
      <Route path="/teacherStudents"  element={<Students />} />
      <Route path="/admin"  element={<AdminScreen />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);