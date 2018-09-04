import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContactService} from '../../service/contact-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  formData = { inputName: '', inputEmail: '', inputMessage: '' };
  resultMessage: string;
  submitButtonDisabled = false;
  submitted = false;
  result = 'hidden';

  constructor(private contactService: ContactService) {}

  ngOnInit() {
  }

  send(contactform, e) {
    e.preventDefault();
    this.submitted = true;
    this.submitButtonDisabled = true;

    if (contactform.valid) {
      this.contactService.sendEmail(this.formData).then((result) => {
        this.submitButtonDisabled = false;
        this.formData = { inputName: '', inputEmail: '', inputMessage: '' };
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
