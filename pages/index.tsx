import { Container } from '@mui/material';
import { Header, Intro, Skills, Education, Contacts, Footer } from 'views';

// https://kharnaa.com/
// https://blog.maed.ru/novice/kak-stat-smm-profi/?utm_campaign=1080481&utm_source=admitad&tagtag_uid=b866af133d12c87f689d833dd307e74c

const Index = () => {
    return (
        <Container maxWidth="md">
            <Header />
            <Intro />
            <Skills />
            <Education />
            <Contacts />
            <Footer />
        </Container>
    );
};

export default Index;
