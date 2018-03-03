import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-inc-storage',
  templateUrl: './inc-storage.component.html',
  styleUrls: ['./inc-storage.component.css']
})
export class IncStorageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myControl = () => {
    console.log('my control');
  }
}
