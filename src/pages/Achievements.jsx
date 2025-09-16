import React from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import MicIcon from "@mui/icons-material/Mic";

const achievements = [

  {
    title: "ML Certification",
    description: "Completed Google’s Machine Learning Specialization.",
    icon: <SchoolIcon />,
    color: "linear-gradient(135deg, #3b82f6, #06b6d4)",
  },
  {
    title: "Open Source Contributor",
    description: "Contributed to LangChain and AI GitHub projects.",
    icon: <CodeIcon />,
    color: "linear-gradient(135deg, #10b981, #8b5cf6)",
  },
  {
    title: "Technical Speaker",
    description: "Delivered sessions on AI & Web Dev in campus events.",
    icon: <MicIcon />,
    color: "linear-gradient(135deg, #ec4899, #8b5cf6)",
  },
];

const Achievements = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 10, px: 2, bgcolor: "#0F0A1B", color: "#fff" }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        sx={{ textShadow: "0 0 8px #9B5CFF" }}
      >
        Achievements
      </Typography>

      <Box sx={{ height: 0, mb: 6 }} />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {achievements.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 300px", // min width 300px
              maxWidth: "320px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: "100%",
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                textAlign: "center",
                boxShadow: "0 0 10px rgba(155, 92, 255, 0.1)",
                transition: "all 0.4s ease",
                "&:hover": {
                  boxShadow: "0 0 20px #9B5CFFaa",
                  transform: "translateY(-6px)",
                  borderColor: "#9B5CFF",
                },
              }}
            >
              <Avatar
                sx={{
                  mb: 2,
                  width: 64,
                  height: 64,
                  background: item.color,
                  color: "white",
                  fontSize: 32,
                  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                }}
              >
                {item.icon}
              </Avatar>
              <Typography
                variant="h6"
                sx={{ color: "#E0E0FF", fontWeight: "bold", mb: 1 }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#cbd5e1", textAlign: "center" }}
              >
                {item.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Achievements;
