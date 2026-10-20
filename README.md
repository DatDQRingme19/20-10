# Thiệp hoa hồng 20/10

Website tĩnh bằng HTML, CSS, JavaScript. Không cần Node.js, npm, cơ sở dữ liệu hoặc tải ảnh bên ngoài để sử dụng.

## 1. Chuẩn bị project từ đầu

Giải nén `hoa-hong-20-10.zip`. Bạn sẽ có thư mục chứa:

```text
hoa-hong-20-10/
  index.html   — nội dung trang và hình hoa hồng SVG
  style.css    — màu sắc, bố cục, hiệu ứng và giao diện điện thoại
  script.js    — lời chúc, nút mở thiệp và cánh hoa rơi
  README.md    — hướng dẫn này
```

Nếu muốn tự tạo lại: tạo một thư mục tên `hoa-hong-20-10`, tạo bốn file có tên chính xác như trên bằng trình soạn thảo, rồi chép nội dung tương ứng từ bộ mẫu. Lưu dưới dạng UTF-8; tránh tên `index.html.txt`.

## 2. Chạy trên máy

Mở thư mục đã giải nén, nhấp đúp `index.html`, hoặc nhấp phải → Open with → trình duyệt. Bó hoa xuất hiện ngay khi mở trang. Bấm “Mở lời chúc” để mở thư và thả cánh hoa. Bấm “Thêm một chút hoa” để phát lại hiệu ứng.

Bạn có thể sửa file bằng VS Code hoặc một trình soạn thảo văn bản. Sau khi lưu bằng Ctrl+S, quay lại trình duyệt và nhấn Ctrl+R. Chỉ mở HTML sau khi đã giải nén, để trình duyệt tìm được CSS và JavaScript cạnh nó.

## 3. Cá nhân hóa

Đầu `script.js` có biến `greeting`. Sửa `recipient` để thay dòng chào, `sender` để đổi chữ ký và các đoạn trong `paragraphs` để đổi lời chúc. Ví dụ:

```js
recipient: 'Gửi mẹ, người con yêu thương nhất.',
sender: 'Con của mẹ',
```

Giữ nguyên dấu nháy, dấu phẩy và ngoặc. Dùng dấu nháy kép bao quanh chuỗi nếu bên trong cần ký tự nháy đơn. Nội dung được đưa lên trang bằng `textContent`, vì vậy không chèn thẻ HTML vào các chuỗi lời chúc.

Trong `index.html`, sửa tiêu đề “Một vườn hồng, gửi người thương.” và phần mô tả nếu muốn. Trong `style.css`, đổi `--rose` (màu hồng chính), `--paper` (màu nền) ở đầu file.

## 4. Đưa lên GitHub bằng trình duyệt

1. Đăng nhập tài khoản tại https://github.com/.
2. Chọn dấu + → New repository.
3. Đặt Repository name là `hoa-hong-20-10`, chọn Public, rồi Create repository.
4. Trong kho mới, chọn liên kết “uploading an existing file”. Nếu kho đã có file, chọn Add file → Upload files.
5. Kéo bốn file `index.html`, `style.css`, `script.js`, `garden.svg` vào khu vực tải lên. Có thể thêm README.md.
6. Đảm bảo các file nằm ngay ở gốc kho: nhìn thấy `index.html` trực tiếp, không phải nằm trong một thư mục con. Không tải file ZIP thay cho các file mã nguồn.
7. Ghi thông điệp `Add greeting card`, rồi chọn Commit changes. Nếu có lựa chọn nhánh, dùng `main`.

## 5. Bật GitHub Pages

1. Trong repository, mở Settings → Pages (nhóm Code and automation).
2. Ở Build and deployment → Source, chọn Deploy from a branch.
3. Ở Branch, chọn `main`, thư mục `/ (root)`, rồi Save.
4. Chờ quy trình xuất bản hoàn thành. Xem tiến độ ở tab Actions nếu cần.
5. Quay lại Settings → Pages, mở liên kết website được GitHub hiển thị.

Địa chỉ thường có dạng `https://TEN-TAI-KHOAN.github.io/hoa-hong-20-10/`. Thay TEN-TAI-KHOAN bằng tên tài khoản thật. Gửi liên kết website này cho người nhận; họ không cần tải code hay đăng nhập để xem trang công khai. Liên kết `github.com/...` là kho mã nguồn, không phải trang thiệp.

Hướng dẫn chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 6. Cập nhật và xử lý lỗi

- Sửa file trên máy, upload lại file cùng tên và Commit changes. GitHub Pages sẽ xuất bản lại từ nhánh đã chọn.
- Không thấy nhánh main: hãy tải file và tạo commit đầu tiên trước.
- Trang 404: kiểm tra Actions đã thành công, đúng tên kho trong URL, và index.html nằm ở gốc nhánh main; tên file cần viết thường.
- Có chữ nhưng mất màu hoặc nút không hoạt động: kiểm tra style.css và script.js cùng thư mục với index.html, đúng chữ hoa/thường; thử Ctrl+F5.
- Không thấy cánh hoa chuyển động: trang chủ động tắt hiệu ứng khi thiết bị bật tùy chọn giảm chuyển động.
- Không thấy Pages trong Settings: kiểm tra bạn đang ở Settings của repository và có quyền quản trị kho.

## 7. Cách hoạt động để bạn tự học tiếp

HTML tạo cấu trúc nội dung; thẻ SVG vẽ hoa bằng các đường cong nên không phụ thuộc link ảnh. CSS dùng Grid để chia hai cột trên màn hình lớn, chuyển về một cột trên điện thoại. JavaScript lắng nghe sự kiện click, bỏ thuộc tính hidden của thiệp, cuộn đến lời chúc và tạo các cánh hoa. CSS animation làm cánh hoa rơi, sau đó JavaScript xóa chúng để tránh tích lũy phần tử.

Project đã kiểm tra cú pháp JavaScript, phản hồi HTTP và thao tác mở lời chúc trên trình duyệt. Chưa xuất bản lên tài khoản GitHub của bạn.


Bản cập nhật: phông Segoe UI/Arial hỗ trợ tiếng Việt, văn bản chuẩn hóa NFC, bổ sung garden.svg chứa vườn 42 bông hồng. Khi cập nhật GitHub hãy tải thêm garden.svg cùng thư mục với index.html.

Bản cập nhật mới: vườn hồng nằm đầu trang; 42 cây hoa đung đưa lệch nhịp và nở lần lượt khi tải trang. Hiệu ứng tự tắt khi thiết bị bật giảm chuyển động. Cập nhật index.html, style.css và garden.svg lên GitHub để nhận phiên bản này.


Bản mới nhất: vườn 120 bông hồng xếp 5 lớp và 5 chú bướm pastel bay lượn, vỗ cánh. Cập nhật index.html và garden.svg để xem thay đổi này.


Bản chỉnh bố cục: bỏ tiêu đề vườn ở đầu trang, giảm số hoa và tạo khoảng trống, vị trí, độ cao, kích thước không đều để vườn tự nhiên hơn. Cập nhật index.html và garden.svg.

