// Import thư viện dotenv
const dotenv = require('dotenv');

// Gọi phương thức config() để nạp các biến môi trường từ tệp .env
dotenv.config();

// Bây giờ bạn có thể sử dụng các biến môi trường trong mã của mình
const { EMAIL_USER, EMAIL_PASSWORD, EMAIL_HOST, EMAIL_PORT } = process.env;
module.exports ={
 EMAIL_USER: process.env.EMAIL_USER,
 EMAIL_PASSWORD:process.env.EMAIL_PASSWORD,
 EMAIL_HOST:process.env.EMAIL_HOST,
 EMAIL_PORT:process.env.EMAIL_PORT,
}