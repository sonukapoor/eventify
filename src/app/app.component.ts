import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  events$: Observable<any[]>;

  constructor(firestore: Firestore) {
    const eventsCollection = collection(firestore, 'events');
    this.events$ = collectionData(eventsCollection);
  }
}
