import Image from 'next/image';
import { Paper, Stack, Typography } from '@mui/material';
import { Section } from 'components';

const Education = () => (
    <Section>
        <Stack direction="column" spacing={10}>
            <Typography variant="h2" textAlign="center">
                Никогда не перестаю учиться
            </Typography>

            <Paper component={Stack} square elevation={5}>
                <a
                    href="https://smmacademiya.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/certificate.jpeg"
                        alt="Сертификат SMM продвижение"
                        width="1600"
                        height="1131"
                    />
                </a>
            </Paper>
        </Stack>
    </Section>
);

export default Education;
