import { observable } from 'mobx';

export class StorageModel {
    @observable pno = ''; // 型号
    dot = ''; // 周期
    amount = ''; // 数量
    loc = ''; // 库位

    constructor() {
    }

}
