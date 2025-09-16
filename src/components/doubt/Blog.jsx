import React, { useState, useEffect } from "react";
import { Box, Card, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const blogPosts = [
  {
    title: "LangChain Basics",
    summary: "Build intelligent apps using LangChain and LLMs.",
    image: "https://via.placeholder.com/400x200?text=LangChain", // Replace with real image path
    link: "https://www.instagram.com/langchain_blog", // Replace with real link
  },
  {
    title: "Deploy with Render",
    summary: "Simple guide for full-stack deployment.",
    image: "https://via.placeholder.com/400x200?text=Render", // Replace with real image path
    link: "https://www.instagram.com/render_blog", // Replace with real link
  },
];

const quoteList = [
  "Technology is best when it brings people together.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Simplicity is the soul of efficiency.",
  "Great web experiences start with great code.",
];

const BlogQuoteSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quoteList.length);
    }, 12 * 60 * 60 * 1000); // Every 12 hours
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % blogPosts.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));

  return (
    <Box sx={{ px: 2, py: 10, backgroundColor: "#0F0A1B", color: "#fff" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          textShadow: "0 0 10px #9B5CFF",
        }}
      >
        Explore & Get Inspired
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Left: Blog Slider */}
        <Box sx={{ flex: "0 0 47%", position: "relative" }}>
          <Card
            sx={{
              height: 500,
              borderRadius: 4,
              padding: 3,
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 0 10px rgba(155, 92, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              color: "#e0e0ff",
            }}
          >
            <Box>
              <Box
                component="a"
                href={blogPosts[currentSlide].link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: "100%",
                  height: 200,
                  borderRadius: 3,
                  backgroundColor: "#333",
                  backgroundImage: `url(${blogPosts[currentSlide].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  mb: 2,
                  display: "block",
                }}
              />

              <Typography variant="h6" sx={{ mb: 1 }}>
                {blogPosts[currentSlide].title}
              </Typography>

              <Typography variant="body2" sx={{ color: "#cbd5e1", mb: 2 }}>
                {blogPosts[currentSlide].summary}
              </Typography>

              <Box sx={{ textAlign: "right" }}>
                <a
                  href={blogPosts[currentSlide].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      mt: 1,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      backgroundColor: "#9B5CFF",
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      transition: "all 0.3s",
                      "&:hover": {
                        backgroundColor: "#B388FF",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    Read More
                  </Box>
                </a>
              </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <IconButton
                onClick={prevSlide}
                sx={{
                  color: "#fff",
                  backgroundColor: "rgba(155, 92, 255, 0.15)",
                  mx: 1,
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: "rgba(155, 92, 255, 0.3)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <ArrowBackIos fontSize="medium" />
              </IconButton>
              <IconButton
                onClick={nextSlide}
                sx={{
                  color: "#fff",
                  backgroundColor: "rgba(155, 92, 255, 0.15)",
                  mx: 1,
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: "rgba(155, 92, 255, 0.3)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <ArrowForwardIos fontSize="medium" />
              </IconButton>
            </Box>
          </Card>
        </Box>

        {/* Right: Quotes */}
        <Box
          sx={{
            flex: "0 0 47%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          {[0, 1, 2].map((i) => (
            <Card
              key={i}
              sx={{
                flex: 1,
                minHeight: 110,
                padding: 3,
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 10px rgba(155, 92, 255, 0.1)",
                color: "#E2E8F0",
              }}
            >
              <Typography
                variant="body2"
                align="center"
                fontStyle="italic"
                sx={{ px: 1 }}
              >
                “{quoteList[(currentQuoteIndex + i) % quoteList.length]}”
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogQuoteSection;
