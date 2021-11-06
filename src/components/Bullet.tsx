import { Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

type BulletProps = {
    head?: ReactNode;
    title?: ReactNode;
};

const Bullet: React.FC<BulletProps> = ({ head, title, children }) => {
    return (
        <Stack direction="column" spacing={2}>
            {head && <Typography variant="h2">{title}</Typography>}
            {title && (
                <Typography
                    variant="h6"
                    fontWeight="600"
                    sx={{ textTransform: 'uppercase' }}
                >
                    {title}
                </Typography>
            )}
            <Typography>{children}</Typography>
        </Stack>
    );
};

export default Bullet;
