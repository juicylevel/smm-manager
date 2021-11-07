import Image from 'next/image';
import { Paper, Stack, Typography } from '@mui/material';
import { Section } from 'components';

const Education = () => (
    <Section id="education">
        <Stack direction="column" spacing={10}>
            <Typography variant="h2" textAlign="center">
                Никогда не перестаю учиться
            </Typography>
            <a
                href="https://smmacademiya.ru"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Paper component={Stack} square elevation={5}>
                    <Image
                        src="/certificate.jpeg"
                        alt="Сертификат SMM продвижение"
                        width="1600"
                        height="1131"
                    />
                </Paper>
            </a>
        </Stack>
    </Section>
);

export default Education;
