import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";

import ButtonGradient from "./assets/svg/ButtonGradient";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import ReactLenis from "lenis/dist/lenis-react.js";

const App = function () {
  return (
    <ReactLenis root>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </ReactLenis>
  );
};

export default App;
