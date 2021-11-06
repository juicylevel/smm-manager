import Image from 'next/image';
import { Container, Typography, Grid, Stack, Paper } from '@mui/material';
import { Bullet, Section } from 'components';
import { Box } from '@mui/system';
import { Header } from 'views';

// https://kharnaa.com/
// https://blog.maed.ru/novice/kak-stat-smm-profi/?utm_campaign=1080481&utm_source=admitad&tagtag_uid=b866af133d12c87f689d833dd307e74c

const Index = () => {
    return (
        <Container maxWidth="md">
            <Header />
            <Section sx={{ height: '100vh' }}>
                <Grid container alignItems="center" height="100%">
                    <Grid item container spacing={10}>
                        <Grid item>
                            <Typography variant="h2">Привет!</Typography>
                            <Typography variant="h2">Я Александра.</Typography>
                            <Typography variant="h2">
                                Я SMM-специалист.
                            </Typography>
                        </Grid>
                        <Grid item container columnSpacing={8} rowSpacing={4}>
                            <Grid item md={6} sm={12}>
                                Я — специалист по продвижению в соцсетях.
                                <br />
                                Преимущественно работаю с аккаунтами в
                                Instagram.
                            </Grid>
                            <Grid item md={6} sm={12}>
                                Умею погружаться в разные сферы, ценю своё и
                                ваше время и стремлюсь к тому, чтобы мою работу
                                запоминали, а ваш бренд — любили.
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Section>
            <Section>
                <Grid container spacing={10}>
                    <Grid item>
                        <Typography variant="h2">Что я умею</Typography>
                    </Grid>
                    <Grid item container spacing={6}>
                        <Grid item md={6}>
                            <Bullet title="Планировать">
                                Определяю целевую аудиторию, формулирую цели и
                                способы их достижения, разрабатываю план
                                реализации выбранных способов.
                            </Bullet>
                        </Grid>
                        <Grid item md={6}>
                            <Bullet title="Оформлять">
                                Самостоятельно или с привлечением дизайнеров
                                оформляю страницы в соответствии с корпоративным
                                стилем, добавляю необходимые элементы (описания,
                                ссылки, фото и пр.).
                            </Bullet>
                        </Grid>
                        <Grid item md={6}>
                            <Bullet title="Наполнять">
                                Составляю контент-план, в котором определены
                                рубрики, темы, периодичность и частоту постов,
                                соотношение информационных и рекламных постов.
                                Самостоятельно, либо с помощью копирайтеров пишу
                                материалы.
                            </Bullet>
                        </Grid>
                        <Grid item md={6}>
                            <Bullet title="Привлекать">
                                Использую наиболее подходящие способы
                                привлечения целевой аудитории. Здесь нужно
                                текста дописать, не знаю что еще здесь полезного
                                и умного написать.
                            </Bullet>
                        </Grid>
                        <Grid item md={6}>
                            <Bullet title="Мониторить">
                                Отслеживаю, что пишут о компании вне страниц
                                бренда — в других группах и сообществах. По
                                итогам корректирую стратегию ведения аккаунта.
                            </Bullet>
                        </Grid>
                        <Grid item md={6}>
                            <Bullet title="Анализировать">
                                Использую внутренние аналитические инструменты
                                соцсетей. По итогам аналитики корректирую
                                ведение аккаунта.
                            </Bullet>
                        </Grid>
                    </Grid>
                </Grid>
            </Section>
            <Section>
                <Stack direction="column" spacing={10}>
                    <Typography variant="h2" textAlign="center">
                        Никогда не перестаю учиться
                    </Typography>
                    <Paper square elevation={5}>
                        <Image
                            src="/certificate.jpeg"
                            alt="Сертификат SMM продвижение"
                            width="1600"
                            height="1131"
                        />
                    </Paper>
                </Stack>
            </Section>
            <Section>
                <Stack direction="column" spacing={10}>
                    <Typography variant="h2">Контакты</Typography>
                    <Typography>
                        Тут будет форма: имя, mail или phone, сообщение.
                    </Typography>
                </Stack>
            </Section>
        </Container>
    );
};

export default Index;
