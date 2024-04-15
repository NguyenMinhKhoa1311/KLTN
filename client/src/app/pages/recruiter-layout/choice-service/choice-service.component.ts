import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShareModule } from '../../../shared/shared.module';

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


  constructor() {
    
  }
  item=[
    {
      name:'Dịch vụ 1',
      price: 500000,
      time:'30 ngày',
      description:'Tiêu đề nổi bật',
    },
    {
      name:'Dịch vụ 2',
      price: 1000000,
      time:'30 ngày',
      description:'Tiêu đề nổi bật',
    },
    {
      name:'Dịch vụ 3',
      price: 1000000,
      time:'30 ngày',
      description:'Tiêu đề nổi bật',
    },
    {
      name:'Dịch vụ 4',
      price: 1000000,
      time:'30 ngày',
      description:'Tiêu đề nổi bật',
    },
    {
      name:'Dịch vụ 5',
      price: 1000000,
      time:'30 ngày',
      description:'Tiêu đề nổi bật',
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
}
