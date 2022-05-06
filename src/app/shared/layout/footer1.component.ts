import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-footer1',
  templateUrl: './footer1.component.html'
})
export class Footer1Component {
  today: number = Date.now();
}
