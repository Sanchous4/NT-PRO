import {useCallback, useEffect, useRef} from 'react';

export default function useOutsideClick(callback) {
    const elementRef = useRef(null);

    const checkIsOutsideClick = useCallback(
        (event) => {
            if (elementRef.current && !elementRef.current.contains(event.target)) {
                callback();
            }
        },
        [callback]
    );

    useEffect(() => {
        document.addEventListener('click', checkIsOutsideClick, true);
        return () => {
            document.removeEventListener('click', checkIsOutsideClick, true);
        };
    }, [checkIsOutsideClick]);

    return elementRef;
}
