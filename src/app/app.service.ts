import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import { User } from './src/app/models/user.model';

@Injectable()
export class AppService {
    private serviceUrl = 'https://jsonplaceholder.typicode.com/';

    constructor(
        private router: Router,
        private snackbar: MatSnackBar,
        private http: HttpClient
    ) { }

    navigate(url:string) {
        this.router.navigate([url]);
    }

    snackBarInfo (message: string, action?: string, cssConfig?: string) {
        this.snackbar.open(message, action, {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: [cssConfig]
        });
    }

    getUsers = (url:string):Observable<User[]> => {
        return this.http.get<User[]>(`${this.serviceUrl}${url}`);
    }
}
