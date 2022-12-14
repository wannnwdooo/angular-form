import { Component, HostBinding, Input } from '@angular/core';
@Component({
  selector: 'app-testInput',
  templateUrl: './testInput.component.html',
  styleUrls: ['./testInput.component.scss'],
})
export class TestInputComponent {
  universityArray = [{ name: '' }];
  @Input() option: 'name' | 'university';
  placeholderOption: string;
  addUniversityButton = false;
  addInput() {
    this.universityArray.push({
      name: '',
    });
    console.log(this.universityArray);
  }
  deleteInput() {
    this.universityArray.pop();
    console.log(this.universityArray);
  }
  @HostBinding('class')
  public get className(): string {
    if (this.option === 'university') {
      this.addUniversityButton = true;
      this.placeholderOption = 'Например, ВолгГУ';
    } else {
      this.placeholderOption = '';
    }
    return this.option;
  }
}
