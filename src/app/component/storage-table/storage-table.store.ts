import { Injectable } from '@angular/core';
import { StorageService } from '../../service/storage.service';
import { StorageModel } from '../../model/storage.model';

import { action, observable } from 'mobx';

@Injectable()
export class StorageTableStore {

    storages: StorageModel[];

    setStorages = (storages: StorageModel[], ) => {
        this.storages = storages;
    }

    constructor(public ss: StorageService) {
    }

    onLoad = () => {
        this.ss.getStorages().subscribe(this.setStorages);
    }
}
