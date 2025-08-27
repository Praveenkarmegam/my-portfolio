import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import TestimonialSlider from "../Slider";

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Senior Developer, Cognifyz",
    feedback:
      "Praveen's commitment and quick learning ability impressed our team during the internship.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Divya Sharma",
    role: "Mentor, AI Bootcamp",
    feedback:
      "An enthusiastic learner with strong grasp in both Full Stack and ML concepts.",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Suresh Babu",
    role: "Project Manager, Freelance Client",
    feedback:
      "Delivered a clean, responsive web application with great attention to detail.",
    image: "https://i.pravatar.cc/150?img=32",
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 10, px: 2, bgcolor: "#0F0A1B" }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: "#E0E0FF",
            textShadow: "0 0 8px #9B5CFF",
          }}
        >
          Testimonials
        </Typography>

        <TestimonialSlider>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  maxWidth: "800px",
                  mx: "auto",
                  p: { xs: 3, sm: 4 },
                  my: 3,
                  borderRadius: 4,
                  background:
                    "linear-gradient(135deg, rgba(155,92,255,0.07), rgba(75,0,130,0.1))",
                  border: "1px solid rgba(155,92,255,0.3)",
                  boxShadow: "0 0 18px rgba(155,92,255,0.2)",
                  backdropFilter: "blur(10px)",
                  color: "#ffffff",
                }}
              >
                <Stack
                  direction={isSmall ? "column" : "row"}
                  spacing={3}
                  alignItems={isSmall ? "center" : "flex-start"}
                >
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: 72,
                      height: 72,
                      border: "3px solid #9B5CFF",
                      boxShadow: "0 0 10px rgba(155,92,255,0.4)",
                    }}
                  />
                  <Box textAlign={isSmall ? "center" : "left"}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ color: "#E0E0FF" }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontStyle: "italic", color: "#B0B0D0" }}
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </Stack>

                <CardContent sx={{ mt: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.05rem",
                      color: "#D1D5DB",
                      fontStyle: "italic",
                      textAlign: isSmall ? "center" : "left",
                      lineHeight: 1.6,
                    }}
                  >
                    “{item.feedback}”
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TestimonialSlider>
      </Container>
    </Box>
  );
};

export default Testimonials;
