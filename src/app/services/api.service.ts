import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  constructor(public http: HttpClient) {}
  getTimelineData(url) {
    return new Promise(resolve => {
      this.http
        .get(url)
        .map(res => res)
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  downloadPdf(): any {
    const url = 'assets/a.pdf';
    return this.http
      .get(url, {
        responseType: 'blob'
      })
      .map(res => {
        return new Blob([res], { type: 'application/pdf' });
      });
  }
}
