import { Component } from '@angular/core';
export interface Array {
  id: number;
  value: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-form';
  placeOfBirthArray: Array[] = [
    { id: 0, value: 'Не важно' },
    { id: 1, value: 'Астрахань' },
    { id: 2, value: 'Волгоград' },
    { id: 3, value: 'Волжский' },
    { id: 4, value: 'Ростов-на-Дону' },
    { id: 5, value: 'Саратов' },
    { id: 6, value: 'Элиста' },
  ];
  maritalStatusArray: Array[] = [
    { id: 0, value: 'Не женат / не замужем' },
    { id: 1, value: 'Женат / замужем' },
  ];
}
