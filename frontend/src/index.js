import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from "./Screens/Login";
import { RegistryStudent } from "./Screens/RegistryStudent";
import { RegistryTeacher } from "./Screens/RegistryTeacher";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registryTeacher" element={<RegistryTeacher />} />
      <Route path="/registryStudent" element={<RegistryStudent />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);