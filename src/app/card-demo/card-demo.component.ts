import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss']
})

export class CardDemoComponent implements OnInit {

  cardDemo: CardDemo = {
    id: 1,
    header: {
      title: 'Card Title',
      buttons: [{minus: 'blah'}, {favorite: 'blah'}]
    },
    labels: [{title: 'Label 1'}, {title: 'Label 2'}, {title: 'Label 3'}],
  }

  constructor() { }

  ngOnInit() {
  }

}

class CardDemo {
  id: number;
  header: object;
  labels: Array<object>;
}
