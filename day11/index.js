const toastContainer = document.querySelector('.toast-container');
const btns = document.querySelectorAll('.btn');







handleClickButton = (e) =>{
    if (e.target.classList.contains('btn--success')) {
        createToast(
            {
                type: 'success',
                message: 'This is a success message !'
            }
        )
    }
    else if (e.target.classList.contains('btn--warning')) {
        createToast(
            {
                type: 'warning',
                message: 'This is a warning message !'
            }
        )
    }
    else if (e.target.classList.contains('btn--error')) {
        createToast(
            {
                type: 'error',
                message: 'This is a error message !'
            }
        )
    }
}
btns.forEach((btn) => {
    btn.onclick = handleClickButton;
})

function createToast({type='success', message = 'This is a message !'}) {
    let icon;
    switch (type){
        case 'success':
            icon = "<i class='fa-solid fa-circle-check'></i>"
            break;
        case 'warning':
            icon = "<i class='fa-solid fa-circle-exclamation'></i>"
            break;
        case 'error':
            icon = "<i class='fa-solid fa-triangle-exclamation'></i>"
            break;
        default:
            icon = "<i class='bx bxs-check-circle' ></i>"
    }
    let element = document.createElement('div');
    element.classList.add(`toast`, `toast--${type}`);
    element.innerHTML = `<span class="icon">
                            ${icon}
                        </span>
                        <span class="message">
                            ${message}
                        </span>
                        <div class='progress'></div>`
    element.style.animation = 'fadeIn ease-in-out .8s forwards';
    toastContainer.appendChild(element)
    setTimeout(()=>{
        element.style.animation = 'fadeOut ease-in-out 1s forwards';
    },3800)
    setTimeout(()=>{
        toastContainer.removeChild(element)
    },4800)

}


