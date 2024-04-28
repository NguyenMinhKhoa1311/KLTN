import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShareModule } from '../../shared/shared.module';
import { TaigaModule } from '../../shared/taiga.module';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-recruiter-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ShareModule, TaigaModule],
  templateUrl: './recruiter-layout.component.html',
  styleUrl: './recruiter-layout.component.less'
})
export class RecruiterLayoutComponent {

}
