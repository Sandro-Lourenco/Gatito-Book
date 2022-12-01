import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImageSliderModule } from './imageSlider/imageSlider.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    RodapeModule,
    AutenticacaoModule,
    ImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
