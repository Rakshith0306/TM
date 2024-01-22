import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None // Add this line
})
export class AppComponent {
  title = 'TaskManagement';
 
}
