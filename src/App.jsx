import React, { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Testimonials from "./pages/Testimonials";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const hash = window.location.hash || "#about";
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.location.hash = "#about";
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Navbar />
      <main style={{ scrollBehavior: "smooth", paddingTop: "64px" }}>
        <section id="about"><Hero /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="achievements"><Achievements /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
