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

render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registryTeacher" element={<RegistryTeacher />} />
      <Route path="/registryStudent" element={<RegistryStudent />} />
      <Route path="/teacherPublications"  element={<Publications />} />
      <Route path="/teacherActivities"  element={<Activities />} />
      <Route path="/teacherExams"  element={<Exams/>} />
      <Route path="/teacherStudents"  element={<Students />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);













/*function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/about-us/aim" exact component={OurAim} />
        <Route path="/about-us/vision" exact component={OurVision} />
        <Route path="/services" exact component={Services} />
        <Route path="/services/services1" exact component={ServicesOne} />
        <Route path="/services/services2" exact component={ServicesTwo} />
        <Route path="/services/services3" exact component={ServicesThree} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/events" exact component={Events} />
        <Route path="/events/events1" exact component={EventsOne} />
        <Route path="/events/events2" exact component={EventsTwo} />
        <Route path="/support" exact component={Support} />
      </Switch>
    </Router>
  );
}
  
export default App;*/