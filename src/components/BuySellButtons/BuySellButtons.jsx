import React from 'react';
import {ArchiveStore, ModalManager} from '../../stores';

import styles from './BuySellButtons.module.css';

const BuySellButtons = ({buy, sell}) => {
    const onMakeOrder = (side) => {
        ArchiveStore.setState({side});
        ModalManager.openModal('MakeOrderModal');
    };

    return (
        <div className={styles.buttons__wrapper}>
            <button onClick={() => onMakeOrder('BUY')} className={'buy_theme'}>
                <span>BUY</span>
                <span>{buy}</span>
            </button>
            <button
                onClick={() => onMakeOrder('SELL')}
                className={'sell_theme'}
            >
                <span>SELL</span>
                <span>{sell}</span>
            </button>
        </div>
    );
};

export default BuySellButtons;
