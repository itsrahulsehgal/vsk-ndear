import React, { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { AppContextProvider } from "./context";
import programs from "./programs.json";
import Home from "./Home";
import Programs from "./Programs";
import { Route, Routes, useParams } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  const [activeProgram, setActiveProgram] = useState(programs?.[0]);
  const { roleId } = useParams();

  const id = parseInt(roleId, 10);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AppContextProvider value={{ activeProgram, setActiveProgram }}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <Routes>
                {/* Add routes for Home and Programs components */}
                <Route path="/" element={<Home />} />
                <Route path="/:roleId" element={<Programs Id={id}/>} />
                {/* Add other routes for other pages/components */}
              </Routes>
            </main>
          </div>
        </AppContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
