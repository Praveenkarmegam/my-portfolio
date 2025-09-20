import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Container,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import TestimonialSlider from "../components/Slider";

const testimonials = [
  {
    name: "Yuvan U",
    role: "Client – Portfolio Website",
    feedback:
      "Praveen K, as a skilled Full Stack Developer, has done an excellent job in developing my portfolio. He combined clean design with strong technical implementation, ensuring both functionality and professional presentation. His expertise and attention to detail truly stand out.",
    image: "/client/yuvan.jpg",
    link: "https://yuvanu-portfolio.netlify.app/",
  },
  {
    name: "Studix Solutions",
    role: "Client – Company Website",
    feedback:
      "Praveen K, a skilled Web Developer, built our official company website using HTML, CSS, JavaScript, and Bootstrap. He delivered a professional, responsive site that aligns perfectly with our brand identity, showcasing his attention to detail and strong technical expertise.",
    image: "client/studixsolutions.png",
    link: "https://www.studixsolutions.com",
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
          sx={{ color: "#E0E0FF", textShadow: "0 0 8px #9B5CFF" }}
        >
          Client Feedback
        </Typography>

        <TestimonialSlider autoPlay={false} showArrows={true}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                elevation={3}
                sx={{
                  width: "100%",
                  maxWidth: isSmall ? 300 : 800,
                  mx: "auto",
                  p: { xs: 2, sm: 4 },
                  my: 3,
                  borderRadius: 4,
                  background:
                    "linear-gradient(135deg, rgba(155,92,255,0.1), rgba(75,0,130,0.2))",
                  border: "1px solid rgba(155,92,255,0.4)",
                  boxShadow: "0 0 25px rgba(155,92,255,0.3)",
                  backdropFilter: "blur(12px)",
                  color: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",

                  // 👇 fixed height only on larger screens
                  height: isSmall ? "auto" : 320,
                }}
              >
                <Stack
                  direction={isSmall ? "column" : "row"}
                  spacing={isSmall ? 1.5 : 3}
                  alignItems={isSmall ? "center" : "flex-start"}
                >
                  <Avatar
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: isSmall ? 60 : 72,
                      height: isSmall ? 60 : 72,
                      border: "3px solid #9B5CFF",
                      boxShadow: "0 0 12px rgba(155,92,255,0.5)",
                    }}
                  />
                  <Box textAlign={isSmall ? "center" : "left"}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "#E0E0FF",
                        fontSize: isSmall ? "1rem" : "1.25rem",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontStyle: "italic",
                        color: "#B0B0D0",
                        fontSize: isSmall ? "0.8rem" : "0.9rem",
                      }}
                    >
                      {item.role}
                    </Typography>
                  </Box>
                </Stack>

                <CardContent sx={{ mt: 2, flexGrow: 1, p: { xs: 1, sm: 2 } }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: isSmall ? "0.9rem" : "1.05rem",
                      color: "#D1D5DB",
                      fontStyle: "italic",
                      textAlign: isSmall ? "center" : "left",
                      lineHeight: 1.5,
                    }}
                  >
                    “{item.feedback}”
                  </Typography>
                </CardContent>

                {/* 👇 Button fixed at bottom-right */}
                <Box
                  mt="auto"
                  display="flex"
                  justifyContent={isSmall ? "center" : "flex-end"}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#9B5CFF",
                      color: "#E0E0FF",
                      fontSize: isSmall ? "0.75rem" : "0.9rem",
                      px: isSmall ? 1.5 : 2.5,
                      py: isSmall ? 0.5 : 1,
                      "&:hover": {
                        backgroundColor: "rgba(155,92,255,0.2)",
                        borderColor: "#9B5CFF",
                      },
                    }}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Website
                  </Button>
                </Box>
              </Card>
            </motion.div>
          ))}
        </TestimonialSlider>
      </Container>
    </Box>
  );
};

export default Testimonials;
