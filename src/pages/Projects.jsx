import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaStripe,
  FaPython,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiSocketdotio,
  SiPostgresql,
  SiMapbox,
  SiFlask,
  SiLangchain,
  SiOpenai,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

const techIcons = {
  React: <FaReact size={16} />,
  "Node.js": <FaNodeJs size={16} />,
  MongoDB: <SiMongodb size={16} />,
  "Socket.io": <SiSocketdotio size={16} />,
  Stripe: <FaStripe size={16} />,
  Flask: <SiFlask size={16} />,
  LangChain: <SiLangchain size={16} />,
  OpenAI: <SiOpenai size={16} />,
  Nodemailer: <MdEmail size={16} />,
  PostgreSQL: <SiPostgresql size={16} />,
  "Maps API": <SiMapbox size={16} />,
  Python: <FaPython size={16} />,
  GitHub: <FaGithub size={16} />,
  AWS: <FaAws size={16} />,
};


const projects = [
  {
    title: "Online Food Delivery",
    image: "/project-image/food.jpeg",
    description:
      "Web app using MERN with user authentication, real-time tracking, admin controls, and secure payments.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe"],
    source: "https://github.com/Praveenkarmegam/online-food-delivery",
    demo: "https://online-food-delivery1.netlify.app/",
  },
  {
    title: "Smart Supply Chain System",
    image: "/project-image/supplyChain.jpeg",
    description:
      "Dashboards for employees/managers, AI-based inventory & demand forecasting.",
    stack: ["React", "Flask", "Python", "Maps API", "PostgreSQL"],
    source: "",
    demo: "",
  },
  {
    title: "Gmail Clone",
    image: "/project-image/gmail.jpeg",
    description:
      "Gmail-like app with Nodemailer, login/signup and responsive design.",
    stack: ["React", "Node.js", "Nodemailer", "MongoDB"],
    source: "https://github.com/Praveenkarmegam/gmail-clone1",
    demo: "https://cozy-pavlova-5f2ea7.netlify.app/",
  },
  {
    title: "AI-powered Chatbot",
    image:"/project-image/chatbot.jpeg",
    description:
      "Flask + LangChain based chatbot for real-time, intelligent response using RAG + OpenAI.",
    stack: ["Flask", "LangChain", "OpenAI", "Python"],
    source: "https://github.com/your-username/ai-chatbot",
    demo: "https://ai-chatbot-demo.netlify.app",
  },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const theme = useTheme();

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setOpen(false);
  };

  return (
    <Box sx={{ py: 10, bgcolor: "#0F0A1B", color: "white" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
        sx={{ textShadow: "0 0 6px #9B5CFF" }}
      >
        Projects
      </Typography>
      <Box sx={{ height: 0, mb: 6 }} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          px: 3,
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => handleOpen(project)}
            style={{ cursor: "pointer" }}
          >
            <Card
              sx={{
                width: 300,
                height: 370,
                display: "flex",
                flexDirection: "column",
                borderRadius: 4,
                boxShadow: 5,
                background:
                  "linear-gradient(135deg, rgba(155,92,255,0.1), rgba(75,0,130,0.15))",
                border: "1px solid rgba(155,92,255,0.25)",
                backdropFilter: "blur(10px)",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={project.title}
                height="150"
                sx={{ objectFit: "cover", width: "100%" }}
              />

              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  py: 2,
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#D1D5DB", mb: 1 }}
                  noWrap
                >
                  {project.description}
                </Typography>
                <Box sx={{ flexGrow: 1 }} /> {/* pushes chips to bottom */}
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  sx={{ columnGap: 1, rowGap: 1 }}
                >
                  {project.stack.slice(0, 4).map((tech, idx) => (
                    <Chip
                      key={idx}
                      icon={techIcons[tech]}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{
                        color: "#E0E7FF",
                        borderColor: "#9B5CFF",
                        backgroundColor: "rgba(155,92,255,0.05)",
                        fontSize: "0.75rem",
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>

      {/* POPUP Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            backgroundColor: "#18122B",
            color: "white",
            px: { xs: 2, sm: 3 },
            py: { xs: 2, sm: 3 },
            maxWidth: 500,
            width: "85vw",
            height: "85vw", // Still square-ish but smaller
            maxHeight: 500,
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        {selectedProject && (
          <>
            <CardMedia
              component="img"
              image={selectedProject.image}
              alt={selectedProject.title}
              sx={{
                width: "100%",
                height: "38%",
                objectFit: "cover",
                borderRadius: 2,
                mb: 2,
              }}
            />
            <DialogTitle
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                color: "#EDE9FE",
                px: 0,
              }}
            >
              {selectedProject.title}
            </DialogTitle>
            <DialogContent
              sx={{
                px: 0,
                py: 1,
                overflowY: "auto",
                flexGrow: 1,
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#CBD5E1",
                    fontSize: { xs: "0.85rem", sm: "1rem" },
                  }}
                >
                  {selectedProject.description}
                </Typography>

                <Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight={600}
                    mb={1}
                    sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
                  >
                    Tools Used:
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {selectedProject.stack.map((tech, idx) => (
                      <Chip
                        key={idx}
                        icon={techIcons[tech]}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          color: "#E0E7FF",
                          borderColor: "#9B5CFF",
                          backgroundColor: "rgba(155,92,255,0.05)",
                          fontSize: "0.7rem",
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </DialogContent>

            <DialogActions
              sx={{
                px: 0,
                pt: 2,
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 1,
              }}
            >
              <Button
                variant="contained"
                href={selectedProject.source}
                target="_blank"
                size="small"
                sx={{
                  backgroundColor: "#9B5CFF",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#7E42E2",
                  },
                  minWidth: 100,
                  fontWeight: 600,
                }}
              >
                Source Code
              </Button>

              <Button
                variant="outlined"
                href={selectedProject.demo}
                target="_blank"
                size="small"
                sx={{
                  borderColor: "#9B5CFF",
                  color: "#9B5CFF",
                  "&:hover": {
                    backgroundColor: "rgba(155,92,255,0.1)",
                    borderColor: "#7E42E2",
                  },
                  minWidth: 100,
                  fontWeight: 600,
                }}
              >
                Live Demo
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
