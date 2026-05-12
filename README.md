# Ứng Dụng Đăng Nhập với OTP

Ứng dụng web xác thực người dùng bằng số điện thoại và mã OTP, được xây dựng bằng React, TypeScript và Vite.

## Tính Năng

- Đăng nhập bằng số điện thoại
- Validate số điện thoại Việt Nam
- Nhập mã OTP 4 chữ số
- Tự động focus sang ô tiếp theo khi nhập OTP
- Quay lại ô trước khi nhấn Backspace
- Countdown 30 giây để gửi lại OTP
- Responsive UI với CSS Flexbox

## Yêu Cầu

- Node.js 16+ 
- npm hoặc yarn

## Cài Đặt và Chạy Ứng Dụng

### 1. Clone Repository

```bash
git clone <repository-url>
cd test
```

### 2. Cài Đặt Dependencies

```bash
npm install
```

### 3. Chạy Development Server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173` 

## Scripts Khác

- `npm run build` - Xây dựng ứng dụng cho production
- `npm run preview` - Xem preview của bản build
- `npm run lint` - Chạy ESLint để kiểm tra code

## Cấu Trúc Dự Án

```
src/
├── pages/
│   ├── login.tsx       # Trang đăng nhập
│   ├── login.css       # Style đăng nhập
│   ├── otp.tsx         # Trang nhập OTP
│   └── otp.css         # Style OTP
├── components/         # React components
├── App.tsx            # Component chính
└── main.tsx           # Entry point
```

## Hướng Dẫn Sử Dụng

1. **Màn Hình Đăng Nhập**: Nhập số điện thoại Việt Nam (10 chữ số bắt đầu 0)
2. **Xác Nhận**: Click nút "Đăng nhập" 
3. **Nhập OTP**: Nhập mã OTP 4 chữ số được gửi đến điện thoại
4. **Resend OTP**: Chờ 30 giây hoặc click "Gửi lại OTP"

## Công Nghệ Sử Dụng

- **React 18** - JavaScript UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **React Router** - Routing
- **CSS 3** - Styling


