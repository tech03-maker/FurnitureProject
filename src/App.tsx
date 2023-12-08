/* eslint-disable @typescript-eslint/no-unused-vars */
import Home from "./components/Homepage/Home";
import { Hero } from "./components/HeroFolder/Hero";
import { Tables } from "./components/Tables/Tables";
import { Chair } from "./components/Chair/Chair";
import { Dining } from "./components/Dining/Dining";
import { Routes, Route } from "react-router-dom";
// import {library} from "@fortawesome/fontawesome-svg-core"
// import {faw} from "@fortawesome/fontawesome-svg-core"
// library.add(faBars)

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/chair" element={<Chair />} />
        <Route path="/dining" element={<Dining />} />
      </Routes>

      {/* <Home /> */}
      <Hero />
      <Tables />
      <Chair />
      <Dining />
    </div>
  );
}

export default App;
