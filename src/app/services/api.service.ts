import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(public http:HttpClient) { }
  getTimelineData(url){
     return new Promise(resolve => {
            this.http.get(url).map(res => res)
                .subscribe(data => {
                    resolve(data);
                });
        });
  }

   downloadPdf(): any {
    let url='assets/a.pdf';
    let headers = new HttpHeaders();
    headers.append('Authorization', 'JWT ' + localStorage.getItem('id_token'));
    return this.http.get(url,{
            headers: headers,
            responseType: 'blob'
    }).map(
        (res) => {
            return new Blob([res], { type: 'application/pdf' })
        })

}
}

