import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Intern - ZIDIO DEVELOPMENT",
    period: "June 2025 – July 2025",
    location: "Remote",
    description: [
      "Built responsive web applications with modern frontend/backend tech.",
      "Collaborated with UI/UX designers to enhance usability and aesthetics.",
      "Integrated third-party APIs and scalable backend services.",
      "Participated in agile practices like code reviews and documentation.",
    ],
  },
  {
    title: "Freelancer - Full Stack Developer",
    period: "Ongoing",
    location: "Remote",
    description: [
      "Developed full-stack web solutions for client requirements.",
      "Built custom admin panels, e-commerce components, and dashboards.",
      "Used React, Node.js, Express, MongoDB, and custom CSS.",
    ],
  },
];

const Experience = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 10, bgcolor: "#0F0A1B", color: "#ffffff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{ textShadow: "0 0 8px #9B5CFF" }}
        >
          Experience
        </Typography>

        {/* Spacer instead of Divider */}
        <Box sx={{ height: "0px", mb: 6 }} />

        <Box
          sx={{
            position: "relative",
            pl: { xs: 2, sm: 4 },
            borderLeft: "4px solid #9B5CFF",
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ position: "relative" }}
            >
              {/* Dot on the timeline */}
              <Box
                sx={{
                  position: "absolute",
                  top: 24,
                  left: -14,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  bgcolor: "#9B5CFF",
                  border: "4px solid #0F0A1B",
                  zIndex: 1,
                }}
              />

              {/* Experience Card */}
              <Paper
                elevation={5}
                sx={{
                  p: 3,
                  mb: 6,
                  borderRadius: 3,
                  ml: 2,
                  backdropFilter: "blur(10px)",
                  background:
                    "linear-gradient(135deg, rgba(155,92,255,0.1), rgba(75,0,130,0.1))",
                  border: "1px solid rgba(155,92,255,0.3)",
                  boxShadow: "0 0 15px rgba(155, 92, 255, 0.2)",
                }}
              >
                {/* Header: Title, Location, Period */}
                <Box
                  display="flex"
                  flexDirection={isSmall ? "column" : "row"}
                  justifyContent="space-between"
                  alignItems={isSmall ? "flex-start" : "center"}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: "#E0E0FF" }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "rgba(255,255,255,0.7)" }}
                      mt={0.5}
                    >
                      {exp.location}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    mt={isSmall ? 1 : 0}
                    sx={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {exp.period}
                  </Typography>
                </Box>

                {/* Description List */}
                <ul style={{ marginTop: 16, paddingLeft: 20 }}>
                  {exp.description.map((point, i) => (
                    <li key={i} style={{ marginBottom: 8 }}>
                      <Typography variant="body2" sx={{ color: "#d1d5db" }}>
                        {point}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
