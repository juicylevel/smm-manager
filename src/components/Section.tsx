import { Box } from '@mui/system';

const Section: React.FC = ({ children }) => {
    return (
        <Box
            component="section"
            sx={{
                height: '100vh',
                '&:not(:last-child)': {
                    borderBottom: '1px solid black',
                },
            }}
        >
            {children}
        </Box>
    );
};

export default Section;
