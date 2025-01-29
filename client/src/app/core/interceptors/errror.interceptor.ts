import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error) {
        const errorMessage = error.error?.message || 'An unexpected error occurred';
        const errorCode = error.status;

        switch (error.status) {
          case 400:
            if (error.error.errors) {
              throw error.error;
            } else {
              toastr.error(errorMessage, `Error ${errorCode}`);
            }
            router.navigateByUrl('/bad-request');
            break;
          case 401:
            toastr.error(errorMessage, `Error ${errorCode}`);
            break;
          case 404:
            toastr.error(errorMessage, `Error ${errorCode}`);
            router.navigateByUrl('/not-found');
            break;
          case 500:
            const navigationExtras = { state: { error: error.error } };
            router.navigateByUrl('/server-error', navigationExtras);
            break;
          default:
            toastr.error(errorMessage, `Error ${errorCode}`);
            router.navigateByUrl('/not-found');
            break;
        }
      }
      return throwError(() => error);
    })
  );
};