import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseIcon from "@mui/icons-material/Close";
import programs from "../../programs.json";
import { useAppContext } from "../../context";
import images from "../../program-images-config";
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";


const Item = ({ selected, setSelected, program }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const context = useAppContext();
  const icon = images[program.logo];
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
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0.5rem",
          borderBottom: "0px solid white",
          position: "relative",
          textAlign: "left",
        }}
      >
        <div
          style={{
            background: "white",
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={icon}
            alt="program-logo"
            style={{ width: "40px", height: "40px", objectFit: "contain" }}
          />
        </div>
        <Typography
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginLeft: "0.5rem",
            display: "block",
          }}
        >
          {program.title}
        </Typography>
      </div>
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
          borderRadius: "2rem",
          transition:
            "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
        },
        "& .pro-menu-item.active": {
          backgroundColor: "#4F41F4 !important",
        },
        "& .pro-sidebar.collapsed": {
          width: "103px !important",
          minWidth: "103px !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="circle">
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
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
