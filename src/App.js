
import { HashRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import FormulaStudent from "./components/FormulaStudent";
import JoinTheTeam from "./components/JoinTheTeam";
import BecomePartner from "./components/BecomePartner";
import Ph24 from "./components/ph24";
import Ph25 from "./components/ph25";
import Ph23 from "./components/ph23";
import Ph08 from "./components/ph08";
import Ph07 from "./components/ph07";
import Ph09 from "./components/ph09";



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fs" element={<FormulaStudent />} />
        <Route path="/joinTeam" element={<JoinTheTeam />} />
        <Route path="/becomePartner" element={<BecomePartner />} />
        <Route path="/team/ph24" element={<Ph24 />} />
        <Route path="/team/ph25" element={<Ph25 />} />
        <Route path="/team/ph23" element={<Ph23 />} />
        <Route path="/team/ph09" element={<Ph09 />} />
        <Route path="/team/ph08" element={<Ph08 />} />
        <Route path="/team/ph07" element={<Ph07 />} />
      </Routes>
    </HashRouter>
   
  );
}

export default App;
