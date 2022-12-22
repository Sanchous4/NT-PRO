import {makeAutoObservable} from 'mobx';

class ModalManager {
    activeModals = [];


    constructor() {
        makeAutoObservable(this);
    }

    openModal(id) {
        this.activeModals.push(id);
    }

    hasActiveModal(id) {
        return this.activeModals.includes(id)
    }

    closeModal(id) {
        this.activeModals = this.activeModals.filter(modalId => modalId !== id);
    }
}

export default new ModalManager();
