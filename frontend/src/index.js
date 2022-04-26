import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from "./Screens/Login";

/* Modulo Administrador */
import { RegistryStudent } from "./Screens/RegistryStudent";
import { UpdateStudent } from "./Screens/studentScreens/UpdateStudent";
import { DeleteStudent } from "./Screens/studentScreens/DeleteStudent";

import { RegistryTeacher } from "./Screens/RegistryTeacher";
import { UpdateTeacher } from "./Screens/teacherScreens/UpdateTeacher";
import { DeleteTeacher } from "./Screens/teacherScreens/DeleteTeacher";

/* Modulo Maestro */
import { Publications } from "./Screens/teacherScreens/Publications.js";
import { Activities } from "./Screens/teacherScreens/Activities.js";
import { Exams } from "./Screens/teacherScreens/Exams.js";
import { Students } from "./Screens/teacherScreens/Students.js";
import { App } from "./App";
import { AdminScreen } from "./Screens/AdminScreens/AdminScreen";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/"                     element={<App />} />
      <Route path="/login"                element={<Login />} />
      <Route path="/registryTeacher"      element={<RegistryTeacher />} />
      <Route path="/registryStudent"      element={<RegistryStudent />} />
      <Route path="/teacherPublications"  element={<Publications />} />
      <Route path="/teacherActivities"    element={<Activities />} />
      <Route path="/teacherExams"         element={<Exams/>} />
      <Route path="/teacherStudents"      element={<Students />} />
      <Route path="/admin"                element={<AdminScreen />} />
      
      <Route path="/updateTeacher"        element={<UpdateTeacher />} />
      <Route path="/deleteTeacher"        element={<DeleteTeacher />} />

      <Route path="/updateStudent"        element={<UpdateStudent />} />
      <Route path="/deleteStudent"        element={<DeleteStudent />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);