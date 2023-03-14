import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private toastr:ToastrManager) { }

  showSuccess(
    message: string,
    title = 'Success',
    position = 'top-right'
  ) {
    this.toastr.successToastr(message, title, {
      position: position,
    });
  }

  showError(
    message: string,
    title = 'Error',
    position = 'top-right'
  ) {
    this.toastr.errorToastr(message, title, {
      position: position,
    });
  }

  showWarning(
    message: string,
    title = 'Warning',
    position = 'top-right'
  ) {
    this.toastr.warningToastr(message, title, {
      position: position,
    });
  }

  showInfo(
    message: string,
    title = 'Info',
    position = 'top-right'
  ) {
    this.toastr.infoToastr(message, title, {
      position: position,
    });
  }

  showToast(position: any = 'top-left') {
    this.toastr.infoToastr('This is a toast.', 'Toast', {
      position: position,
    });
  }
}
