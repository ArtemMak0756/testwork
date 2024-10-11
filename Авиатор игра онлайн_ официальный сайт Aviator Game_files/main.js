document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.icon');
            headers.forEach(item => {
                if (item !== header && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.nextElementSibling.style.maxHeight = null;
                    item.querySelector('.icon').classList.remove('active');
                }
            });
            header.classList.toggle('active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.classList.remove('active');
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.classList.add('active');
            }
        });
    });
});

// --------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.g-popup-block').classList.add('show');
    }, 2000);
    document.querySelector('.g-popup-block__close-btn').addEventListener('click', () => {
        document.querySelector('.g-popup-block').classList.remove('show');
    });
});


// --------------------------------------------------------------------------------------------------------------------


const popup = document.querySelector('.g-popup-block');
const closeBtn = document.querySelector('.g-popup-block__close-btn');
let popupTimeout;

popupTimeout = setTimeout(() => {
    popup.classList.add('show');
}, 5000);
closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
    clearTimeout(popupTimeout);
});
// --------------------------------------------------------------------------------------------------------------------





