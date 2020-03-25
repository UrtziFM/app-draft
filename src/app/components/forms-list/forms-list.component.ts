import { Component, OnInit } from '@angular/core';
import { ApiContactService } from '../../services/contact.service';

@Component({
  selector: 'app-forms-list',
  templateUrl: './forms-list.component.html',
  styleUrls: ['./forms-list.component.scss']
})
export class FormsListComponent implements OnInit {

  Form: any = [];

  constructor(private apiContactService: ApiContactService) {
    this.readForm();
   }

  ngOnInit() {}

  readForm() {
    this.apiContactService.getForms().subscribe((data) => {
      this.Form = data;
    });
  }

  removeForm(form, index) {
    if (window.confirm('Are you sure of that?')) {
      this.apiContactService.deleteForm(form._id).subscribe((data) => {
        this.Form.splice(index, 1);
      });
    }
  }
}
