import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareModule } from '../../../shared/shared.module';
import { generateUuid } from '../../../../environments/environments';
import { TaigaModule } from '../../../shared/taiga.module';


@Component({
  selector: 'app-choice-service',
  standalone: true,
  imports: [ShareModule, TaigaModule],
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
      detailedDescription:"Tên của công việc tuyển dụng được tô đậm và đỏ ở Trang Kết Quả Tìm Kiếm theo nhóm ngành nghề, nghề nghiệp chuyên môn và lĩnh vực kinh doanh.Thu hút ứng viên chất lượng nhờ hiệu ứng tô đậm đỏ bắt mắt, nổi bật."
    },
    {
      id:2,
      name:'Đăng tuyển gấp',
      price: 500000,
      description:'Tag tuyển gấp',
      detailedDescription:"Tiêu đề tin đăng tuyển được hiển thị với tag “Urgent”. Hiển thị trong danh sách các công việc cần tuyển gấp khi ứng viên lọc theo “Việc cần tuyển gấp” trên đầu trang kết quả tìm kiếm."
    },
    {
      id:3,
      name:'Công việc hot',
      price: 750000,
      description:'Tag nổi bật',
      detailedDescription:"Tiêu đề tin đăng tuyển được hiển thị với tag Hot. Hiển thị trong danh sách các công việc nổi bật tại Homepage"
    },
    {
      id:4,
      name:'Độ ưu tiên cao',
      price: 1000000,
      description:'Độ ưu tiên cao',
      detailedDescription:"Công việc tuyển dụng được tăng 1 bậc đô ưu tiên. Công việc sẽ dễ được ứng viên tìm thấy."
    },
    
  ];

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
    this.expanded = this.isSelected(item); // Mở rộng nếu mục được chọn
  }
  
  expanded = false;
  
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
