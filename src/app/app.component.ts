import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { UserService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< Updated upstream
  title = 'BusinessTravel';
=======
  title = 'argon-dashboard-angular';
  constructor (
    private userService: UserService,private service: NotificationsService
  ) {}

  ngOnInit() {
    this.userService.populate();
  }
 onSucesss(message){
  this.service.success('sucess', 'Click to undo...', {
    timeOut: 3000,
    position:['bottom','right'],
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  });
 }
>>>>>>> Stashed changes
}
