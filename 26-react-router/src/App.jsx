import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Courses from "./components/Courses";
import SingleCourse from "./components/SingleCourse";
import "./App.css";

function App() {
   return (
      <BrowserRouter>
         <>
            <header className="header">
               <Menu />
            </header>

            <main className="main">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="contacts" element={<Contact />} />
                  <Route path="courses">
                     <Route index element={<Courses />} />
                     <Route path=":courseSlug" element={<SingleCourse />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </main>
         </>
      </BrowserRouter>
   );
}

export default App;
