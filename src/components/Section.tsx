import { Box } from '@mui/system';

const Section: React.FC = ({ children }) => {
    return (
        <Box component="section" sx={{ height: '100vh' }}>
            {children}
        </Box>
    );
};

export default Section;
