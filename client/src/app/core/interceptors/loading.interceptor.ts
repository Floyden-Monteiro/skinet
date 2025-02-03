import { HttpInterceptorFn } from '@angular/common/http';
import { delay, finalize } from 'rxjs/operators';
import { inject } from '@angular/core';
import { BusyService } from '../service/busy.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(BusyService);
  busyService.busy();
  return next(req).pipe(
    delay(1000),
    finalize(() => busyService.idle())
  );
};