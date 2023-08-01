import React from "react";
import { Link } from "react-router-dom";
import Topbar from "./screens/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppContextProvider } from "./context";
const Home = () => {
  const officers = [
    { id: 1, name: "State Officer" , url: "https://file.rendit.io/n/iyK2MXcjoXK9tEGHCpK2.png"},
    { id: 2, name: "District Officer", url: "https://file.rendit.io/n/jN8PJQPAdVSe75jNLWxs.png" },
    { id: 3, name: "Block Officer", url: "https://file.rendit.io/n/N9HYKALGdv2PLY0JQmqM.png"  },
    { id: 4, name: "Cluster Officer", url: "https://file.rendit.io/n/24YrssTHCOUeHEQaPgVF.png"  },
    { id: 5, name: "Principal", url: "https://file.rendit.io/n/CzItUjDnPwXCQBEukRiO.png"  },
    { id: 6, name: "Class Teacher", url: "https://file.rendit.io/n/0V9VQrxzjFPpMWGBqqlC.png"  },
  ];

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AppContextProvider>
          <CssBaseline />
          <Topbar />

          <div className="flex flex-col gap-24 w-full items-start">
            <div className="flex flex-row gap-4 items-center">
              <img
                src="https://dashboard-ms.vercel.app/assets/images/JH.jpeg"
                className="h-[100px] w-[100px]"
              />
              <div className="whitespace-nowrap text-4xl font-bold w-[850px]">
                JHARKHAND - VIDYA SAMIKSHA KENDRA (VSK)
              </div>
            </div>

            <div className="flex flex-col justify-between self-center">
              <div className="text-center text-4xl font-['Inter'] font-medium mx-80">
                Welcome
                <br />
                to
                <br />
                <div className="font-bold contents">
                  NDEAR
                  <br />
                  VIDYA SAMIKSHA KENDRA
                </div>
              </div>
              <div className="text-center text-4xl font-['Inter'] font-medium mt-4">
                Please select your role
                <br />
              </div>
              <div className="flex flex-row justify-between mx-80 my-20">
                {/* Add the img tags for the images here */}
                {/* <img
                  src="https://file.rendit.io/n/CzItUjDnPwXCQBEukRiO.png"
                  className="min-h-0 min-w-0"
                />
                <img
                  src="https://file.rendit.io/n/CzItUjDnPwXCQBEukRiO.png"
                  className="min-h-0 min-w-0"
                />
                <img
                  src="https://file.rendit.io/n/CzItUjDnPwXCQBEukRiO.png"
                  className="min-h-0 min-w-0"
                />
                <img
                  src="https://file.rendit.io/n/CzItUjDnPwXCQBEukRiO.png"
                  className="min-h-0 min-w-0"
                />
                <img
                  src="https://file.rendit.io/n/CzItUjDnPwXCQBEukRiO.png"
                  className="min-h-0 min-w-0"
                />
                <img
                  src="https://file.rendit.io/n/CzItUjDnPwXCQBEukRiO.png"
                  className="min-h-0 min-w-0"
                /> */}
                {officers.map((officer) => (
                <Link key={officer.id} to={`/programs/${officer.id}`}>
                  <img
                    src={officer.url}
                    className="min-h-0 min-w-0"
                    alt={officer.name}
                  />
                </Link>
              ))}
              </div>
            </div>
          </div>


          {/* <div className="card-container">
          {officers.map((officer) => (
            <div key={officer.id} className="card">
              <h3>{officer.name}</h3>
              <a href={`/programs/${officer.id}`}>View Programs</a>
            </div>
          ))}
        </div> */}
        </AppContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Home;
