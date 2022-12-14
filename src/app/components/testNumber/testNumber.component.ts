import { Component } from '@angular/core';

@Component({
  selector: 'app-testNumber',
  templateUrl: './testNumber.component.html',
  styleUrls: ['./testNumber.component.scss'],
})
export class TestNumberComponent {
  public value: number = 1;
  public counter(str: string) {
    str === 'increment' ? this.value++ : this.value--;
  }
}
