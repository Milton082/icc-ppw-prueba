import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';

import { PaisesService } from '../../service/paises-service';

@Component({
  selector: 'app-paises-page',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './paises-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaisesPage {
  private paisesService = inject(PaisesService);

  paisesResource = rxResource({
    stream: () => this.paisesService.getPaises(),
  });
}
