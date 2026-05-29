import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [UpperCasePipe, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  changeBrand(): void {
    //actualiza el valor de la señal brand
    this.brand.update((valor) => valor + '!');
  }

  resetBrand(): void {
    this.brand.set('Prueba WEB');
  }

  brand = signal('Prueba WEB');
}
