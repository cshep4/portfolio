import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiUrl, RequestOptions} from '../utils/utils';

@Injectable()
export class ContactService {
  data: any;

  constructor(private http: HttpClient) {}

  sendEmail(data) {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json');

      const options: RequestOptions = { headers: headers, observe: 'response' };
      const body = this.createRequestBody(data);

      const url = apiUrl + 'email';

      console.log(url);

      this.http.post(url, JSON.stringify(body), options).subscribe(res => {
        data = res;

        const response = data.body;

        if (response.error) {
          reject('Could not send message, please try again. Alternatively, send me an email directly to chris_shepherd2@hotmail.com.');
        }

        if (!response.result || response.result.StatusCode < 200 || response.result.StatusCode >= 300) {
          reject('Could not send message, please try again. Alternatively, send me an email directly to chris_shepherd2@hotmail.com.');
        } else {
          resolve('Message sent successfully!');
        }
      }, (err) => {
        reject('Could not send message, please try again. Alternatively, send me an email directly to chris_shepherd2@hotmail.com.');
      });
    });
  }

  private createRequestBody(data) {
    return {
      'method': 'email.SendEmail',
      'params': [
        {
          'To': 'chris_shepherd2@hotmail.com',
          'From': data.inputEmail,
          'Sender': data.inputData,
          'Recipient': 'Chris Shepherd',
          'Subject': 'Portfolio Contact',
          'Content': data.inputMessage
        }
      ],
      'id': 0
    };
  }
}
