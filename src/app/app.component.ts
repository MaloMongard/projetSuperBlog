import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
  	var firebaseConfig = {
    apiKey: "AIzaSyAmjHdv30yJp7LSsMl1PHlVTlhlsDGdcX4",
    authDomain: "superblog-a5b8c.firebaseapp.com",
    databaseURL: "https://superblog-a5b8c.firebaseio.com",
    projectId: "superblog-a5b8c",
    storageBucket: "superblog-a5b8c.appspot.com",
    messagingSenderId: "786679518232",
    appId: "1:786679518232:web:1e2183e46f39e73a755f6d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}
