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

      console.log(body);

      const url = apiUrl + 'email';

      this.http.post(url, JSON.stringify(body), options).subscribe((res: any) => {
        if (res.status < 200 || res.status >= 300) {
          reject('Could not send message, please try again. Alternatively, send me an email directly to me@chrisshhepherd.io.');
        } else {
          resolve('Message sent successfully!');
        }
      }, (err) => {
        reject('Could not send message, please try again. Alternatively, send me an email directly to me@chrisshhepherd.io.');
      });
    });
  }

  private createRequestBody(data) {
    if (data.appName) {
      return this.createAppFeedbackBody(data);
    } else {
      return this.createPortfolioContactBody(data);
    }
  }

  private createAppFeedbackBody(data) {
    return {
      'method': 'SendEmail',
      'params': `{
          \"To\": \"me@chrisshhepherd.io\",
          \"From\": \"` + data.inputEmail + `\",
          \"Sender\": \"` + data.inputName + `\",
          \"Recipient\": \"Chris Shepherd\",
          \"Subject\": \"` + data.appName + ` Feedback\",
          \"Content\": \"` + data.inputMessage + `\"
      }`
    };
  }

  private createPortfolioContactBody(data) {
    return {
      'method': 'SendEmail',
      'params': `{
          \"To\": \"me@chrisshhepherd.io\",
          \"From\": \"` + data.inputEmail + `\",
          \"Sender\": \"` + data.inputName + `\",
          \"Recipient\": \"Chris Shepherd\",
          \"Subject\": \"Portfolio Contact\",
          \"Content\": \"` + data.inputMessage + `\"
      }`
    };
  }
}
