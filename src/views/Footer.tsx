import { Stack } from '@mui/material';

const currentYear = new Date().getFullYear();

const Footer = () => (
    <Stack
        component="footer"
        direction="row"
        justifyContent="center"
        padding="31px 0"
    >
        {'©'} {currentYear} forestammmp design
    </Stack>
);

export default Footer;
