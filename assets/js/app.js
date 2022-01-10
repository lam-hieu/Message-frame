function toast({
    title = '',
    message = '',
    type = 'infor',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        //Auto remove
        const autoRemoveToast = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove when click
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveToast);

            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            infor: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle',
        };

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        // add class toast
        toast.classList.add('toast', `toast--${type}`);
        // set animation
        toast.style.animation = `slideInleft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
             <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(toast);

    }
}

toast({
    title: 'Success',
    message: 'Các bạn subscribe kênh Youtube F8 Official để nhận thông báo khi có các bài học mới nhé',
    type: 'error',
    duration: 3000
});

function showSuccessToast() {
    toast({
        title: 'Thành công',
        message: 'Đăng ký thành công!!!',
        type: 'success',
        duration: 5000
    });
}
function showErrorToast() {
    toast({
        title: 'Thất bại',
        message: 'Đăng ký thất bại!!!',
        type: 'error',
        duration: 5000
    });
}