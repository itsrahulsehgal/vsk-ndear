import React from "react";
import { Box } from "@mui/material";
import "./index.css";

const Dashboard = ({ active }) => {
  console.log({ active });
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box className="frame-13">
        <Box className="frame1">
          <img
            className="image"
            alt="ndear-logo"
            src="https://file.rendit.io/n/NrYu4Dy4fS5GKPqT6Ibt.png"
          />

          <Box className="ndear-vidya-samiksha-kendra">
            NDEAR VIDYA SAMIKSHA KENDRA
          </Box>

          <Box className="program">{active?.description}</Box>
        </Box>
      </Box>
      <iframe
        title={active?.title}
        src={active?.dashboard_url}
        style={{ height: "80vh", width: "100%", marginTop: "50px" }}
      />
    </Box>
  );
};

export default Dashboard;
