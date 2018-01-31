import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  public modalRef: BsModalRef;

  constructor(private toastr: ToastrService, private modalService: BsModalService) { }

  ngOnInit() { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  clickSuccessToast() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  clickErrorToast() {
    this.toastr.error('Error', 'Title')
  }

  clickInfoToast() {
    this.toastr.info('Error', 'Title')
  }

  clickAlertToast() {
    this.toastr.warning('Error', 'Title')
  }

}
