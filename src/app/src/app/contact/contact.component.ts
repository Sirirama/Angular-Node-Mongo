import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../../app.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { User } from '../models/user.model';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private displayColumns: string[] = ['sno', 'name', 'email', 'phone', 'website', 'edit', 'delete'];
  private dataSource = new MatTableDataSource<User>();
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private appService:AppService
  ) { }
  
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.appService.getUsers('users').subscribe( (res) => {
      this.dataSource.data = res as User[];
    })
  }

  ngAfterViewInit():void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  redirectToEdit(editObj: User) {
    console.log(editObj.id)
  }

  redirectToDelete(delObj: User) {
    console.log(delObj);
  }

  doFilter(value:string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
