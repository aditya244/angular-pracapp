import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  childData : string;
  parentString : string = "This is a text from parent component."
  constructor() { }

  ngOnInit() {
  }

  parentMethod(data){
    this.childData = data
  }
}
