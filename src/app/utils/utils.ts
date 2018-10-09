import {HttpHeaders} from '@angular/common/http';

export interface RequestOptions {
  headers?: HttpHeaders | { [header: string]: string | Array<string> };
  observe?: any;
}

// export const apiUrl = 'http://localhost:1337/';
// export const apiUrl = 'https://portfolio-be-api.herokuapp.com/';
export const apiUrl = 'https://kcu4krtu92.execute-api.us-east-1.amazonaws.com/dev/';

