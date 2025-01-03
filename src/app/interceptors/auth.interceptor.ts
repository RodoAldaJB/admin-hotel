import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    withCredentials: true, // Habilitar envío de cookies automáticamente
  });

  return next(req);
};
