import { useScrollTrigger, Box, Zoom } from '@mui/material';
import { useCallback } from 'react';

const ScrollToTop: React.FC = ({ children }) => {
    const trigger = useScrollTrigger({
        target: typeof window !== 'undefined' ? window : undefined,
        disableHysteresis: true,
        threshold: 300,
    });

    const handleClick = useCallback(() => {
        const anchor = document.documentElement;
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, []);

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 20, right: 20 }}
            >
                {children}
            </Box>
        </Zoom>
    );
};

export default ScrollToTop;
