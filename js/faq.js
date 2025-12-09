document.querySelectorAll('.faq__item').forEach(item => {
  const question = item.querySelector('.faq__item-question');
  const answer = item.querySelector('.faq__item-answer');
  const toggle = item.querySelector('.faq__toggle i');
  const button = item.querySelector('.faq__toggle');

  question.addEventListener('click', () => {
    // переключаем видимость ответа
    answer.classList.toggle('active');
    // вращаем кнопку
    button.classList.toggle('rotated');
    // меняем плюс на минус и наоборот
    if (toggle.classList.contains('fa-plus')) {
      toggle.classList.replace('fa-plus', 'fa-minus');
    } else {
      toggle.classList.replace('fa-minus', 'fa-plus');
    }
  });
});
