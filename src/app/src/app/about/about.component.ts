import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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

  disconnect():void {
  }
}
