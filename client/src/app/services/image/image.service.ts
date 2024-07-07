import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImageAndStoreLocally(imageUrl: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get(imageUrl, { responseType: 'blob' }).subscribe(
        (blob: Blob) => {
          // Lưu blob vào Local Storage
          const objectURL = URL.createObjectURL(blob);
          localStorage.setItem('myImage', objectURL);
          resolve();
        },
        error => {
          console.error('Error fetching image:', error);
          reject(error);
        }
      );
    });
  }
}
