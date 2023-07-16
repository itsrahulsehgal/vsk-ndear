import { useState } from "react";
import Topbar from "./screens/global/Topbar";
import Sidebar from "./components/sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./screens/common-dashboard/index";
import { AppContextProvider } from "./context";
import programs from "./programs.json";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [activeProgram, setActiveProgram] = useState(programs?.[0]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AppContextProvider value={{ activeProgram, setActiveProgram }}>
          <CssBaseline />
          <Topbar setIsSidebar={setIsSidebar} />
          <div className="app">
            <Sidebar isSidebar={isSidebar} className="fixed-sidebar" />
            <main className="content">
              <Dashboard active={activeProgram}/>
              {/* <Routes>
              {routes.map((route) => (
                <Route
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes> */}
            </main>
          </div>
        </AppContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
