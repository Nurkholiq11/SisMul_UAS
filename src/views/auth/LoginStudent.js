import React from 'react';

// third party
import { Stack, TextField, Button, Typography } from '@mui/material';

export default function LoginStudent() {
  return (
    <>
      <Typography variant="h3">Masukkan Kode</Typography>
      {/* form */}
      <form noValidate>
        <Stack gap={3}>
          <TextField
            placeholder="Kode Tes"
            fullWidth
            InputProps={{
              inputProps: {
                style: { textAlign: 'center' },
              },
            }}
          />
          <Button variant="contained" sx={{ color: '#fff' }}>
            Masuk
          </Button>
        </Stack>
      </form>
    </>
  );
}
