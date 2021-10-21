import { Component, OnChanges } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'BusinessCase';

  isRoot: boolean = false;


	constructor(private authService: AuthService) {
	}

  ngOnChanges() {
    if(this.authService.token.getValue() === 'root') {
      this.isRoot = true;
    } else {
      this.isRoot = false;
    }
  }

}
