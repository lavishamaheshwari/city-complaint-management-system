import { Box, Button, TextField, Typography } from "@mui/material";

const SignUp = () => {
  return (
    <Box
      maxWidth={480}
      margin="40px auto"
      padding={3}
      boxShadow={2}
      borderRadius={2}
    >
      <Typography variant="h5" gutterBottom>
        SignUp
      </Typography>

      <TextField label="Full Name" fullWidth margin="normal" required />

      <TextField label="Email" fullWidth margin="normal" required />

      <TextField
        label="password"
        type="password"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label=" confirm password"
        type="password"
        fullWidth
        margin="normal"
        required
      />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button type="submit" variant="contained">
          SignUp
        </Button>
      </Box>
    </Box>
  );
};
export default SignUp;
