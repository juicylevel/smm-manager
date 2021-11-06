import { Container, Typography, Box, Button } from '@mui/material';

// https://kharnaa.com/
const Index = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    SMM-специалист Александра
                </Typography>
                <Button variant="outlined">Meoow</Button>
            </Box>
        </Container>
    );
};

export default Index;
