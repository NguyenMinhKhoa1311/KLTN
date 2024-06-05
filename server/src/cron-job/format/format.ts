import { Job } from "src/job/entities/job.entity";

    //format 
    export function getFormat1 ( jobs: Job[]){
        let format1 = '<h1>Danh Sách Các Công Việc Hấp Dẫn</h1>'
        format1 += `
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <th style="border: 1px solid #ddd; padding: 8px;">Tên Công Việc</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Địa điểm</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Mức lương</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Phúc lợi</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Mô tả</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Thời gian</th>
                <th style="border: 1px solid #ddd; padding: 8px;">Tags</th>
            </tr>
        `;
        jobs.forEach(job => {
            format1 +=  `
            <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${job.Name}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${job.Location.join(', ')}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${job.Salary}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">
                    <ul>
                        ${job.Welfare.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </td>
                <td style="border: 1px solid #ddd; padding: 8px;">${job.Description.replace(/\n/g, '<br>')}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">
                    Bắt đầu: ${job.StartDate.toDateString()}<br>
                    Kết thúc: ${job.EndDate.toDateString()}
                </td>
                <td style="border: 1px solid #ddd; padding: 8px;">${job.Tags.join(', ')}</td>
            </tr>
            `;
        })
        format1 += `</table>`;
        return format1;
    }
    export function getFormat2 ( jobs: Job[]){
        let format2 = '<h1>Danh Sách Các Công Việc Hấp Dẫn</h1>';
        jobs.forEach(job => {
            format2 += `
            <div style="border: 2px solid #007BFF; border-radius: 5px; padding: 15px; margin-bottom: 15px; background-color: #F8F9FA;">
                <h2 style="color: #007BFF;">${job.Name}</h2>
                <p><strong>Địa điểm:</strong> ${job.Location.join(', ')}</p>
                <p><strong>Mức lương:</strong> ${job.Salary}</p>
                <p><strong>Phúc lợi:</strong></p>
                <ul>
                    ${job.Welfare.map(w => `<li>${w}</li>`).join('')}
                </ul>
                <p><strong>Mô tả công việc:</strong></p>
                <p>${job.Description.replace(/\n/g, '<br>')}</p>
                <p><strong>Thời gian:</strong> ${job.StartDate.toDateString()} - ${job.EndDate.toDateString()}</p>
                <p><strong>Tags:</strong> ${job.Tags.join(', ')}</p>
            </div>
            `;
        });
        return format2;
    }
    export function getFormat3 ( jobs: Job[]){
        let format3 = '<h1>Danh Sách Các Công Việc Hấp Dẫn</h1>';
        jobs.forEach((job, index) => {
            format3 += `
            <div style="border: 1px solid #ddd; margin-bottom: 10px;">
                <div style="background-color: #007BFF; color: white; padding: 10px; cursor: pointer;" onclick="document.getElementById('job-details-${index}').style.display = document.getElementById('job-details-${index}').style.display === 'none' ? 'block' : 'none'">
                    <h2 style="margin: 0;">${job.Name}</h2>
                </div>
                <div id="job-details-${index}" style="display: none; padding: 10px;">
                    <p><strong>Địa điểm:</strong> ${job.Location.join(', ')}</p>
                    <p><strong>Mức lương:</strong> ${job.Salary}</p>
                    <p><strong>Phúc lợi:</strong></p>
                    <ul>
                        ${job.Welfare.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                    <p><strong>Mô tả công việc:</strong></p>
                    <p>${job.Description.replace(/\n/g, '<br>')}</p>
                    <p><strong>Thời gian bắt đầu:</strong> ${job.StartDate.toDateString()}</p>
                    <p><strong>Thời gian kết thúc:</strong> ${job.EndDate.toDateString()}</p>
                    <p><strong>Tags:</strong> ${job.Tags.join(', ')}</p>
                </div>
            </div>
            `;
        });
        return format3;
    }