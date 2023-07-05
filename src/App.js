import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import NISHTHA from "./scenes/NISHTHA";
import DIKSHAETB from "./scenes/DIKSHA-ETB";
import PMPOSHAN from './scenes/PM-POSHAN'
import MicroImprovements from "./scenes/Micro-improvements"
import NAS from "./scenes/NAS";
import UDISE from "./scenes/UDISE";
import PGI from "./scenes/PGI";
import NipunBharat from "./scenes/NIPUN-BHARAT";
import NcertQuiz from "./scenes/NCERT-Quiz";
import NCF from "./scenes/NCF";


import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar setIsSidebar={setIsSidebar} />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/NISHTHA" element={<NISHTHA />} />
              <Route path="/DIKSHAETB" element={<DIKSHAETB />} />
              <Route path="/MicroImprovements" element={<MicroImprovements />} />
              <Route path="/PMPOSHAN" element={<PMPOSHAN />} />
              <Route path="/NAS" element={<NAS />} />
              <Route path="/UDISE" element={<UDISE />} />
              <Route path="/PGI" element={<PGI />} />
              <Route path="/NipunBharat" element={<NipunBharat />} />
              <Route path="/NcertQuiz" element={<NcertQuiz />} />
              <Route path="/NCF" element={<NCF />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
