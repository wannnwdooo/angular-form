import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
interface Array {
  id: number;
  value: string;
}
@Component({
  selector: 'app-testSelect',
  templateUrl: './testSelect.component.html',
  styleUrls: ['./testSelect.component.scss'],
})
export class TestSelectComponent implements OnChanges {
  @Input()
  option: 'active';

  @Input()
  title: Array[];
  constructor() {}
  selectVariable: string;
  ngOnChanges(changes: SimpleChanges): void {
    if (this.title) {
      this.selectVariable = this.title[0].value;
    }
  }
  @HostBinding('class')
  public get className(): string {
    return this.option;
  }
  contentDropDown = false;
  colorVariable: number = 0;
  dropdownOpen() {
    this.contentDropDown = !this.contentDropDown;
  }
  changeOption(item: Array) {
    this.selectVariable = item.value;
    this.colorVariable = item.id;
    this.contentDropDown = false;
  }
}
