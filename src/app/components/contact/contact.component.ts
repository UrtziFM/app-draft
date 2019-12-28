import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IContactForm, IContact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() name: string = '';
  @Input() email: string = '';
  @Input() check: string = '';
  @Input() recruiter: string = '';
  @Input() progress: string = '';
  @Input() subject: string = '';

  @Output() formHandler = new EventEmitter<IContact>();

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [this.name, Validators.required],
      email: [this.email, Validators.required],
      check: [this.check],
      recruiter: [this.recruiter],
      progress: [this.progress],
      subject: [this.subject, Validators.required]
    });
  }

  formatFormValues(values: IContactForm): IContact {
    return {
      name: values.name,
      email: values.email,
      check: values.check,
      recruiter: values.recruiter,
      progress: values.progress,
      subject: values.subject
    };
  }

  onFormSubmit(values: IContactForm){
    const contactValue: IContact = this.formatFormValues(values);
    this.formHandler.emit(contactValue);
  }

}
