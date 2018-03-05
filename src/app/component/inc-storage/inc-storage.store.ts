import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../service/storage.service';
import { StorageRecordModel } from '../../model/storage-record.model';

@Injectable()
export class IncStorageStore {

    record: StorageRecordModel;

    constructor(private ss: StorageService, private router: Router) {
        this.record = new StorageRecordModel();
    }

    submit = () => {
        this.ss.increaseStorage(this.record).subscribe(() => {
            this.router.navigate(['/dash-board']);
        });
    }
}
