import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ox-button',
  templateUrl: './ox-button.component.html',
  styleUrls: ['./ox-button.component.scss']
})
export class OxButtonComponent implements OnInit {
  oxButton: OxButton = {
    id: 1,
    text: 'This is a button',
    type: 'a',
    size: 'big',
    color: 'blue',
    isOutlined: true,
    buttonClass: 'btn',
  }

  constructor() {
    const { size,
            buttonClass,
            color,
            isOutlined } = this.oxButton;
    if (!(size === 'default')) {
      this.oxButton.buttonClass = `${buttonClass} btn-${size}`;
    }

    if (color) {
      this.oxButton.buttonClass = `${buttonClass} btn-${color}`;
    }

    if (isOutlined) {
      this.oxButton.buttonClass = `${buttonClass} btn-outline`;
    }
  }

  ngOnInit() {
  }

}

class OxButton {
  id: number;
  text: string;
  type: 'a' | 'input' | 'button' | 'span';
  size: 'small' | 'big' | 'smaller' | 'default';
  color: 'blue' | 'yellow' | 'red' | 'green' | 'black' | 'white';
  isOutlined: boolean;
  buttonClass: string;
}
