import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-my-contact',
  templateUrl: './my-contact.component.html',
  styleUrls: ['./my-contact.component.css']
})
export class MyContactComponent implements OnInit {

  public contactForm: FormGroup;
  lat: number = 28.569587;
  lng: number = 77.382519;
  constructor(public fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      subject: [""],
      email: ["", Validators.required],
      message: ["", Validators.required]
    });
  }

  ngOnInit() {
  }
  submitMessage(event) {
    console.log(event);
  }
}
//AIzaSyDaaYHYTNtCEt1kovTHPyNLo0CAEexLACM
