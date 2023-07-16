import { Box } from "@mui/material";
// import Image from "mui-image";
// import Iframe from 'react-iframe';
import './index.css'
// import InfoBox from "../../components/infobox/InfoBox";
const PMPOSHAN = () => {

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box className="frame-13">
        <Box className="frame1">

          <img className="image" src="https://file.rendit.io/n/NrYu4Dy4fS5GKPqT6Ibt.png" />

          <Box className="ndear-vidya-samiksha-kendra">NDEAR VIDYA SAMIKSHA KENDRA</Box>

          <Box className="program">PM POSHAN</Box>
        </Box>
      </Box>
        {/* <InfoBox/> */}
      
        <iframe
        title="PM POSHAN"
        src="http://20.120.97.100:8088/superset/dashboard/p/DabnEG93wXx"
        style={{ height: "80vh", width: "100%", marginTop: "50px"}}/>
    </Box>
  );
};

export default PMPOSHAN;
