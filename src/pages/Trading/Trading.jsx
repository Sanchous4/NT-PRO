import React from 'react';
import {observer} from 'mobx-react-lite';
import {ArchiveStore} from '../../stores';
import {useRandomPrice} from '../../hooks';

import {BuySellButtons, RealTimeClock, MakeOrderModal} from '../../components';
import {PairSelect} from '../../components';

import styles from './Trading.module.css';

const Trading = observer(() => {
    const priceProps = useRandomPrice(ArchiveStore.currentState.pair);

    return (
        <div className={styles.div}>
            <RealTimeClock />
            <PairSelect />
            <BuySellButtons {...priceProps} />
            <MakeOrderModal {...priceProps} />
        </div>
    );
});

export default Trading;
