import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit() {
  }
  downloadCSVFile(){
    this.api.downloadPdf().subscribe(
        (res) => {      
           FileSaver.saveAs(res,'resume.pdf')
        }
    );
}
}
