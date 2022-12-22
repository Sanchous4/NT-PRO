import {useEffect, useState} from 'react';
import {getRealTime} from '../utils';

export default function useRealTime() {
    const [time, setTime] = useState(() => getRealTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getRealTime());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return time;
}
