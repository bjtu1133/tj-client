import { observable } from 'mobx';
import { StorageModel } from './storage.model';

export class StorageRecordModel {
    constructor () {
    }

    storage = new StorageModel();
    source = '';
    opr = ''; // 经手人
    date = '';
}
