import {makeAutoObservable} from 'mobx';

import {getRealTimestamp} from '../utils';

class Archive {
    archive = [];
    currentState = {};

    constructor() {
        makeAutoObservable(this);
    }

    pushArchive(orderInfo) {
        this.archive.push({
            ...this.currentState,
            ...orderInfo,
            timestamp: getRealTimestamp(),
        });
    }

    setState(newState) {
        this.currentState = {...this.currentState, ...newState};
    }
}

export default new Archive();
