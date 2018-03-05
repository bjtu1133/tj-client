import { Component, OnInit } from '@angular/core';
import { StorageTableStore } from './storage-table.store';
@Component({
  selector: 'app-storage-table',
  templateUrl: './storage-table.component.html',
  styleUrls: ['./storage-table.component.css'],
  providers: [StorageTableStore]
})

export class StorageTableComponent implements OnInit {

  displayedColumns = ['pno', 'dot', 'loc', 'amount'];
  dataSource= [];
  constructor(public store: StorageTableStore) { }

  ngOnInit() {
    this.dataSource = [{
      pno: 'ACB',
      dot: 'asd',
      loc: 'asd',
      amount: 'axf'
    }];
    this.store.onLoad();
  }

}
