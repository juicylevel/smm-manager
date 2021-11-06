import { Stack, Typography } from '@mui/material';
import { Section } from 'components';

const Contacts = () => (
    <Section>
        <Stack direction="column" spacing={10}>
            <Typography variant="h2">Контакты</Typography>
            <Typography>
                Тут будет форма: имя, mail или phone, сообщение.
            </Typography>
        </Stack>
    </Section>
);

export default Contacts;
