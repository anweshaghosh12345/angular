import { Component } from '@angular/core';

@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.css']
})
export class FormComponentsComponent {
  submit(){
    console.log("Form submitted",)
  }
}
