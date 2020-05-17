import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit, OnChanges {

  showModal = false;
  @Input() email: Email;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    const text = this.email.text;
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n--------- ${this.email.from} wrote:\n ${text}`
    };
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    })
  }

}
