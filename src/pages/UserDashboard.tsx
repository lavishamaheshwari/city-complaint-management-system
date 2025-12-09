import { Box, Button, Paper, Stack, Typography } from "@mui/material";

const UserDashboard = () => {
  return (
    <Box
      maxWidth={700}
      margin="40px auto "
      padding={3}
      boxShadow={2}
      borderRadius={2}
    >
      <Typography variant="h4" gutterBottom>
        UserDashboard
      </Typography>

      <Stack direction="row" spacing={2} mb={3}>
        <Button variant="contained"> Create Complaints</Button>
        <Button variant="outlined"> view all complaints</Button>
      </Stack>

      <Paper elevation={2} sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          Recent Complaints
        </Typography>

        <Typography color="text.secondary">
          No complaints found. Create your first complaint using the button
          above.
        </Typography>
      </Paper>
    </Box>
  );
};
export default UserDashboard;
