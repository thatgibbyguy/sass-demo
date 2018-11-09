import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sass-demo';
  cards = [
    {
      id: 1,
      header: {
        title: 'No Buttons'
      },
      labels: [
        { title: 'Label 1 '},
        { title: 'Label 2' },
        { title: 'Label 3' }
      ]
    },
    {
      id: 2,
      header: {
        title: 'I have Buttons',
        buttons: true
      },
      labels: [
        { title: 'Label 1 '},
        { title: 'Label 2' },
        { title: 'Label 3' }
      ]
    },
    {
      id: 3,
      header: {
        title: 'I have Buttons',
        buttons: true
      },
      labels: [
        { title: 'Label 1 '},
        { title: 'Label 2' },
        { title: 'Label 3' }
      ]
    }
  ]
}
