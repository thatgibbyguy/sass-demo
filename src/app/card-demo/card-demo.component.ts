import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss']
})

export class CardDemoComponent implements OnInit {
  @Input () id: number;
  @Input () header: object;
  @Input () labels: Array<object>;

  ngOnInit() {
  }

}
