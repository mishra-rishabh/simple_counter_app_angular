import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Counter App';
  count = 0 ;

  counter( operation: string ) {
    // operation === "inc" ? this.count++ : this.count-- ;
    if( operation === "inc" ) {
      this.count++ ;
    }
    else if( operation === "zero" ) {
      this.count = 0 ;
    }
    else {
      this.count-- ;
    }
  }
}
