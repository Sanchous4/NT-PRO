import {useEffect, useState} from 'react';
import {getRandomPrice} from '../utils';

export default function useRandomPrice(triggerForRefresh) {
    const [prices, setPrices] = useState(0);

    useEffect(() => {
        setPrices(getRandomPrice());
    }, [triggerForRefresh]);

    useEffect(() => {
        const timer = setInterval(() => {
            setPrices(getRandomPrice());
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return prices;
}
