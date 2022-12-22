import React, {useEffect, useState} from 'react';
import {ArchiveStore} from '../../stores';

import styles from './PairSelect.module.css';

const pairs = ['USD/CAD_TOM', 'USD/RUB_SPOT', 'EUR/USD_SPOT'];

const PairSelect = () => {
    const [pair, setPair] = useState(
        ArchiveStore.currentState?.pair || pairs[0]
    );

    const changeSelect = (event) => {
        setPair(event.target.value);
    };

    useEffect(() => {
        ArchiveStore.setState({pair});
    }, [pair]);

    return (
        <select className={styles.select} onChange={changeSelect} value={pair}>
            {pairs.map((pair) => (
                <option key={pair} value={pair}>
                    {pair}
                </option>
            ))}
        </select>
    );
};

export default PairSelect;
