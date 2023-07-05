import { Box } from "@mui/material";
import './topbar.css'

const Topbar = () => {
  return (
    <>
      <Box
        display="flex" class = "fontBar"
      >
        <Box display = "flex" class = "flagArea">
        <img src="https://file.rendit.io/n/QfH0SoOiEboqB0iLdfmW.png" class = "flagImage" width = "48" height = "32" alt="Image" />
        <Box> 
        भारत सरकार | Government of India
        </Box>
        </Box>
      </Box>
      </>
  );
};

export default Topbar;
