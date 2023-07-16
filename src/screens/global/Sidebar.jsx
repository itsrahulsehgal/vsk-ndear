import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import programs from "../../programs.json";
import { useAppContext } from "../../context";
import images from '../../program-images-config';

const Item = ({ selected, setSelected, program }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const context= useAppContext();
const icon = images[program.logo]
  return (
    <MenuItem
      active={selected === program.title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => {
        setSelected(program.title);
       context?.setActiveProgram(program);
      }}
      //icon={program.logo || <HomeOutlinedIcon />}
      icon={<img src={icon} alt="program-logo" height={35} style={{maxWidth:'35px'}} /> }
    >
      <Typography style={{fontSize:'22px',fontWeight:'bold'}}>{program.title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          backgroundColor: "#4F41F4 !important",
        },
        "& .pro-menu-item.active": {
          backgroundColor: "#4F41F4 !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : <CloseIcon />}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              ></Box>
            )}
          </MenuItem>

          <Box>
            {programs.map((program) => (
              <Item
                key={program.id}
                program={program}
                icon={program.logo || <HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            ))}
            {/* <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="NISHTHA"
              to="/NISHTHA"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="DIKSHA-ETB"
              to="/DIKSHAETB"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Micro-improvements"
              to="/MicroImprovements"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="PM-POSHAN"
              to="/PMPOSHAN"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="NAS"
              to="/NAS"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="UDISE"
              to="/UDISE"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="PGI"
              to="/PGI"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="NipunBharat"
              to="/NipunBharat"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="NcertQuiz"
              to="/NcertQuiz"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="NCF"
              to="/NCF"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;