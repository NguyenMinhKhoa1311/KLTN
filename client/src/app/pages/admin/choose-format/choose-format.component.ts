import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';

@Component({
  selector: 'app-choose-format',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './choose-format.component.html',
  styleUrl: './choose-format.component.less'
})
export class ChooseFormatComponent {
  formatForm = new FormGroup({
    time: new FormControl('', Validators.required),
    format: new FormControl('', Validators.required),
  }); 

  format = null;
  readonly formats = [
    '1',
    '2',
    '3',
  ];

  items2 = tuiCreateTimePeriods(10, 20, [0, 15, 30, 45]);

  test(){
    console.log(this.formatForm.value.time);
    console.log(this.formatForm.value.format);
  }
}
