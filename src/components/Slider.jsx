import React from "react";
import Slider from "react-slick";
import { useTheme, useMediaQuery, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: "-35px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(155,92,255,0.15)",
      border: "2px solid #9B5CFF",
      color: "#E0E0FF",
      boxShadow: "0 0 8px rgba(155,92,255,0.4)",
      "&:hover": {
        backgroundColor: "rgba(155,92,255,0.3)",
      },
      width: 40,   // 🔽 reduced from 50
      height: 40,  // 🔽 reduced from 50
      zIndex: 2,
    }}
  >
    <ArrowForwardIos sx={{ fontSize: 22 }} /> {/* 🔽 reduced from 28 */}
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: "-35px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(155,92,255,0.15)",
      border: "2px solid #9B5CFF",
      color: "#E0E0FF",
      boxShadow: "0 0 8px rgba(155,92,255,0.4)",
      "&:hover": {
        backgroundColor: "rgba(155,92,255,0.3)",
      },
      width: 40,
      height: 40,
      zIndex: 2,
    }}
  >
    <ArrowBackIos sx={{ fontSize: 22 }} />
  </IconButton>
);

const TestimonialSlider = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} style={{ padding: isMobile ? "0 10px" : "0 30px" }}>
      {children}
    </Slider>
  );
};

export default TestimonialSlider;
