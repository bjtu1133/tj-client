import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { IncStorageComponent } from './component/inc-storage/inc-storage.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StorageTableComponent } from './component/storage-table/storage-table.component';
import { StorageService } from './service/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    IncStorageComponent,
    StorageTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
