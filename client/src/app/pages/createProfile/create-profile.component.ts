import { ChangeDetectionStrategy,Component } from '@angular/core';


import { TaigaModule } from '../../shared/taiga.module';
import { ShareModule } from '../../shared/shared.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [TaigaModule,ShareModule,RouterOutlet],
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.less',
  

})
export class CreateProfileComponent {
  
}
