import { Component } from '@angular/core';
interface Array {
  id: number;
  select: boolean;
  name: string;
  value: string;
}
@Component({
  selector: 'app-testCheckbox',
  templateUrl: './testCheckbox.component.html',
  styleUrls: ['./testCheckbox.component.scss'],
})
export class TestCheckboxComponent {
  skills: Array[] = [
    { id: 1, select: false, name: 'communication', value: 'Общение' },
    { id: 2, select: false, name: 'languages', value: 'Иностранные языки' },
    { id: 3, select: false, name: 'obstacleRun', value: 'Бег с препятствиями' },
    { id: 4, select: false, name: 'quickRead', value: 'Быстрое чтение' },
    { id: 5, select: false, name: 'selfDefense', value: 'Самозащита' },
    { id: 6, select: false, name: 'driving', value: 'Вождение' },
    { id: 7, select: false, name: 'programming', value: 'Программирование' },
    {
      id: 8,
      select: false,
      name: 'helicopterControl',
      value: 'Управление вертолетом',
    },
    { id: 9, select: false, name: 'operaSinging', value: 'Оперное пение' },
  ];
}
