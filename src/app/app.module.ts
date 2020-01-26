import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDZFNnvJOnWAmh8lLXdX6cF0MfUc4NYVdY',
      authDomain: 'otaku-world-7d1b6.firebaseapp.com',
      projectId: 'otaku-world-7d1b6',
      storageBucket: 'otaku-world-7d1b6.appspot.com',
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
