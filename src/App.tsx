import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Skills from "./pages/skills/Skills";
import Experience from "./pages/experience/Experience";
import SignInForm from "./components/signInForm/SignInForm";
import SignUpForm from "./components/signUpForm/SignUpForm";

import LayOut from "./layOut/LayOut";

import "./App.css";
import Contact from "./pages/contact/Contact";
import ResumeBuilder from "./pages/resumeBuilder/ResumeBuilder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<Skills />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<ResumeBuilder />} />
          <Route path="signIn" element={<SignInForm />} />
          <Route path="signUp" element={<SignUpForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
