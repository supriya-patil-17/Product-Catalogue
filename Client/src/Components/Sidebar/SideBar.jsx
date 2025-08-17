import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // hamburger
import CloseIcon from "@mui/icons-material/Close"; // top close
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // bottom close
import { FaCogs, FaBoxOpen, FaTools, FaPuzzlePiece } from "react-icons/fa";

const drawerWidth = 260;

const CollapsibleSidebar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Spare Parts", to: "/dashboard/spare-parts", icon: <FaBoxOpen /> },
    { name: "Assembly", to: "/dashboard/assembly", icon: <FaCogs /> },
    { name: "Variables", to: "/dashboard/variables", icon: <FaPuzzlePiece /> },
    { name: "Mechanism", to: "/dashboard/mechanism", icon: <FaTools /> },
  ];

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: drawerWidth,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "linear-gradient(to bottom, #1e3a8a, #1d4ed8)",
        color: "white",
        position: "relative",
      }}
      role="presentation"
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight="bold">
            ACCURAMECH
          </Typography>
          <Typography variant="body2" color="rgba(255,255,255,0.7)">
            Catalogue
          </Typography>
        </Box>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

      {/* Navigation */}
      <List sx={{ flexGrow: 1 }}>
        {links.map((link) => (
          <ListItem
            key={link.to}
            disablePadding
            sx={{
              "& .active": {
                backgroundColor: "white",
                color: "#1e3a8a",
                borderRadius: "12px",
                fontWeight: "bold",
              },
            }}
          >
            <ListItemButton
              component={NavLink}
              to={link.to}
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: "12px",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.15)",
                  pl: 4,
                  transition: "0.3s",
                },
              }}
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{link.icon}</ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />

      {/* Footer with Bottom Close Button */}
      <Box
        sx={{
          textAlign: "center",
          pb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
        }}
      >
        <Typography variant="caption" color="rgba(255,255,255,0.6)">
          © {new Date().getFullYear()} Accuramech
        </Typography>
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{
            color: "white",
            bgcolor: "rgba(255,255,255,0.1)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Hamburger trigger */}
{/* Show hamburger only when sidebar is closed */}
{!open && (
  <IconButton
    onClick={toggleDrawer(true)}
    sx={{
      position: "fixed",
      top: 16,
      right: 16,
      color: "#1e3a8a",
      zIndex: 1300,
    }}
  >
    <MenuIcon fontSize="large" />
  </IconButton>
)}


      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        transitionDuration={400} // smooth animation
      >
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CollapsibleSidebar;
