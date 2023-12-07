import Home from "./components/Homepage/Home";
import { Hero } from "./components/HeroFolder/Hero";
import { SubHero } from "./components/SubHero/SubHero";
// import {library} from "@fortawesome/fontawesome-svg-core"
// import {faw} from "@fortawesome/fontawesome-svg-core"
// library.add(faBars)

function App() {
  return (
    <div>
      <Home />
      <Hero />
      <SubHero />
    </div>
  );
}

export default App;
