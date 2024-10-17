import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";

import Navup from "./Components/Nav-up/Navup";
 import Infoanalyze from "./Components/Infoanalyze/Infoanalyze";
import Contactinfocard from "./Components/Contact-infocard/Contactinfocard";
import Corechallenges from "./Components/Corechallengessection/Corechallenges";
import Projectsspanning from "./Components/Projects Spanning/Projectsspanning";
import Articles from "./Components/Articles/Articles";
import Skycards from "./Components/Skycards/Skycards";
import Eclipse from "./Components/Ecllipse/Eclipse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navup />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/nav" element={<Eclipse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
