import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  data : string;
  constructor() { }

  ngOnInit() {
  }

  passData(){
    this.notify.emit("This is a text from child component.")
  }

}
