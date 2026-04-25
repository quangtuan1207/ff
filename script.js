// Thay link /exec của bạn vào đây
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzYzrUCNYFvF082Wcn59CWZvcqzyhEJf-s9cPiv9GQ_T-5fLrGZ48gbmXa6xIlb1VD8kQ/exec";

function login() {
    const keyInput = document.getElementById('key').value;
    const btn = document.querySelector('.btn-gold');

    // Kiểm tra mã ADMIN để vào trang quản lý
    if (keyInput === 'ADMIN') {
        alert("Chào Admin Podev!");
        localStorage.setItem("role", "admin");
        window.location.href = "admin.html"; // Chuyển đến trang tạo key
        return;
    }

    // Nếu không phải ADMIN thì check Key khách hàng
    btn.innerText = "ĐANG CHECK...";
    fetch(`${SCRIPT_URL}?action=check&key=${keyInput}`)
        .then(res => res.text())
        .then(data => {
            if (data.trim() === "Valid") {
                localStorage.setItem("podev_auth", "true");
                document.getElementById('login-box').style.display = 'none';
                document.getElementById('menu-box').style.display = 'block';
            } else {
                alert("Key sai rồi bạn ơi!");
                btn.innerText = "KÍCH HOẠT";
            }
        })
        .catch(err => alert("Lỗi kết nối Server!"));
}
