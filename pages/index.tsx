import { Container, Typography, Grid } from '@mui/material';
import { Bullet, Section } from 'components';

// https://kharnaa.com/
// https://blog.maed.ru/novice/kak-stat-smm-profi/?utm_campaign=1080481&utm_source=admitad&tagtag_uid=b866af133d12c87f689d833dd307e74c

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
                <Grid container alignItems="center" height="100vh">
                    <Grid item container spacing={10}>
                        <Grid item>
                            <Typography variant="h2" gutterBottom>
                                Что я умею
                            </Typography>
                        </Grid>
                        <Grid item container spacing={6}>
                            <Grid item md={6}>
                                <Bullet title="Планировать">
                                    Определяю целевую аудиторию, формулирую цели
                                    и способы их достижения, разрабатываю план
                                    реализации выбранных способов.
                                </Bullet>
                            </Grid>
                            <Grid item md={6}>
                                <Bullet title="Оформлять">
                                    Самостоятельно или с привлечением дизайнеров
                                    оформляю страницы в соответствии с
                                    корпоративным стилем, добавляю необходимые
                                    элементы (описания, ссылки, фото и пр.).
                                </Bullet>
                            </Grid>
                            <Grid item md={6}>
                                <Bullet title="Наполнять">
                                    Составляю контент-план, в котором определены
                                    рубрики, темы, периодичность и частоту
                                    постов, соотношение информационных и
                                    рекламных постов. Самостоятельно, либо с
                                    помощью копирайтеров пишу материалы.
                                </Bullet>
                            </Grid>
                            <Grid item md={6}>
                                <Bullet title="Привлекать">
                                    Использую наиболее подходящие способы
                                    привлечения целевой аудитории. Здесь нужно
                                    текста дописать, не знаю что еще здесь
                                    полезного и умного написать.
                                </Bullet>
                            </Grid>
                            <Grid item md={6}>
                                <Bullet title="Мониторить">
                                    Отслеживаю, что пишут о компании вне страниц
                                    бренда — в других группах и сообществах. По
                                    итогам корректирую стратегию ведения
                                    аккаунта.
                                </Bullet>
                            </Grid>
                            <Grid item md={6}>
                                <Bullet title="Анализировать">
                                    Использую внутренние аналитические
                                    инструменты соцсетей. По итогам аналитики
                                    корректирую ведение аккаунта.
                                </Bullet>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Section>
        </Container>
    );
};

export default Index;
