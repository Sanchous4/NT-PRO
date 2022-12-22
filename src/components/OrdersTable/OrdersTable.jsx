import React from 'react';

import styles from './OrdersTable.module.css';

const OrdersTable = ({columnTitles, data}) => {
    return (
        <table className={styles.table}>
            <thead className={styles.table__header}>
                <tr>
                    {columnTitles.map((title) => (
                        <th key={title}>{title}</th>
                    ))}
                </tr>
            </thead>
            <tbody className={styles.table__body}>
                {data.map((order, index) => (
                    <tr key={index}>
                        {columnTitles.map((title) => {
                            const sideClass =
                                title === 'side' &&
                                (order[title] === 'BUY'
                                    ? 'buy_theme'
                                    : 'sell_theme');

                            return (
                                <td
                                    key={`${title}_{index}`}
                                    className={sideClass || undefined}
                                >
                                    {order[title]}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default OrdersTable;
