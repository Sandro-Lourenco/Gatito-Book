import { Component } from '@angular/core';
import { SlideInterface } from './imageSlider/types/slide.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gatitobook';

  slides: SlideInterface[] = [
    { url: '/assets/img/gato1.png', title: 'beach' },
    { url: '/assets/img/gato2.png', title: 'boat' },
    { url: '/assets/img/gato3.jpg', title: 'forest' },
    { url: '/assets/img/gato4.png', title: 'forest' },
    { url: '/assets/img/gato5.png', title: 'forest' },
    { url: '/assets/img/gato6.png', title: 'forest' },
    { url: '/assets/img/gato7.png', title: 'forest' },
  ];
}
