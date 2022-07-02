import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private _toastr: ToastrService) {}

  showSuccess(message: string, title: string) {
    this._toastr.success(message, title);
  }

  showError(message: string, title: string) {
    this._toastr.error(message, title);
  }
}
