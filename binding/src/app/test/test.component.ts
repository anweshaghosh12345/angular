import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
    Welcome {{name}}
    </h2>
    <h2>
    {{2+2}}
    </h2>
    <h2>{{"Welcome "+ name1}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>{{siteUrl}}</h2>

    <input [id]="myId" type="text" value="Nesha">
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Nesha">

    <h2 class="text-success">Anwesha Ghosh</h2>

    <h2 [class]="successClass" >Anwesh</h2>

    <h3 [class.text-danger]="hasError" >Error</h3>

    <h2 [ngClass]="messageClasses">Codev</h2>

    <--style binding-->
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>

    <h2 [style.color]="highlightColor">Style Binding 2</h2>


    <h2 [ngStyle]="titleStyles"> Style Binding 3 </h2>

<--Event Binding-->
<pre></pre>

<button (click)="onClick($event)"> Greet</button>
{{greeting}}

  `,
  styles: [
    `
    .text-success{
      color:green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }


    
    `
  ]
})
export class TestComponent implements OnInit{
  
  public name="Anwesha";
  public name1="Esha";
  public siteUrl=window.location.href;
  public myId="testId";
  public isDisabled=true;

  public successClass="text-success"; 

  public hasError=true;
  public isSpecial=true;

  public messageClasses={
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-special": this.isSpecial,
  }


  public highlightColor="orange";

  public titleStyles={
    color:"blue",
    fontStyle: "italic"
  }

  public greeting="";

    constructor(){}
    ngOnInit() {        
    }


    onClick(event: any){
      console.log(event);
      this.greeting="Welcome to Anwesha's page";
    }

    greetUser(){
      return "Hello "+this.name;
    }
}
