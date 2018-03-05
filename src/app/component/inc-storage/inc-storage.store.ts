import { Injectable } from '@angular/core';
import { StorageService } from '../../service/storage.service';
import { StorageRecordModel } from '../../model/storage-record.model';

import { observable } from 'mobx';

@Injectable()
export class IncStorageStore {

    @observable
    record: StorageRecordModel;

    constructor(public ss: StorageService) {
        this.record = new StorageRecordModel();
    }

    submit = () => {
        this.ss.increaseStorage(this.record);
    }
}
