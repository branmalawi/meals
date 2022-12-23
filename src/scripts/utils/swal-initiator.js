/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Swal from 'sweetalert2';

class SweetAlert {
  static success(message) {
    Swal.fire({
      icon: 'success',
      text: message,
      showConfirmButton: false,
      timer: 900,
    });
  }

  static error(message) {
    Swal.fire({
      icon: 'error',
      text: message,
      confirmButtonText: 'Cool',
    });
  }

  static disconnect(message) {
    Swal.fire({
      icon: 'question',
      text: message,
      confirmButtonText: 'Cool',
    });
  }
}

export default SweetAlert;
