import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ox-button',
  templateUrl: './ox-button.component.html',
  styleUrls: ['./ox-button.component.scss']
})
export class OxButtonComponent implements OnInit {
  @Input() id: number;
  @Input() text: string;
  @Input() type: 'a' | 'input' | 'button' | 'span';
  @Input() size: 'small' | 'big' | 'smaller' | 'default';
  @Input() color: 'blue' | 'yellow' | 'red' | 'green' | 'black' | 'white';
  @Input() isOutlined: boolean;

  constructor() {
    this.buttonClass = 'btn';
  }

  ngOnInit() {
    const { type,
            size,
            color,
            isOutlined } = this;

    if (!type) {
      this.type = 'span';
    }

    if (!(size === 'default' || size === '' || size === null)) {
      this.buttonClass = `${this.buttonClass} btn-${size}`;
    }

    if (color) {
      this.buttonClass = `${this.buttonClass} btn-${color}`;
    }

    if (isOutlined && (isOutlined === 'true' || isOutlined === true)) {
      this.buttonClass = `${this.buttonClass} btn-outline`;
    }
  }

}
