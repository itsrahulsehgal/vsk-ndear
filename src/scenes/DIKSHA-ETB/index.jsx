import { Box } from "@mui/material";
// import Iframe from 'react-iframe';
// import { Image } from "@mui/icons-material";
import './index.css'
const DIKSHAETB = () => {

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box className="frame-13">
        <Box className="frame1">

          <img className="image" src="https://file.rendit.io/n/NrYu4Dy4fS5GKPqT6Ibt.png" />

          <Box className="ndear-vidya-samiksha-kendra">NDEAR VIDYA SAMIKSHA KENDRA</Box>

          <Box className="program">DIKSHA- ETB and eContent(ETB : Energized Textbook)</Box>
        </Box>
      </Box>
      {/* <Iframe url=""
        width="1150px"
        height="1000px"
        id=""
        className=""
        display="block"
        position="relative"/> */}
      <iframe
        title="Diksha-ETB"
        src="http://20.120.97.100:8088/superset/dashboard/p/Xmq3lNNnjzD"
        style={{ height: "80vh", width: "100%", marginTop: "50px"}}
      />
      <iframe
  width="600"
  height="400"
  seamless
  frameBorder="0"
  scrolling="no"
  src="http://20.120.97.100:8088/superset/explore/p/eRZ0vLdwq8D/?standalone=1&height=400"
>
</iframe>
    </Box>

  );
};

export default DIKSHAETB;
