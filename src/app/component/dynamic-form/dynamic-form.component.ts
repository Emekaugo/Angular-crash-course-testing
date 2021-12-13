import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor() { }
  @Input()formConfig = []
  form: FormGroup;
  userGroup = {};

  onSubmit(){
    console.log(this.form.value);
  }
  ngOnInit(){
    for(let config of this.formConfig){
      this.userGroup[config.name] = new FormControl(config.value || '')
    }
    this.form = new FormGroup(this.userGroup);
  }

}
