import { Component, OnInit, Inject } from '@angular/core';
import { IncStorageStore } from './inc-storage.store';

@Component({
  selector: 'app-inc-storage',
  templateUrl: './inc-storage.component.html',
  styleUrls: ['./inc-storage.component.css'],
  providers: [IncStorageStore]
})

export class IncStorageComponent implements OnInit {

  title: string ;
  constructor( public store: IncStorageStore) {
    this.title = '入库';
  }

  ngOnInit() {

  }

  onSubmit = () => {
    this.store.submit();
  }
}
