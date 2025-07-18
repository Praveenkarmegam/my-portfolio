import React from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const educationData = [
  {
    institution: "Er. Perumal Manimekalai College of Engineering, Hosur",
    duration: "2022 – 2026",
    qualification: "B. Tech in Artificial Intelligence and Data Science",
    details: "CGPA: 8.59 (Pursuing)",
    icon: <FaGraduationCap size={20} color="#C084FC" />,
  },
  {
    institution: "R.V.G.B.H.S. School, Hosur",
    duration: "2020 – 2022",
    qualification: "Higher Secondary",
    details: "Completed with 65%",
    icon: <MdSchool size={22} color="#C084FC" />,
  },
];

const Education = () => {
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
          Education
        </Typography>

        {/* Spacer to maintain vertical alignment */}
        <Box sx={{ height: 0, mb: 6 }} />

        <Box
          sx={{
            position: "relative",
            pl: { xs: 2, sm: 4 },
            borderLeft: "4px solid #9B5CFF",
          }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ position: "relative" }}
            >
              {/* Timeline Dot */}
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

              {/* Education Card */}
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
                {/* Header Row */}
                <Box
                  display="flex"
                  flexDirection={isSmall ? "column" : "row"}
                  justifyContent="space-between"
                  alignItems={isSmall ? "flex-start" : "center"}
                >
                  <Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      {edu.icon}
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: "#E0E0FF" }}
                      >
                        {edu.institution}
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "rgba(255,255,255,0.7)" }}
                      mt={0.5}
                    >
                      {edu.qualification}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    mt={isSmall ? 1 : 0}
                    sx={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {edu.duration}
                  </Typography>
                </Box>

                {/* Detail Row */}
                <Box mt={2}>
                  <Typography variant="body2" sx={{ color: "#d1d5db" }}>
                    {edu.details}
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
