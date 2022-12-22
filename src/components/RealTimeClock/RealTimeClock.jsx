import React from 'react';
import useRealTime from '../../hooks/useRealTime';

import styles from './RealTimeClock.module.css'

const RealTimeClock = () => {
    const time = useRealTime();
    return <div className={styles.div}>{time}</div>;
};

export default RealTimeClock;
