document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-form]');
  const inputs = form.querySelectorAll('.trial-form__input');
  const submitBtn = form.querySelector('.trial-form__btn');
  const currentModal = document.querySelector('[data-modal="trial-modal"]');
  const currentOverlay = document.querySelector('.overlay');
  const modalCloseBtn = currentModal.querySelector('[data-close-modal]');

  const touched = {};

  const validators = {
    name: (value) =>
      /^[A-Za-zА-Яа-яЁё]{2,}$/.test(value) ||
      'Введите имя из букв (минимум 2 символа)',
    age: (value) =>
      (/^\d+$/.test(value) && +value >= 5 && +value <= 100) ||
      'Введите возраст (число от 5 до 100)',
    phone: (value) =>
      /^(8\d{10}|\+7\d{10})$/.test(value) ||
      'Введите корректный номер телефона',
  };

  function validateInput(input, showErrorFlag = false) {
    const value = input.value;
    const name = input.name;
    const errorEl = input.parentElement.querySelector('.error-text');

    const validator = validators[name];
    const validationResult = validator(value);

    if (validationResult !== true) {
      if (showErrorFlag) {
        showError(input, errorEl, validationResult);
      } else {
        clearError(input, errorEl);
      }
      return false;
    } else {
      clearError(input, errorEl);
      return true;
    }
  }

  function showError(input, errorEl, message) {
    errorEl.textContent = message;
    errorEl.style.color = 'red';
    input.style.borderColor = 'red';
  }

  function clearError(input, errorEl) {
    errorEl.textContent = '';
    input.style.borderColor = '';
  }

  function validateForm() {
    let allValid = true;

    inputs.forEach((input) => {
      const isValid = validateInput(input, touched[input.name]);
      if (!isValid) allValid = false;
    });

    submitBtn.disabled = !allValid;

    if (!allValid) {
      submitBtn.title = 'Пожалуйста, заполните все поля';
    } else {
      submitBtn.title = '';
    }
  }

  // Очистка полей
  function resetForm() {
    form.reset();
    inputs.forEach((input) => {
      touched[input.name] = false;
      const errorEl = input.parentElement.querySelector('.error-text');
      clearError(input, errorEl);
    });
    validateForm();
  }

  // Логика инпутов
  inputs.forEach((input) => {
    touched[input.name] = false;

    input.addEventListener('input', () => {
      validateInput(input, touched[input.name]);
      validateForm();
    });

    input.addEventListener('blur', () => {
      touched[input.name] = true;
      validateInput(input, true);
      validateForm();
    });
  });

  // Отправка
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach((input) => (touched[input.name] = true));
    validateForm();

    if (!submitBtn.disabled) {
      alert('Форма успешно отправлена!');
      resetForm();
      currentModal.classList.remove('modal--active');
      currentOverlay.classList.remove('active');
    }
  });

  // Закрытие модалки
  currentOverlay.addEventListener('click', () => {
    currentModal.classList.remove('modal--active');
    currentOverlay.classList.remove('active');
    resetForm();
  });
  modalCloseBtn.addEventListener('click', () => {
    currentModal.classList.remove('modal--active');
    currentOverlay.classList.remove('active');
    resetForm();
  });
});
