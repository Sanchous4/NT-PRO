import React, {useRef} from 'react';
import {observer} from 'mobx-react-lite';
import {ArchiveStore, ModalManager} from '../../stores';
import {useOutsideClick} from '../../hooks';

import {ReactComponent as Cross} from './cross.svg';

import styles from './MakeOrderModal.module.css';

const MakeOrderModal = observer(({buy, sell}) => {
    const inputVolumeRef = useRef(null);
    const modalForm = useOutsideClick(() => {
        ModalManager.closeModal('MakeOrderModal');
    });

    const {side, pair} = ArchiveStore.currentState;
    const price = side === 'BUY' ? buy : sell;

    const placeOrder = (event) => {
        event.preventDefault();
        if (inputVolumeRef.current.value > 0) {
            const volumeInfo = {
                price,
                volume: inputVolumeRef.current.value,
            };

            ArchiveStore.pushArchive(volumeInfo);
            ModalManager.closeModal('MakeOrderModal');
        } else {
            inputVolumeRef.current.value = '';
            inputVolumeRef.current.placeholder = 'Value is incorrect';
            inputVolumeRef.current.focus();
        }
    };

    const cancelOrder = () => {
        ModalManager.closeModal('MakeOrderModal');
    };

    if (!ModalManager.hasActiveModal('MakeOrderModal')) {
        return null;
    }

    return (
        <form className={styles.modal} onSubmit={placeOrder} ref={modalForm}>
            <div className={styles.modal__header}>
                <span>Make order</span>
                <button onClick={cancelOrder}>
                    <Cross />
                </button>
            </div>
            <div className={styles.modal__info}>
                <p>
                    <span
                        className={side === 'BUY' ? 'buy_theme' : 'sell_theme'}
                    >
                        {side}
                    </span>
                    <span>{price}</span>
                    <span>{pair}</span>
                </p>
                <div>
                    <label htmlFor='volume__input'>Volume</label>
                    <input
                        id='volume__input'
                        type='number'
                        step="0.0001"
                        ref={inputVolumeRef}
                    />
                </div>
                <div className={styles.modal__info__buttons}>
                    <input
                        className={styles.button_cancel}
                        onClick={cancelOrder}
                        type='button'
                        value={'Cancel'}
                    />
                    <input
                        className={styles.button_submit}
                        type='submit'
                        value={'Ok'}
                    />
                </div>
            </div>
        </form>
    );
});

export default MakeOrderModal;
