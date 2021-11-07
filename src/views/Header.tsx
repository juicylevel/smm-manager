import MenuIcon from '@mui/icons-material/Menu';
import { elementScrollIntoView } from 'seamless-scroll-polyfill';
import { useCallback } from 'react';
import { useShow } from 'hooks';
import { Drawer } from 'components';
import {
    AppBar,
    IconButton,
    List,
    ListItemButton,
    Stack,
    Toolbar,
} from '@mui/material';

const Header = () => {
    const [showMenu, onShowMenu, onCloseMenu] = useShow();
    const createMenuHandler = useCallback(
        (key: string) => {
            return () => {
                onCloseMenu();
                const anchor = document.getElementById(key);
                if (anchor) {
                    elementScrollIntoView(anchor, {
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center',
                    });
                }
            };
        },
        [onCloseMenu]
    );
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
                <List>
                    <ListItemButton onClick={createMenuHandler('intro')}>
                        Обо мне
                    </ListItemButton>
                    <ListItemButton onClick={createMenuHandler('skills')}>
                        Что я умею
                    </ListItemButton>
                    <ListItemButton onClick={createMenuHandler('education')}>
                        Сертификаты
                    </ListItemButton>
                    <ListItemButton onClick={createMenuHandler('contacts')}>
                        Контакты
                    </ListItemButton>
                </List>
            </Drawer>
        </AppBar>
    );
};

export default Header;
