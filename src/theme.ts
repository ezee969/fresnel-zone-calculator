import { createTheme } from '@mui/material/styles';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#00acc1',
    },
    secondary: {
      main: '#fafafa',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& .MuiOutlinedInput-input': {
              color: '#fafafa',
              fontWeight: 500,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: '#fafafa',
          fontWeight: 500,
        },
        icon: {
          fill: '#00acc1',
        },
      },
    },
  },
});

export default theme;
