import { Box, BoxProps } from '@mui/system';

const Section: React.FC<BoxProps> = ({ sx, ...rest }) => {
    return (
        <Box
            component="section"
            sx={{
                padding: '80px 0',
                '&:not(:last-child)': {
                    borderBottom: '1px solid black',
                },
                ...sx,
            }}
            {...rest}
        />
    );
};

export default Section;
