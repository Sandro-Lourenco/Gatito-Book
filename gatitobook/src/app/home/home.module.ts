import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { SharedModule } from '../shared/shared.module';
import { ImageSliderModule } from "../imageSlider/imageSlider.module";

@NgModule({
    declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
    exports: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule, FormsModule, SharedModule, ImageSliderModule]
})
export class HomeModule {}
