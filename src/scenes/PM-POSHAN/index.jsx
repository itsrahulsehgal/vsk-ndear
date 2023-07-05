import { Box } from "@mui/material";
import Iframe from 'react-iframe';
import './index.css'
const PMPOSHAN = () => {

  return (
    <Box m="20px">
      {/* HEADER */}
      <div className="frame-13">
        <div className="rectangle-6"></div>

        <img className="download-1" src="https://file.rendit.io/n/NrYu4Dy4fS5GKPqT6Ibt.png" />

        <div className="ndear-vidya-samiksha-kendra">NDEAR VIDYA SAMIKSHA KENDRA</div>

        <div className="pm-poshan">PM POSHAN</div>

        <div className="rectangle-7"></div>
      </div>
      <Iframe url="http://20.120.97.100:8088/superset/dashboard/p/omN3zBa3zO5/"
        width="1150px"
        height="1000px"
        id=""
        className=""
        display="block"
        position="relative" />
    </Box>
  );
};

export default PMPOSHAN;
