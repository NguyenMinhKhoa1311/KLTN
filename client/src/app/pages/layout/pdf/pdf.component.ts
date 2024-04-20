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
    const elementToprint: any = document.getElementById('theContent');
    html2canvas(elementToprint,{ scale: 2,useCORS: true  }).then((canvas) => {
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.setProperties(
        {
          title: 'Title',
          subject: 'This is the subject',
          author: 'This is the author',
        }
      );
      pdf.setFontSize(12);
      pdf.text('This is the title', 10, 10);
      pdf.save('file.pdf');
      

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

}
