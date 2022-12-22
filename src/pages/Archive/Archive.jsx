import React from 'react';
import {observer} from 'mobx-react-lite';

import {ArchiveStore} from '../../stores';
import {OrdersTable} from '../../components';

const titles = ['side', 'price', 'pair', 'volume', 'timestamp'];

const Archive = observer(() => {
    return <OrdersTable columnTitles={titles} data={ArchiveStore.archive} />;
});

export default Archive;
