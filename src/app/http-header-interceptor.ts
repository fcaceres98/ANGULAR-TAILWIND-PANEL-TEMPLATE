import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { SpinnerService } from './services/spinner.service';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

    constructor(private spinnerserv: SpinnerService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerserv.show();

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                    errorMsg = 'Error: ' + error.error.message;
                } else {
                    errorMsg = 'Error Code: ' + error.status + ' Message:' + error.error;
                }
                return throwError( errorMsg );
            }),
            finalize(() => this.spinnerserv.hide())
        );
    }
}
