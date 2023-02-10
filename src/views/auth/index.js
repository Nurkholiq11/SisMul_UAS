import { useState } from 'react';

// third party
import { useTheme } from '@mui/material/styles';
import { Grid, Box, Stack, TextField, Button, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/Card/MainCard';

// page
import LoginStudent from './LoginStudent';
import LoginAdminTeacher from './LoginAdminTeacher';

// assets
import BackgroundAuth from 'assets/images/auth/background.jpg';

export default function Auth() {
  const theme = useTheme();

  // login type
  let [loginType, setLoginType] = useState(1);
  const handleChangeLoginType = () => {
    if (loginType === 0) {
      setLoginType(1);
    } else {
      setLoginType(0);
    }
  };

  return (
    <Grid container sx={{ height: '100vh', backgroundImage: `url(${BackgroundAuth})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <Grid item xs={12} justifyContent="center" alignItems="center">
        <Stack justifyContent="center" alignItems="center" height="100vh" gap={10}>
          <Typography variant="h1" sx={{ color: '#fff' }} mt={-10}>
            Kuiz Pembelajaran
          </Typography>
          <MainCard sx={{ backgroundColor: theme.palette.background.white, width: '50%' }}>
            <Stack gap={4} textAlign="center">
              {loginType === 0 ? <LoginStudent /> : <LoginAdminTeacher />}
              <Button onClick={handleChangeLoginType}>{loginType === 0 ? 'Masuk sebagai Admin / Guru' : 'Masuk sebagai Siswa'}</Button>
            </Stack>
          </MainCard>
        </Stack>
      </Grid>
    </Grid>
  );
}
