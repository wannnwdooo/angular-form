import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestInputComponent } from './components/testInput/testInput.component';
import { TestSelectComponent } from './components/testSelect/testSelect.component';
import { TestNumberComponent } from './components/testNumber/testNumber.component';
import { TestCheckboxComponent } from './components/testCheckbox/testCheckbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TestInputComponent,
    TestSelectComponent,
    TestNumberComponent,
    TestCheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
