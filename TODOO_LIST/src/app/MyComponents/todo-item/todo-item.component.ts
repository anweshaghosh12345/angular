import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  implements OnInit{
  @Input() todos!: Todos;
  @Output() todoDelete:EventEmitter<Todos>=new EventEmitter();
ngOnInit(): void {
  
}

onClick(todo:Todos){
this.todoDelete.emit(todo);
  console.log("On click is triggered")
}
}
