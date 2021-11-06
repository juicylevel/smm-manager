import { AppBar, IconButton, Stack, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useShow } from 'hooks';
import { Drawer } from 'components';

const Header = () => {
    const [showMenu, onShowMenu, onCloseMenu] = useShow();
    return (
        <AppBar position="fixed" elevation={0} color="transparent">
            <Stack>
                <Toolbar sx={{ alignSelf: 'flex-end' }}>
                    <IconButton
                        color="primary"
                        size="large"
                        onClick={onShowMenu}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Toolbar>
            </Stack>
            <Drawer anchor="right" open={showMenu} onClose={onCloseMenu}>
                Menu
            </Drawer>
        </AppBar>
    );
};

export default Header;
