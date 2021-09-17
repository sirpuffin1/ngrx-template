import { Component } from '@angular/core';
import { AppState } from './store';
import { Store } from '@ngrx/store';
import { loginAuth } from './store/actions/auth/auth.actions';
import { loggedInUserSelector } from './store/selectors/auth/auth.selectors';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'mean-tutorial';
  loggedInUser$: Observable<User | null>
  constructor(private store: Store<AppState>) {
    this.store.dispatch(loginAuth({
      data: {username: 'Bret', password: 'password'}
    }))
    this.loggedInUser$ = this.store.select(loggedInUserSelector)
  }
}
