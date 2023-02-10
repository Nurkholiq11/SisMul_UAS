import { useState } from 'react';

// third party
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Grid,
  Alert,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  Stack,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';

// project import
import AnimateButton from 'ui-component/button/AnimateButton';

export default function LoginAdminTeacher() {
  const theme = useTheme();

  // login
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Typography variant="h3">Masukkan Kode</Typography>
      <Stack spacing={4}>
        {/* alert */}
        {message}
        <form noValidate>
          <Stack spacing={2}>
            {/* email */}
            <FormControl fullWidth>
              <OutlinedInput
                id="email"
                value={form.email}
                onChange={handleChange}
                name="email"
                placeholder="Email"
                type="email"
                sx={{
                  '& :-webkit-autofill': {
                    transitionDelay: '9999s',
                  },
                }}
                required
                autoComplete="off"
              />
            </FormControl>

            {/* password */}
            <FormControl fullWidth>
              <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end" size="large">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="Password"
                sx={{
                  '& :-webkit-autofill': {
                    transitionDelay: '9999s',
                  },
                }}
              />
            </FormControl>
          </Stack>

          <Box sx={{ mt: 4 }}>
            <AnimateButton>
              <LoadingButton
                disableElevation
                fullWidth
                loading={loading}
                loadingPosition="end"
                endIcon={<LoginIcon />}
                size="large"
                type="submit"
                variant="contained"
                sx={{
                  fontWeight: '700',
                  letterSpacing: '0.1rem',
                  backgroundColor: '#00b4ff !important',
                }}
              >
                Login
              </LoadingButton>
            </AnimateButton>
          </Box>
        </form>
      </Stack>
    </>
  );
}
