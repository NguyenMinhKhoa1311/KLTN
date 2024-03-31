import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/shared.module';
import {tuiInputDateOptionsProvider} from '@taiga-ui/kit';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';

@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [TaigaModule,ShareModule],
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.scss',
})
export class BasicInformationComponent {
  readonly items = [
    {
        name: 'Simple',
        description: 'Something usual',
    },
    {
        name: 'Advanced',
        description: 'Something better',
    },
    {
        name: 'PRO',
        description: 'Something cool',
    },
  ];
  
  readonly testForm = new FormGroup({
    Datetime: new FormControl(new TuiDay(2017, 2, 15)),
    Phone: new FormControl(''),
    Position: new FormControl('',[Validators.required]),
    Experience: new FormControl('',[Validators.required]),

    //render
    tariff: new FormControl(this.items[0]),
  });

  readonly items1 = [
    'John Cleese',
    'Eric Idle',
    'Graham Chapman',
    'Michael Palin',
    'Terry Gilliam',
    'Terry Jones',
];

value = '';



}
