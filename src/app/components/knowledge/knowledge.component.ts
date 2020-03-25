import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'],
  providers: [NgbTabsetConfig] // add NgbTabsetConfig to the component providers
})
export class KnowledgeComponent implements OnInit {

  constructor(config: NgbTabsetConfig) {
     // customize default values of tabsets used by this component tree
     config.justify = 'center';
     config.type = 'pills';
   }

  ngOnInit() {
  }

}
