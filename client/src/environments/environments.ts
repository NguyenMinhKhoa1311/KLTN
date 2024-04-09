// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyC_3zYWzM1CEyWl1qbl807r-0DvOnC450Y",
  authDomain: "storagekltn-4f1f9.firebaseapp.com",
  projectId: "storagekltn-4f1f9",
  storageBucket: "storagekltn-4f1f9.appspot.com",
  messagingSenderId: "207219053088",
  appId: "1:207219053088:web:793730b272759309196245",
  measurementId: "G-X74MLH2BT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const URL = `http://localhost:3000`

export function generateUuid(): string {
  const parts: string[] = [
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
  ];

  for (let i = 0; i < parts.length; i++) {
    parts[i] = parts[i].replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  return parts.join("");
}

export function convertStringToDate(str: string): Date | null {
    // Xóa các ký tự '-' và '/' ra khỏi chuỗi
    const cleanedString = str.replace(/[-/]/g, '');

    // Kiểm tra độ dài của chuỗi
    if (cleanedString.length !== 8) {
        console.error('Invalid input length');
        return null;
    }

    // Tách chuỗi thành ngày, tháng và năm
    const day = cleanedString.slice(0, 2);
    const month = cleanedString.slice(2, 4);
    const year = cleanedString.slice(4);

    // Kiểm tra xem ngày, tháng và năm có hợp lệ không
    if (!/^\d{2}$/.test(day) || !/^\d{2}$/.test(month) || !/^\d{4}$/.test(year)) {
        console.error('Invalid input format');
        return null;
    }

    // Chuyển đổi thành kiểu Date
    const date = new Date(`${year}-${month}-${day}`);
    if (isNaN(date.getTime())) {
        console.error('Invalid date');
        return null;
    }

    return date;
}

export function extractNumbersRegex(str: string): [number, number] {
  const match = str.match(/(\d+)-(\d+)/);
  if (!match) {
    return [0, 0];
  }
  return [parseInt(match[1]), parseInt(match[2])];
}