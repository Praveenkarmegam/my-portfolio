import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiAngular,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiVite,
  SiNetlify,
  SiScikitlearn,
  SiKeras,
} from "react-icons/si";
import { MdInsertChart } from "react-icons/md";

const skillData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: <FaPython size={24} /> },
      { name: "JavaScript", icon: <FaJs size={24} /> },
      { name: "HTML", icon: <FaHtml5 size={24} /> },
      { name: "CSS", icon: <FaCss3Alt size={24} /> },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", icon: <FaReact size={24} /> },
      { name: "Node.js", icon: <FaNodeJs size={24} /> },
      { name: "Express.js", icon: <SiExpress size={24} /> },
      { name: "Angular", icon: <SiAngular size={24} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
      { name: "Bootstrap", icon: <SiBootstrap size={24} /> },
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow size={24} /> },
      { name: "PyTorch", icon: <SiPytorch size={24} /> },
      { name: "Scikit-learn", icon: <SiScikitlearn size={24} /> },
      { name: "Keras", icon: <SiKeras size={24} /> },
      { name: "NumPy", icon: <SiNumpy size={24} /> },
      { name: "Pandas", icon: <SiPandas size={24} /> },
      { name: "OpenCV", icon: <SiOpencv size={24} /> },
      { name: "Matplotlib", icon: <MdInsertChart size={24} /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={24} /> },
      { name: "MySQL", icon: <SiMysql size={24} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt size={24} /> },
      { name: "GitHub", icon: <FaGithub size={24} /> },
      { name: "Postman", icon: <SiPostman size={24} /> },
      { name: "Vite", icon: <SiVite size={24} /> },
    ],
  },
  {
    category: "Hosting / Cloud",
    skills: [
      { name: "AWS", icon: <FaAws size={24} /> },
      { name: "Netlify", icon: <SiNetlify size={24} /> },
    ],
  },
];

export default function Skills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        px: { xs: 3, sm: 6, md: 12 },
        backgroundColor: "#0F0A1B",
        color: "#fff",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        sx={{
          mb: 6,
          textShadow: "0 0 8px #9B5CFF",
        }}
      >
        Skills
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {skillData.map((item, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#1A112D",
              borderRadius: "16px",
              boxShadow: "0 0 12px rgba(155, 92, 255, 0.2)",
              color: "#fff",
              width: isMobile ? "100%" : "45%",
              transition: "0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0 0 18px #9B5CFF",
              },
            }}
          >
<CardContent>
  <Typography
    variant="h6"
    fontWeight={600}
    sx={{
      color: "#C084FC",
      mb: 2,
      textShadow: "0 0 6px #A855F7",
    }}
  >
    {item.category}
  </Typography>

  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      rowGap: 2,
      columnGap: "4%",
      justifyContent: "flex-start",
    }}
  >
    {item.skills.map((skill, idx) => (
      <Box
        key={idx}
        sx={{
          flex: {
            xs: "0 0 48%",   // 2 per row on mobile
            sm: "0 0 30%",   // 3 per row on small tablets
            md: "0 0 22%",   // 4 per row on desktop
          },
          display: "flex",
          alignItems: "center",
          gap: 1,
          p: 1,
          borderRadius: "8px",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "#2B1D44",
            boxShadow: "0 0 10px #9B5CFF",
            transform: "scale(1.05)",
          },
        }}
      >
        <Box sx={{ color: "#9B5CFF" }}>{skill.icon}</Box>
        <Typography variant="body2" sx={{ color: "#d1d5db" }}>
          {skill.name}
        </Typography>
      </Box>
    ))}
  </Box>
</CardContent>


          </Card>
        ))}
      </Box>
    </Box>
  );
}
