import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = "Add an item";
  todoTask: string = 'My first todo item...';
  todos: String[] = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.todos.length;
  }

  addItem(){
    this.todos.push(this.todoTask);
    this.todoTask = '';
    this.itemCount = this.todos.length;
  }

}
