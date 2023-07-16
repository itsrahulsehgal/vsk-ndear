import { Box } from "@mui/material";
import './index.css'
const NAS = () => {

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box className="frame-13">
        <Box className="frame1">

          <img className="image" src="https://file.rendit.io/n/NrYu4Dy4fS5GKPqT6Ibt.png" />

          <Box className="ndear-vidya-samiksha-kendra">NDEAR VIDYA SAMIKSHA KENDRA</Box>

          <Box className="program">National Achievement Survey (NAS)</Box>
        </Box>
      </Box>
        <iframe
        title="Diksha-ETB"
        src="http://20.120.97.100:8088/superset/dashboard/p/ZMKk5pJ3Qp0/?standalone=3"
        style={{ height: "80vh", width: "100%", marginTop: "50px"}}
      />
    </Box>
  );
};

export default NAS;
