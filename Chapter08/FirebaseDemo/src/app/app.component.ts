import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import { Book } from "./book.model";

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="book$ | async; let book">
    {{ book.title }}
      <div class="author" *ngFor="let author of book.authors">
      {{ author }}
      </div>
    </div>
    <div *ngFor="let book of books$ | async">
    {{ book.title}}
    </div>
  `,
  styles: [`
  .author {
    padding-left: 15px;
  }
  `]
})
export class AppComponent {
  title = 'app';
  book$: Observable<any>;
  books$: Observable<any>;

  constructor(private angularFireDatabase: AngularFireDatabase) {
    this.book$ = this.angularFireDatabase.object('/book').valueChanges();
    this.book$.subscribe(data => console.log(data));

    this.books$ = this.angularFireDatabase
      .list('/books')
      .valueChanges()
      .map(this.mapBooks);

    this.angularFireDatabase.list('/books').snapshotChanges().subscribe(data => {
      console.log('snapshot version of books', data);
    });
  }

  private removeItem() {
    let ref = this.angularFireDatabase.list('/books');
  }

  private updateValue() {
    this.angularFireDatabase.object('/test').update({ year: 2018 });
  }

  private changeValue() {
    // destroys whats there before
    this.angularFireDatabase.object('/test').set({ title: 'test' });
  }

  private mapBooks(json): Book[] {
    return json.map(book => new Book(book));
  }
}
