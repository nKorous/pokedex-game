import { Injectable } from '@angular/core';
import notify from "devextreme/ui/notify"

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  success(message: string) {
    this.notification(message, 'success')
  }

  error(message: string) {
    this.notification(message, 'error')
  }

  info(message: string) {
    this.notification(message, 'info')
  }

  notification(message: string, type: 'success' | 'error' | 'info', duration: number = 600) {
    notify(message, type, duration)
  }
}
