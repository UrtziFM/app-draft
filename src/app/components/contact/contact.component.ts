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
  @Input() check: boolean;
  @Input() recruiter: boolean;
  @Input() progress: boolean;
  @Input() subject: string = '';

  @Output() formHandler = new EventEmitter<IContact>();

  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [this.name, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      check: [this.check],
      recruiter: [this.recruiter],
      progress: [this.progress],
      subject: [this.subject, [Validators.required, Validators.minLength(10)]]
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

  get f() {return this.contactForm.controls; }

  onFormSubmit(values: IContactForm){
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    const contactValue: IContact = this.formatFormValues(values);
    this.formHandler.emit(contactValue);
    console.log(contactValue);
    alert('Form sended! Thanks');
    this.contactForm.reset();
  }
}
