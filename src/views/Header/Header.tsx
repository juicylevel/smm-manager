import { AppBar, IconButton, Stack, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
        >
            <Stack>
                <Toolbar sx={{ alignSelf: 'flex-end' }}>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Stack>
        </AppBar>
    );
};

export default Header;
