import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app.service';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor(
    private appService: AppService
  ) { }

  userDataSource = new UserDataSource(this.appService);

  ngOnInit() {
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private appService: AppService) {
    super();
  }
  connect(): Observable<User[]> {
    let userUrl:string = 'users';
    return this.appService.getUsers(userUrl);
  }
  disconnect() { 
    console.log('Disconnected')
  }
}