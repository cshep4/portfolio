import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiUrl, RequestOptions} from '../utils/utils';

@Injectable()
export class UserCountService {
  data: any;

  constructor(private http: HttpClient) {}

  getUserCount(appName) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json');

      const options: RequestOptions = { headers: headers, observe: 'response' };

      const body = this.createRequestBody(appName);

      const url = apiUrl + 'predictor';

      this.http.post(url, JSON.stringify(body), options).subscribe((res: any) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  private createRequestBody(appName) {
    return {
      'method': 'GetUserCount',
      'params': `{
          \"AppName\": \"` + appName + `\"
      }`
    };
  }
}
