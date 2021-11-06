import { Close } from '@mui/icons-material';
import {
    Drawer as MuiDrawer,
    DrawerProps as MuiDrawerProps,
    Box,
    IconButton,
    Stack,
} from '@mui/material';

export type DrawerProps = MuiDrawerProps & {
    width?: string;
};

const Drawer: React.FC<DrawerProps> = ({
    width = '40%',
    children,
    onClose,
    ...rest
}) => {
    const handleClose = (event: React.MouseEvent) => {
        onClose && onClose(event, 'escapeKeyDown');
    };

    const PaperProps = {
        ...rest.PaperProps,
        style: {
            ...rest.PaperProps?.style,
            width,
        },
    };

    return (
        <MuiDrawer {...rest} PaperProps={PaperProps} onClose={onClose}>
            <Stack height="100%" direction="column">
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-end"
                    padding="16px 24px"
                >
                    <IconButton size="small" onClick={handleClose}>
                        <Close />
                    </IconButton>
                </Stack>
                <Box padding="24px" height="100%">
                    {children}
                </Box>
            </Stack>
        </MuiDrawer>
    );
};

export default Drawer;
