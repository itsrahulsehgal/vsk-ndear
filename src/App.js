import { useState } from "react";
import Topbar from "./screens/global/Topbar";
import Sidebar from "./components/sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./screens/common-dashboard/index";
import { AppContextProvider } from "./context";
import programs from "./programs.json";
import Home from "./Home";
import Programs from "./Programs"
import { Route, Routes } from "react-router-dom";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [activeProgram, setActiveProgram] = useState(programs?.[0]);

  return (
    // <ColorModeContext.Provider value={colorMode}>
    //   <ThemeProvider theme={theme}>
    //     <AppContextProvider value={{ activeProgram, setActiveProgram }}>
    //       <CssBaseline />
    //       <Topbar setIsSidebar={setIsSidebar} />
    //       <div className="app">
    //         <Sidebar isSidebar={isSidebar} className="fixed-sidebar" />
    //         <main className="content">
    //           <Dashboard active={activeProgram}/>
    //         </main>
    //       </div>
    //     </AppContextProvider>
    //   </ThemeProvider>
    // </ColorModeContext.Provider>
    <div>
      <Routes>
        {/* Add routes for Home and Programs components */}
        <Route path="/" element={<Home />} />
        <Route path="/programs/:roleId" element={<Programs />} />
        {/* Add other routes for other pages/components */}
      </Routes>
    </div>
    // <Home/>
  );
}

export default App;
