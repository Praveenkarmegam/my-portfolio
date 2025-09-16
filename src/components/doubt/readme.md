how to add space only after the first row of tools (chips) and not between every row.

We’ll manually split the chips into two rows:

First row: first 4–5 chips

Second row: remaining chips

Then apply mb (margin-bottom) only between these two rows
<Box>
  {/* First row of chips */}
  <Stack
    direction="row"
    spacing={1}
    flexWrap="wrap"
    sx={{ mb: 1.5 }} // 👈 Only margin below first row
  >
    {project.stack.slice(0, 4).map((tech, idx) => (
      <Chip
        key={idx}
        icon={techIcons[tech]}
        label={tech}
        size="small"
        variant="outlined"
      />
    ))}
  </Stack>

  {/* Second row of chips */}
  <Stack
    direction="row"
    spacing={1}
    flexWrap="wrap"
  >
    {project.stack.slice(4).map((tech, idx) => (
      <Chip
        key={idx}
        icon={techIcons[tech]}
        label={tech}
        size="small"
        variant="outlined"
      />
    ))}
  </Stack>
</Box>
