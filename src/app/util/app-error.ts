import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class AppError extends Error {
  constructor(message: string) {
    super(message);
  }
}
