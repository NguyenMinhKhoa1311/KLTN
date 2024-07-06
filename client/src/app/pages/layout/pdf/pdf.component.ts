import { Component } from '@angular/core';
import  {jsPDF} from'jspdf';
import html2canvas from 'html2canvas';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdf',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './pdf.component.html',
  styleUrl: './pdf.component.less'
})
export class PdfComponent {
  generatePDF() {
    const element = document.getElementById('theContent');
    if (element) {
      this.loadImage(element).then(() => {
        html2canvas(element).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          console.log(imgData);
          
          const pdf = new jsPDF('p', 'mm', 'a4');
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('CV.pdf');
        });
      });
    } else {
      console.error('Element not found!');
    }
  }

  loadImage(element: HTMLElement): Promise<void> {
    const img = element.querySelector('img');
    return new Promise<void>((resolve, reject) => {
      if (img && img.complete) {
        resolve();
      } else if (img) {
        img.onload = () => {
          resolve(); // Resolve after image is completely loaded and painted
        };
        img.onerror = () => reject();
      } else {
        resolve();  // No image found, resolve immediately
      }
    });
  }
  
  constructor( private router:Router) {
  }
  cv1() {
    this.router.navigate(['/pdf/cv1']);
  }
  cv2() {
    this.router.navigate(['/pdf/cv2']);
  }
  back(){
    this.router.navigate(['/profile']);
  }

}
