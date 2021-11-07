import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {},
            },
        },
    },
});

export default theme;
