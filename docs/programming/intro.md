# ✅ Checklist học PHP

## 1. Cơ bản
- Cài đặt PHP và chạy file `.php` trên server cục bộ (XAMPP/Laragon/Docker)  
- Hiểu cú pháp PHP cơ bản (`<?php ... ?>`)  
- Biến & kiểu dữ liệu (string, int, float, bool, array, object)  
- Hằng số (`define`, `const`)  
- Toán tử: số học, so sánh, logic, gán  

## 2. Cấu trúc điều khiển
- `if`, `else`, `elseif`, `switch`  
- Vòng lặp: `for`, `while`, `do while`, `foreach`  
- `break`, `continue`  

## 3. Làm việc với dữ liệu
- Mảng: indexed, associative, multidimensional  
- Kiểu chuỗi (string) và thao tác cơ bản  
- Ngày & giờ (`date`, `time`, `strtotime`)  

## 4. Hàm (Functions)
- Tạo hàm với tham số & giá trị trả về  
- Hàm mặc định vs. tham số mặc định  
- Truyền tham chiếu (`&$var`)  
- Hàm nặc danh & arrow function  

## 5. Lập trình hướng đối tượng (OOP)
- Class & Object  
- Thuộc tính & phương thức  
- Constructor, Destructor  
- Kế thừa (`extends`)  
- Interface, Abstract Class  
- Trait  
- Namespace & Autoloading  

## 6. Làm việc với CSDL
- Kết nối MySQL (mysqli, PDO)  
- CRUD cơ bản  
- Prepared Statement  
- Transaction  

## 7. Web nâng cao
- Form handling (GET/POST)  
- Session & Cookie  
- Upload file  
- Gửi mail với `mail()` hoặc PHPMailer  
- JSON encode/decode  
- Error & Exception Handling  

## 8. Bảo mật
- Escape dữ liệu (`htmlspecialchars`)  
- SQL Injection & Prepared Statements  
- Password hashing (`password_hash`, `password_verify`)  
- CSRF token  

## 9. Ứng dụng
- Xây dựng To-do List  
- Mini Blog (CRUD + Upload)  
- REST API đơn giản  
- Laravel (framework) cơ bản  

---

# 📚 Các hàm PHP viết sẵn (Built-in Functions) cần đào sâu

## 🔤 Xử lý chuỗi
- `strlen()`, `mb_strlen()`  
- `substr()`, `mb_substr()`  
- `strpos()`, `strrpos()`  
- `str_replace()`, `preg_replace()`  
- `trim()`, `ltrim()`, `rtrim()`  
- `explode()`, `implode()`  
- `sprintf()`, `printf()`  

## 🔢 Xử lý mảng
- `count()`, `sizeof()`  
- `array_push()`, `array_pop()`  
- `array_shift()`, `array_unshift()`  
- `array_merge()`, `array_diff()`, `array_intersect()`  
- `array_map()`, `array_filter()`, `array_reduce()`  
- `in_array()`, `array_key_exists()`  
- `sort()`, `asort()`, `ksort()`, `usort()`  

## 🗓️ Ngày & giờ
- `date()`, `time()`, `mktime()`  
- `strtotime()`  
- `date_create()`, `date_diff()`  

## 🔐 Bảo mật & mã hóa
- `password_hash()`, `password_verify()`  
- `md5()`, `sha1()` (hiểu nhưng hạn chế dùng)  
- `hash()`  

## 📂 File & thư mục
- `fopen()`, `fclose()`  
- `fread()`, `fwrite()`  
- `file_get_contents()`, `file_put_contents()`  
- `is_file()`, `is_dir()`, `file_exists()`  
- `scandir()`, `unlink()`, `rename()`  

## 🌐 Web & HTTP
- `header()`  
- `setcookie()`, `session_start()`  
- `json_encode()`, `json_decode()`  
- `http_build_query()`  

---

👉 Cách học hiệu quả:  
1. Mỗi ngày chọn 1 nhóm hàm (VD: hôm nay học **string functions**).  
2. Code ví dụ nhỏ cho từng hàm.  
3. Làm mini bài tập kết hợp nhiều hàm để hiểu sâu hơn.  
