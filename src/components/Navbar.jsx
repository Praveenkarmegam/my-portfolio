import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const sections = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Achievements",
  "Testimonials",
  "Contact",
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

const handleNavClick = (section) => {
  const id = section.toLowerCase();
  const el = document.getElementById(id);
  if (el) {
    window.history.pushState(null, "", `#${id}`);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  setDrawerOpen(false);
};


  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#0F0A1B",
          zIndex: 1500,
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          <Typography
            variant="h6"
            onClick={() => handleNavClick("About")}
            sx={{
              fontWeight: 700,
              cursor: "pointer",
              color: "#FFFFFF",
              fontSize: { xs: "18px", sm: "18px", md: "22px" },
              ml: { xs: 2, sm: 4, md: 8 },
            }}
          >
            Praveen K
          </Typography>

          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: "#FFFFFF" }} />
            </IconButton>
          )}

          {!isMobile && (
            <div style={{ display: "flex", gap: "16px" }}>
              {sections.map((section) => (
                <Typography
                  key={section}
                  onClick={() => handleNavClick(section)}
                  sx={{
                    cursor: "pointer",
                    color: "#FFFFFF",
                    fontSize: "0.95rem",
                    px: 2,
                    py: 1,
                    borderRadius: "18px",
                    fontWeight: 500,
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "#9B5CFF",
                      boxShadow: "0 0 10px #9B5CFF",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {section}
                </Typography>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#0F0A1B",
            color: "#ffffff",
            paddingTop: "80px",
          },
        }}
      >
        <List>
          {sections.map((section) => (
            <ListItem key={section} disablePadding>
              <ListItemButton onClick={() => handleNavClick(section)}>
                <ListItemText primary={section} sx={{ textAlign: "center" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
