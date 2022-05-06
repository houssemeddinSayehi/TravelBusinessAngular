import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService'
import { User } from '../../interfaces/User'
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  public users: User[];
  public editUser: User;
  public deleteUser: User;

  constructor(private userService: UserService) { }


  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe({
      next: (response: User[]) => {
        this.users = response;
        console.log(response);
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }

  public onAddUser(addForm: NgForm): void {
    document.getElementById('add-user-form').click();
    this.userService.addUser(addForm.value).subscribe({
      next: (response: User) => {
        console.log(response);
        this.getUsers();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
      complete: () => {
        console.log('complete');
      }
    });
  } 

  public onUpdateUser(user: User): void {
    this.userService.updateUser(user).subscribe({
      next: (response: User) => {
        console.log(response);
        this.getUsers();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  public onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getUsers();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  public onOpenModal(user: User, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'edit') {
      this.editUser = user;
      button.setAttribute('data-target', '#updateUserModal');
    }
    if (mode === 'delete') {
      this.deleteUser = user;
      button.setAttribute('data-target', '#deleteUserModal');
    }
    container.appendChild(button);
    button.click();
  }

  

}
