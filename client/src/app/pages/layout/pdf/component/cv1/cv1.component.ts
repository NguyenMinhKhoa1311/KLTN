import { Component } from '@angular/core';
import { Candidate } from '../../../../../models/candidate.model';
import { ShareModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-cv1',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './cv1.component.html',
  styleUrl: './cv1.component.less'
})
export class Cv1Component {
  userLogged : Candidate = <Candidate>{};

  constructor() {
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Candidate;
      if(userAfterParse?._id.length > 0&&userAfterParse!=null&&userAfterParse?._id!=""){
        console.log(userAfterParse);
        this.userLogged = userAfterParse;
      }
    }
  }

  calculateWidth(level: number): string {
    // Tính toán độ rộng của thanh tiến trình dựa trên cấp độ (level)
    // Giả sử rằng 100% tương ứng với level 5
    const percentage = level * 20;
    return percentage + '%';
  }
  
  calculatePercentage(level: number): number {
    // Tính toán phần trăm tương ứng với cấp độ (level)
    // Giả sử rằng 100% tương ứng với level 5
    return level * 20;
  }
}
