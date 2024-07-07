import { Component } from '@angular/core';
import { ShareModule } from '../../../../../shared/shared.module';
import { Store } from '@ngrx/store';
import { Candidate } from '../../../../../models/candidate.model';

@Component({
  selector: 'app-cv2',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './cv2.component.html',
  styleUrl: './cv2.component.less'
})
export class Cv2Component {

  userLogged : Candidate = <Candidate>{};
  avatar: string = ''


  constructor() {
    let userLogged = sessionStorage.getItem('userLogged');
    if(userLogged){
      let userAfterParse = JSON.parse(userLogged) as Candidate;
      if(userAfterParse?._id.length > 0&&userAfterParse!=null&&userAfterParse?._id!=""){
        console.log(userAfterParse);
        this.userLogged = userAfterParse;
        this.avatar = `../../../../../../assets/images/${this.userLogged.Name}.jpg`
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
