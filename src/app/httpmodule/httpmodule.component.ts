import { Component, OnInit } from '@angular/core';
import { ApimoduleService } from '../service/apimodule.service'

@Component({
  selector: 'app-httpmodule',
  templateUrl: './httpmodule.component.html',
  styleUrls: ['./httpmodule.component.scss']
})
export class HttpmoduleComponent implements OnInit {

  public employees: any[];

  constructor(private api_service: ApimoduleService ) { }

  ngOnInit() {
    this.api_service.getApiData()
      .subscribe(data => this.employees = data)
  }

}
