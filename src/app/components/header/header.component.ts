import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isDashboard: boolean;
  routerEventSub: Subscription;

  isConnected: boolean;
  tokenSub: Subscription;

  constructor(private authService: AuthService,private router: Router) {
  }

  ngOnInit(): void {
    this.routerEventSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      ).subscribe((e:any) => {
        if(e.url === '/dashboard') {
          this.isDashboard = true;
        } else {
          this.isDashboard = false;
        }
      });

      this.tokenSub = this.authService.token.subscribe(
        (token:string) => {
          if(token) {
            this.isConnected = true;
          } else {
            this.isConnected = false;
          }
        }
      );
  }


  onClickSignOut() {
    this.authService
    .signOut()
    .then(() => {
      this.router.navigateByUrl('auth');
    });
  }

  ngOnDestroy() {
    this.routerEventSub.unsubscribe();
    this.tokenSub.unsubscribe();
  }
}
