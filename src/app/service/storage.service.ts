import { Injectable } from '@angular/core';
import * as mobx from 'mobx';
import { StorageRecordModel } from '../model/storage-record.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class StorageService {

  url = 'http://127.0.0.1:3000/api/storage';
  constructor(private http: HttpClient) { }

  increaseStorage =
    (record: StorageRecordModel) => {
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'text/html; charset=utf-8');
      return this.http.post(this.url, record, {headers: headers, observe: 'response', responseType: 'json'}).subscribe(data => {
        console.log(data);
      });
    }
}
