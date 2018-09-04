import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class JsonReaderService {
  constructor(private http: HttpClient) {}

  readJson(url) {
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }
}
