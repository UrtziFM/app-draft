import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IContactForm, IContact } from '../../interfaces/contact.interface';
import { Router } from '@angular/router';
import { ApiContactService } from 'src/app/services/contact.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiContactService: ApiContactService
    ) {
      this.mainForm();
     }

  ngOnInit() {}

  mainForm(){
    this.contactForm = this.formBuilder.group({
      name: [this.name, Validators.required],
      email: [this.email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
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

  // Choose designation with select dropdown

  updateProfile(e){
    this.contactForm.get('designation').setValue(e, {
      onlySelf: true
    });
  }

  // Getter to access form control

  get f() {return this.contactForm.controls; }

  onFormSubmit(values: IContactForm){
    this.submitted = true;
    const contactValue: IContact = this.formatFormValues(values);
    if (!this.contactForm.valid) {
      return false;
    } else {
      this.apiContactService.createForm(contactValue).subscribe(
        (res) => {
          console.log('Form succesfully added in database');
          this.ngZone.run(() => this.router.navigateByUrl('/Forms'))
        }, (error) => {
          console.log(error);
        });
      }
    console.log(contactValue);
    alert('Form sended! Thanks, we will be in touch');
    this.contactForm.reset();
    }
  }
