import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const Contact = () => {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("❌ Failed to send message. Please try again.");
        console.error(error);
      }
    );
};


  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 6 },
        backgroundColor: "#0F0A1B",
        color: "#fff",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          textShadow: "0 0 8px #9B5CFF",
        }}
      >
        Contact Me
      </Typography>

      <Box
        component={Paper}
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: "720px",
          mx: "auto",
          p: { xs: 3, sm: 5 },
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 20px rgba(155, 92, 255, 0.15)",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: "#E2E8F0",
            mb: 3,
            textAlign: "center",
          }}
        >
          Send a Message
        </Typography>

        <Box
          component="form"
          ref={form}
          onSubmit={sendEmail}
          noValidate
          autoComplete="off"
        >
          <TextField
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
            margin="normal"
            size="small"
            InputLabelProps={{ style: { color: "#9ca3af" } }}
            InputProps={{
              sx: {
                fontSize: 14,
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: 2,
              },
            }}
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            size="small"
            InputLabelProps={{ style: { color: "#9ca3af" } }}
            InputProps={{
              sx: {
                fontSize: 14,
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: 2,
              },
            }}
          />
          <TextField
            fullWidth
            name="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            size="small"
            InputLabelProps={{ style: { color: "#9ca3af" } }}
            InputProps={{
              sx: {
                fontSize: 14,
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: 2,
              },
            }}
          />

          <Box textAlign="left" mt={3}>
            <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{
                textTransform: "none",
                px: 2,
                py: 0.6,
                fontSize: "0.85rem",
                background: "linear-gradient(135deg, #9B5CFF, #6EE7B7)",
                color: "#fff",
                boxShadow: "0 0 15px #9B5CFF88",
                "&:hover": {
                  background: "linear-gradient(135deg, #6EE7B7, #9B5CFF)",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
