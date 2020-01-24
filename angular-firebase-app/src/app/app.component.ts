import { Component, OnInit} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-firebase-app';


  items: Observable<any>;
  students: any[];
  constructor(private db: AngularFirestore){}

  ngOnInit() {
    this.items = this.db.collection('students').valueChanges();
    this.items.subscribe(
      (data) => {
        this.students =data;
      },
      (error) => {
        console.log(error);
      }

    )
    
  }
}
