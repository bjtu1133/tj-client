import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IncStorageComponent } from './component/inc-storage/inc-storage.component';
import { StorageTableComponent } from './component/storage-table/storage-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/dash-board', pathMatch: 'full' },
  { path: 'dash-board', component: StorageTableComponent },
  { path: 'inc-storage', component: IncStorageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
