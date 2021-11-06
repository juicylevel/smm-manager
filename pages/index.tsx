import { Container, Typography, Grid } from '@mui/material';
import { Section } from 'components';

// https://kharnaa.com/
const Index = () => {
    return (
        <Container maxWidth="md">
            <Section>
                <Grid container alignItems="center" height="100vh">
                    <Grid item container spacing={10}>
                        <Grid item>
                            <Typography variant="h2">Привет!</Typography>
                            <Typography variant="h2">Я Александра.</Typography>
                            <Typography variant="h2">
                                Я SMM-специалист.
                            </Typography>
                        </Grid>
                        <Grid item container columnSpacing={8} rowSpacing={4}>
                            <Grid item md={6} sm={12} xs={12}>
                                Я — специалист по продвижению в соцсетях.
                                <br />
                                Преимущественно работаю с аккаунтами в
                                Instagram.
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                Умею погружаться в разные сферы, ценю своё и
                                ваше время и стремлюсь к тому, чтобы мою работу
                                запоминали, а ваш бренд — любили.
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Section>
        </Container>
    );
};

export default Index;
