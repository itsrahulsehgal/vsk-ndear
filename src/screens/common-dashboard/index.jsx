import React from "react";
import { Box } from "@mui/material";
import "./index.css";
import { embedDashboard } from "@superset-ui/embedded-sdk";
// embedDashboard({
//   id: "abc123", // given by the Superset embedding UI
//   supersetDomain: "http://20.120.97.100:8088/superset/dashboard/p/Xmq3lNNnjzD?standalone=1",
//   mountPoint: <iframe
//   src="http://20.120.97.100:8088/superset/dashboard/p/Xmq3lNNnjzD?standalone=1"
//   style={{ height: "80vh", width: "100%", marginTop: "50px" }}
// />, // any html element that can contain an iframe
//   dashboardUiConfig: { // dashboard UI config: hideTitle, hideTab, hideChartControls, filters.visible, filters.expanded (optional)
//       hideTitle: true,
//       filters: {
//           expanded: true,
//       }
//   },
// });


const Dashboard = ({ active }) => {
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
