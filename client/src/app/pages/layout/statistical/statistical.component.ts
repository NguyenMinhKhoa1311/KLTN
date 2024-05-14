import { Component, Inject } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import {TuiBarChartModule} from '@taiga-ui/addon-charts';
import {tuiCeil} from '@taiga-ui/cdk';
import {TuiAxesModule} from '@taiga-ui/addon-charts';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
  selector: 'app-statistical',
  standalone: true,
  imports: [TaigaModule, ShareModule,TuiBarChartModule,TuiAxesModule],
  templateUrl: './statistical.component.html',
  styleUrl: './statistical.component.less'
})
export class StatisticalComponent {
  activeItemIndex = 0;
  
  constructor(
      @Inject(TuiAlertService)
      private readonly alerts: TuiAlertService,
  ) {}
 
    

  readonly value = [
    [3660, 8281, 1069, 9034, 5797, 6918, 8495, 3234, 6204, 1392, 2088, 8637, 8779],
    [3952, 3671, 3781, 5323, 3537, 4107, 2962, 3320, 8632, 4755, 9130, 1195, 3574],
  ];

  readonly labelsX = ['Jan 2019', 'Feb', 'Mar'];
  readonly labelsY = ['0', '10 000', '20 000', '30 000', '40 000', '50 000'];

  getHeight(max: number): number {
      return (max / tuiCeil(max, -3)) * 100;
  }

}
