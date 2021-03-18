import { Injectable } from '@angular/core';
import Swal, {SweetAlertResult} from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  constructor() { }

  mensajeError(textoError: string): Promise<SweetAlertResult> {
    return Swal.fire({
      icon: 'error',
      title: 'Error',
      text: textoError,
    });
  }

  mensajeSuccess(textoSuccess: string): Promise<SweetAlertResult> {
    return Swal.fire({
      icon: 'success',
      title: 'Correcto',
      text: textoSuccess,
    });
  }

  mensajeInfo(textoInfo: string): Promise<SweetAlertResult> {
    return Swal.fire({
      icon: 'info',
      title: 'Información',
      text: textoInfo,
    });
  }

  logInSuccess(textoSuccess: string): Promise<SweetAlertResult> {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    return Toast.fire({
      icon: 'success',
      title: textoSuccess
    });
  }

  toastSuccess(textoSuccess: string): Promise<SweetAlertResult> {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    return Toast.fire({
      icon: 'success',
      title: textoSuccess
    });
  }

  toastInfo(textoSuccess: string): Promise<SweetAlertResult> {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    return Toast.fire({
      icon: 'info',
      title: textoSuccess
    });
  }
}
