import { ChangeDetectionStrategy,Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {tuiInputDateOptionsProvider} from '@taiga-ui/kit';
import { TaigaModule } from '../../shared/taiga.module';
import { ShareModule } from '../../shared/shared.module';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './create-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './create-profile.component.less',
  providers: [tuiInputDateOptionsProvider({nativePicker: true})],

})
export class CreateProfileComponent {
  readonly testForm = new FormGroup({
    Datetime: new FormControl(new TuiDay(2017, 2, 15)),
    Phone: new FormControl(''),
});
}
