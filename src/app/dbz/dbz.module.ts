import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.components';
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListaComponent,
    FormularioComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
