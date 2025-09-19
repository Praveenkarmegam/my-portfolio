import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  useTheme,
  Button,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion"; // ✅ Framer Motion Import
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";



const titles = [
  "Full Stack Web Developer",
  "AI & Data Science Enthusiast",
];

const Hero = () => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[index];
    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentTitle[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  const handleScrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 3, md: 12 },
        pt: { xs: 12, md: 14 },
        pb: { xs: 8, md: 10 },
        background: "#0F0A1B",
        color: "#FFFFFF",
      }}
    >
      {/* Left Side - Motion */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ flex: 1 }}
      >
        <Box sx={{ pr: { md: 6 }, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{
              mb: 1,
              color: "#ffffff",
              fontSize: {
                xs: "2rem", // Small devices
                sm: "2.5rem", // Tablets
                md: "3rem", // Laptops
                lg: "3.5rem", // Desktops
              },
            }}
          >
            Hi, I'm Praveen K
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: "#C084FC",
              minHeight: "2.5rem",
              letterSpacing: 1,
              textShadow: "0 0 8px #A855F7",
              fontSize: {
                xs: "1.25rem", // ~20px - mobile
                sm: "1.25rem", // ~24px - tablets
                md: "1.5rem", // ~28px - desktops
                lg: "1.75rem", // ~32px - large screens
              },
            }}
          >
            {typedText}
            <span style={{ color: "#C084FC" }}>|</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 3,
              maxWidth: { xs: "100%", md: "600px" },
              lineHeight: 1.8,
              fontSize: { xs: "0.95rem", sm: "1rem" },
              color: "#d1d5db",
              mx: { xs: "auto", md: 0 },
              textAlign: "justify",
            }}
          >
            I am a Full Stack Web Developer with solid expertise in both
            frontend and backend development. I specialize in building modern,
            responsive web applications with clean user interfaces and robust
            backend logic. Proficient in integrating AI models into web
            solutions, I enjoy solving real-world problems through technology.
            With a strong foundation in Full Stack development and a continuous
            drive to learn emerging tools and frameworks, I am committed to
            delivering high-quality, scalable digital solutions.
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="outlined"
              onClick={handleScrollToFooter}
              sx={{
                borderRadius: "25px",
                px: 3,
                py: 1,
                fontWeight: 600,
                textTransform: "none",
                color: "#C084FC",
                borderColor: "#C084FC",
                "&:hover": {
                  backgroundColor: "#C084FC",
                  color: "#0F0A1B",
                  transform: "translateY(-2px)",
                  boxShadow: "0 0 16px #A855F7",
                },
              }}
            >
              Get in Touch
            </Button>

            <Button
              variant="contained"
              endIcon={<DescriptionIcon />}
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderRadius: "25px",
                px: 3,
                py: 1,
                fontWeight: 600,
                textTransform: "none",
                background: "linear-gradient(90deg, #7C3AED, #A855F7)",
                color: "#ffffff",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 0 16px #A855F7",
                },
              }}
            >
              Resume
            </Button>
          </Box>

          {/* Social Icons */}
          <Box
            sx={{
              mt: 3,
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <IconButton
              component="a"
              href="https://github.com/Praveenkarmegam"
              rel="noopener noreferrer"
              sx={{ color: "#ffffff" }}
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/itspraveenk/"
              rel="noopener noreferrer"
              sx={{ color: "#ffffff" }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </motion.div>

      {/* Right Side - Motion */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Avatar
          alt="Image"
          src="/profile/praveen.jpg"
          sx={{
            width: { xs: 240, md: 360 },
            height: { xs: 240, md: 360 },
            border: "6px solid #A855F7",
            boxShadow: "0 0 40px #A855F7",
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Hero;
