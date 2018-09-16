import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ContactService} from '../../../service/contact-service';

@Component({
  selector: 'app-project-contact',
  templateUrl: './project-contact.component.html',
  styleUrls: ['./project-contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectContactComponent implements OnInit {
  @Input() name: string;

  formData = { inputName: '', inputEmail: '', inputMessage: '', appName: '' };
  resultMessage: string;
  submitButtonDisabled = false;
  submitted = false;
  result = 'hidden';

  constructor(private contactService: ContactService) { }

  ngOnInit() {}

  send(contactform, e) {
    e.preventDefault();
    this.submitted = true;
    this.submitButtonDisabled = true;

    this.formData.appName = this.name;

    if (contactform.valid) {
      this.contactService.sendEmail(this.formData).then((result) => {
        this.submitButtonDisabled = false;
        this.formData = { inputName: '', inputEmail: '', inputMessage: '', appName: '' };
        this.resultMessage = result.toString();
        this.result = 'alert-success';
      }, (err) => {
        this.submitButtonDisabled = false;
        this.resultMessage = err;
        this.result = 'alert-danger';
      });
    } else {
      this.submitButtonDisabled = false;
      this.resultMessage = 'Failed :( Please fill out all the fields.';
      this.result = 'alert-danger';
    }
  }
}
