import { Injectable } from '@angular/core';
declare let alertify: any; //alertify tanımlama

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message: string) {
    alertify.success(message)
  }
  warning(message: string) {
    alertify.warning(message)
  }
  error(message: string) {
    alertify.error(message);
    alertify.set('notifier','position', 'top-right');
  }
}
