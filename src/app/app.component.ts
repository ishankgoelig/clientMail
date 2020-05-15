import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // signedin: boolean = false; // Old Method

  signedin$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit() {
    // this.authService.signedin$.subscribe((signedin) => {     // Old Method
    //   this.signedin = signedin;
    // });

    this.authService.checkAuth().subscribe(() => { });
  }
}
