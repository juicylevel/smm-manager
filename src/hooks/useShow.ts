import { useState, useCallback } from 'react';

type Props = [boolean, () => void, () => void, () => void];

const useShow = (defaultShow = false): Props => {
    const [show, setShow] = useState(defaultShow);

    const onShow = useCallback(() => setShow(true), []);
    const onClose = useCallback(() => setShow(false), []);
    const onToggle = useCallback(
        () => setShow((prevShow) => !prevShow),
        [show]
    );

    return [show, onShow, onClose, onToggle];
};

export default useShow;
