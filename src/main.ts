import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  //an observable: is a collection of elements or values emitted over time
  //it connects an observer to a data sources or events

  //an observer: observes notifications from the observable
  //it provides methods for reacting to those notifications
  ngOnInit() {
    //when we use subscribe spread method, we began to get emited elements
    //con el subscribe iniciamos el observable y empezamos a recibir los elementos emitidos
    of(2, 4, 6, 8).subscribe((item) => console.log(item));

    //observer with next, error and complete methods
    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item .. ${item}`),
      error: (err) => console.log(`error ocurred ${err}`),
      complete: () => console.log('complete'),
    });
  }
}

bootstrapApplication(App);
