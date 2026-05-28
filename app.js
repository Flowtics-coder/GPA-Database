// Dữ liệu mẫu (15 sinh viên)
let dataList = [
    {masv: 'B25DCCC171', hoten: 'Đàm Đức Phong', ngaysinh: '2007-08-06', gioitinh: 'Nam', quequan: 'Thái Nguyên', malop: 'D25CQCC03-B', cc: 10.0, gk: 9.5, ck: 9.5},
    {masv: 'B25DCCC285', hoten: 'Lương Tuấn Đạt', ngaysinh: '2007-02-06', gioitinh: 'Nam', quequan: 'Nghệ An', malop: 'D25CQCC03-B', cc: 9.5, gk: 8.5, ck: 8.0},
    {masv: 'B25DCCC021', hoten: 'Trần Nam Anh', ngaysinh: '2007-12-16', gioitinh: 'Nam', quequan: 'Thanh Hóa', malop: 'D25CQCC03-B', cc: 10.0, gk: 8.0, ck: 8.5},
    {masv: 'B25DCCC267', hoten: 'Phạm Bá Việt', ngaysinh: '2007-01-26', gioitinh: 'Nam', quequan: 'Thái Bình', malop: 'D25CQCC03-B', cc: 9.0, gk: 8.5, ck: 8.0},
    {masv: 'B25DCCC141', hoten: 'Nguyễn Ngọc Minh', ngaysinh: '2007-05-02', gioitinh: 'Nam', quequan: 'Hòa Bình', malop: 'D25CQCC03-B', cc: 10.0, gk: 9.0, ck: 9.0},
    {masv: 'B25DCCC147', hoten: 'Lê Đức Mạnh', ngaysinh: '2007-12-18', gioitinh: 'Nam', quequan: 'Phú Thọ', malop: 'D25CQCC03-B', cc: 9.0, gk: 8.0, ck: 8.5},
    {masv: 'B25DCCC165', hoten: 'Lê Hoàng Long Nhật', ngaysinh: '2007-11-22', gioitinh: 'Nam', quequan: 'Ninh Bình', malop: 'D25CQCC03-B', cc: 10.0, gk: 10.0, ck: 9.5},
    {masv: 'B25DCCC177', hoten: 'Nguyễn Hà Đình Phúc', ngaysinh: '2007-07-17', gioitinh: 'Nam', quequan: 'Nam Định', malop: 'D25CQCC03-B', cc: 10.0, gk: 9.0, ck: 10.0},
    {masv: 'B25DCCC183', hoten: 'Nguyễn Đức Quang', ngaysinh: '2007-09-06', gioitinh: 'Nam', quequan: 'Hà Nội', malop: 'D25CQCC03-B', cc: 8.5, gk: 7.5, ck: 7.0},
    {masv: 'B25DCCC189', hoten: 'Hoàng Ngọc Quyền', ngaysinh: '2007-09-06', gioitinh: 'Nam', quequan: 'Ninh Bình', malop: 'D25CQCC03-B', cc: 9.5, gk: 9.0, ck: 9.5},
    {masv: 'B25DCCC195', hoten: 'Vũ Văn Quân', ngaysinh: '2007-10-31', gioitinh: 'Nam', quequan: 'Hà Nội', malop: 'D25CQCC03-B', cc: 8.0, gk: 7.5, ck: 7.5},
    {masv: 'B25DCCC243', hoten: 'Hà Lê Anh Tuấn', ngaysinh: '2007-01-25', gioitinh: 'Nam', quequan: 'Quảng Ninh', malop: 'D25CQCC03-B', cc: 10.0, gk: 9.5, ck: 9.5},
    {masv: 'B25DCCC261', hoten: 'Trịnh Anh Tú', ngaysinh: '2007-10-10', gioitinh: 'Nam', quequan: 'Hà Nội', malop: 'D25CQCC03-B', cc: 8.5, gk: 7.0, ck: 8.0},
    {masv: 'B25DCCC213', hoten: 'Phạm Đỗ Đình Thái', ngaysinh: '2007-04-14', gioitinh: 'Nam', quequan: 'Hải Phòng', malop: 'D25CQCC03-B', cc: 9.5, gk: 8.5, ck: 9.0},
    {masv: 'B25DCCC273', hoten: 'Phạm Minh Vũ', ngaysinh: '2007-09-28', gioitinh: 'Nam', quequan: 'Hà Nội', malop: 'D25CQCC03-B', cc: 9.0, gk: 9.0, ck: 8.5}
];

