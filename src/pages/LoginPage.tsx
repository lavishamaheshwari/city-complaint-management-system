import { Box, Button, Link, TextField, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <Box
      maxWidth={480}
      margin="40px auto"
      padding={3}
      boxShadow={2}
      borderRadius={2}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>

      <TextField label="Email" fullWidth margin="normal" required />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        required
      />

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <Button type="submit" variant="contained">
          Login
        </Button>
        <Link>Create an account</Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
