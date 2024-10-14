import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputContainerComponent } from './components/text-field/input-container/input-container.component';
import { TextFieldComponent } from './components/text-field/text-field/text-field.component';
import { HelperTextComponent } from './components/text-field/helper-text/helper-text.component';
import { UnitComponent } from './components/text-field/unit/unit.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    InputContainerComponent,
    HelperTextComponent,
    UnitComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