// Hàm chuyển Tab
function openTab(tabId, btnElement) {
    // Ẩn tất cả nội dung
    let contents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    
    // Bỏ màu ở các nút
    let btns = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
    }
    
    // Hiển thị tab được chọn
    document.getElementById(tabId).classList.add('active');
    btnElement.classList.add('active');
}

// Đổ dữ liệu ra bảng Sinh viên
function loadStudents() {
    let tbody = document.getElementById('student-list');
    tbody.innerHTML = '';
    
    dataList.forEach((sv, index) => {
        tbody.innerHTML += `
            <tr>
                <td><b>${sv.masv}</b></td>
                <td>${sv.hoten}</td>
                <td>${sv.ngaysinh}</td>
                <td>${sv.gioitinh}</td>
                <td>${sv.quequan}</td>
                <td>${sv.malop}</td>
                <td><button class="btn-del" onclick="deleteStudent(${index})">Xóa</button></td>
            </tr>
        `;
    });
    
    // Cập nhật số lượng ở trang chủ
    document.getElementById('total-students').innerText = dataList.length;
}

// Đổ dữ liệu ra bảng Điểm
function loadGrades() {
    let tbody = document.getElementById('grade-list');
    tbody.innerHTML = '';
    
    dataList.forEach(sv => {
        let diemTong = (sv.cc * 0.1) + (sv.gk * 0.2) + (sv.ck * 0.7);
        let mauDiem = diemTong >= 8.0 ? 'color: red; font-weight: bold;' : 'font-weight: bold;';
        
        tbody.innerHTML += `
            <tr>
                <td><b>${sv.masv}</b></td>
                <td>${sv.hoten}</td>
                <td>${sv.cc.toFixed(1)}</td>
                <td>${sv.gk.toFixed(1)}</td>
                <td>${sv.ck.toFixed(1)}</td>
                <td style="${mauDiem}">${diemTong.toFixed(2)}</td>
            </tr>
        `;
    });
}

// Xử lý Popup (Modal)
function showModal() { document.getElementById('myModal').style.display = 'block'; }
function hideModal() { document.getElementById('myModal').style.display = 'none'; }

// Thêm sinh viên
function addStudent() {
    let masv = document.getElementById('masv').value;
    let hoten = document.getElementById('hoten').value;
    
    if (masv == "" || hoten == "") {
        alert("Vui lòng nhập Mã SV và Họ Tên!");
        return;
    }

    dataList.push({
        masv: masv,
        hoten: hoten,
        ngaysinh: document.getElementById('ngaysinh').value,
        gioitinh: document.getElementById('gioitinh').value,
        quequan: document.getElementById('quequan').value,
        malop: document.getElementById('malop').value,
        cc: 10.0, gk: 8.0, ck: 8.0 // Điểm mặc định
    });

    loadStudents();
    loadGrades();
    hideModal();
    
    // Làm sạch form
    document.getElementById('masv').value = '';
    document.getElementById('hoten').value = '';
    document.getElementById('quequan').value = '';
}

// Xóa sinh viên
function deleteStudent(index) {
    if (confirm("Xác nhận xóa sinh viên này khỏi danh sách?")) {
        dataList.splice(index, 1);
        loadStudents();
        loadGrades();
    }
}

// Chạy hàm khi tải trang
window.onload = function() {
    loadStudents();
    loadGrades();
}