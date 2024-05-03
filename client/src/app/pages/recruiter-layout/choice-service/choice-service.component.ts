import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareModule } from '../../../shared/shared.module';
import { generateUuid } from '../../../../environments/environments';

@Component({
  selector: 'app-choice-service',
  standalone: true,
  imports: [ShareModule],
  templateUrl: './choice-service.component.html',
  styleUrl: './choice-service.component.less'
})
export class ChoiceServiceComponent {
  selectedItems: any[] = []; // Mảng để lưu trữ các mục được chọn
  totalPrice: number = 0; // Tổng giá tiền


  constructor(private router: Router) {
    
  }
  item=[
    {
      id:1,
      name:'Nổi bật tiêu đề',
      price: 500000,
      description:'Tiêu đề in Đậm và Đỏ',
    },
    {
      id:2,
      name:'Đăng tuyển gấp',
      price: 500000,
      description:'Tag tuyển gấp',
    },
    {
      id:3,
      name:'Công việc hot',
      price: 750000,
      description:'Tag nổi bật',
    },
    {
      id:4,
      name:'Độ ưu tiên cao',
      price: 1000000,
      description:'Độ ưu tiên cao',
    },
    
  ];

  // Phương thức này được gọi khi một mục được chọn hoặc hủy
  toggleItem(item: any) {
    const index = this.selectedItems.indexOf(item);
    if (index > -1) {
      // Nếu mục đã được chọn, hủy nó
      this.selectedItems.splice(index, 1);
      this.totalPrice -= item.price;
    } else {
      // Nếu mục chưa được chọn, thêm nó và cập nhật tổng giá tiền
      this.selectedItems.push(item);
      this.totalPrice += item.price;
    }
  }

  isSelected(item: any): boolean {
    // Kiểm tra xem một dịch vụ đã được chọn hay chưa
    return this.selectedItems.indexOf(item) !== -1;
  }

  //funtion use for find item selected
  nameOfRecruiter: string ='';

  nextStep(){
    let servicePackage = {
      Name:`Service Package of ${this.nameOfRecruiter}`,
      ServicePackageId: generateUuid(),
      Description:"none",
      Price:0,
      Priority:0,
      Hot:false,
      ColorTitle:false,
      Urgent:false,      
    }
    this.selectedItems.forEach(item => {
      switch(item.id){
        case 1:
          {
            servicePackage.ColorTitle = true;
            servicePackage.Price += item.price;
            if(servicePackage.Description!="none"){
              servicePackage.Description += `, ${item.description}`;
            }
            else{
              servicePackage.Description = item.description;
            }
          }
          break;
        case 2:
          {
            servicePackage.Urgent = true;
            servicePackage.Price += item.price;
            if(servicePackage.Description!="none"){
              servicePackage.Description += `, ${item.description}`;
            }
            else{
              servicePackage.Description = item.description;
            }
          }
          break;
        case 3:
          {
            servicePackage.Hot = true;
            servicePackage.Price += item.price;
            if(servicePackage.Description!="none"){
              servicePackage.Description += `, ${item.description}`;
            }
            else{
              servicePackage.Description = item.description;
            }
          }
          break;
        case 4:
          {
            servicePackage.Priority = 1;
            servicePackage.Price += item.price;
            if(servicePackage.Description!="none"){
              servicePackage.Description += `, ${item.description}`;
            }
            else{
              servicePackage.Description = item.description;
            }
          }
          break;
      }
    });
    if(servicePackage.Price == 0){
      alert("Bạn sẽ đăng công việc với giá 500000 và không sử dụng dịch vụ nào");
      servicePackage.Price= 500000;
      sessionStorage.setItem('servicePackedChoiced', JSON.stringify(servicePackage));
      this.router.navigate(['/recruiterLayout/job-posting']);
    }
    else{
      servicePackage.Priority = this.selectedItems.length;
      sessionStorage.setItem('servicePackedChoiced', JSON.stringify(servicePackage));
      this.router.navigate(['/recruiterLayout/job-posting']);
    }

  }
  returnHome(){
    this.router.navigateByUrl('/home');
  }
}
