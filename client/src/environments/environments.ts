// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as cronParser  from 'cron-parser';
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

export function parseDate(date: Date) {
  // Tạo đối tượng Date từ chuỗi ngày
const dateObject = new Date(date.toString());

// Lấy ngày, tháng và năm
const day = dateObject.getUTCDate();
const month = dateObject.getUTCMonth() + 1; // Tháng bắt đầu từ 0
const year = dateObject.getUTCFullYear();
const stringDay = day < 10 ? `0${day}` : day;
const stringMonth = month < 10 ? `0${month}` : month;
// Định dạng lại chuỗi ngày
const formattedDate = `${stringDay}-${stringMonth}-${year}`;
return formattedDate;
}


export function convertToDate(dateString: string, timeString: string): Date {
  // Hợp nhất chuỗi ngày và giờ
  const combinedString = `${dateString} ${timeString}`;

  // Chuyển đổi chuỗi kết hợp thành đối tượng Date
  const date = new Date(combinedString);

  // Kiểm tra xem chuỗi có thể được chuyển đổi thành ngày hợp lệ hay không
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date or time string');
  }

  // Trả về đối tượng Date
  return date;
}


export function getDatetimeFromIso(isoStr: string): Date {
  return new Date(isoStr);
}


export function convertDayMonthYearYYYMMDD(strDate: string): { day: number, month: number, year: number } {
  const parts = strDate.split('-');
  return {
    day: parseInt(parts[2]),
    month: parseInt(parts[1]) + 1, // Tháng trong JavaScript bắt đầu từ 0
    year: parseInt(parts[0]),
  };
}

export function getTimeFromCronTime(s: string): {hours:string, minute:string} {
  // Tách chuỗi thành các phần tử
  const parts: string[] = s.split(" ");
  console.log(parts);
  const gio: string = parts[2]
  const phut: string = parts[1]
  console.log(gio, phut);
  
  
  // Trả về chuỗi giờ và phút
  return {hours: gio, minute: phut};
}

export function daysUntilDate(dateString: string): number {
  // Chuyển đổi chuỗi ngày thành đối tượng Date
  const targetDate = new Date(dateString);
  
  // Lấy ngày hiện tại
  const currentDate = new Date();

  // Tính số miligiây giữa hai ngày
  const differenceInMillis = targetDate.getTime() - currentDate.getTime();

  // Chuyển đổi từ miligiây sang ngày
  const differenceInDays:number = Math.ceil(differenceInMillis / (1000 * 60 * 60 * 24));

  return differenceInDays;
}



  

