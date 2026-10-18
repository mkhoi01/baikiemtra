const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const formMessage = document.getElementById('formMessage');

emailForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = emailInput.value.trim();
  formMessage.className = 'form-message';

  if (!email) {
    formMessage.textContent = 'Vui lòng nhập địa chỉ email.';
    formMessage.classList.add('error');
    emailInput.focus();
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Email chưa đúng định dạng. Vui lòng kiểm tra lại.';
    formMessage.classList.add('error');
    emailInput.focus();
    return;
  }

  formMessage.textContent = 'Cảm ơn bạn! Email đã được kiểm tra hợp lệ.';
  formMessage.classList.add('success');
  emailForm.reset();
});
