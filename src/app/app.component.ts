import { Component } from '@angular/core';
import { AppState } from './store';
import { Store } from '@ngrx/store';
import { loginAuth } from './store/actions/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'mean-tutorial';
  constructor(private store: Store<AppState>) {
    this.store.dispatch(loginAuth({
      data: {username: 'Bret', password: 'password'}
    }))
  }
}
