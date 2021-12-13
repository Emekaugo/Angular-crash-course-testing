import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  text="form-review page";
  contactForm: FormGroup;
  contact={
    name:'',
    email:'',
    text:'',
  };
  submitted=false;

  constructor()
  {
    this.createform();
   }

   createform():void{
     this.contactForm=new FormGroup({

      'name':new FormControl(this.contact.name, [
          Validators.required,
          Validators.maxLength(9),
      ]),

      'email':new FormControl(this.contact.email, [
        Validators.required,
        Validators.email,
    ]),

    'text':new FormControl(this.contact.text, Validators.required)

     });
   }

   onSubmit(): void{
     this.submitted=true;
   }

  ngOnInit(): void {
  }

}
