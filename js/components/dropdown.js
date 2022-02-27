
const DropDown = document.querySelectorAll('.DropDown');
for (let i = 0; i < DropDown.length; i++) {
  const element = DropDown[i]
  const dropdownArrow = element.querySelector('.dropdown__arrow');
  const formIn = element.querySelector('.form__in');
  const dropdown = element.querySelector('.form__dropdown');
  const dropdownButCount = element.querySelectorAll('.dropdown__button-count-btn');
  const dropdownMenu = element.querySelectorAll('.dropdown__menu');
  let dropdownAllCount = 0;
  element.addEventListener('click', (event) => {
    if (event.target === dropdownArrow) {
      dropdownArrow.classList.toggle('form__button-active');
      if (dropdown.style.display === '') {
        dropdown.style.display = 'none';
        formIn.style.borderRadius = '4px';
      } else {
        dropdown.style.display = '';
        formIn.style.borderRadius = '4px 4px 0 0';
      }
    }
  });
  for (let i = 0; i < dropdownMenu.length; i++) {
    const element = dropdownMenu[i];
    let dropdownOut = element.querySelector('.dropdown__out');
    element.addEventListener('click', (event) => {
      let dropdownUp = element.querySelector('.dropdownUp');
      let dropdownDown = element.querySelector('.dropdownDown');
      let dropdownOutCount = dropdownOut.innerHTML;
      if (event.target === dropdownUp) {
        dropdownOutCount++
        dropdownAllCount++
        dropdownOut.innerHTML = dropdownOutCount;
      } else if (event.target === dropdownDown && dropdownOutCount > 0) {
        dropdownOutCount--
        dropdownAllCount--
        if (dropdownAllCount < 0) {
          dropdownAllCount = 0;
        }
        dropdownOut.innerHTML = dropdownOutCount;
      }
      if (dropdownAllCount !== 0) {
        dropdownButCount[0].style.opacity = '1';
      } else {
        dropdownButCount[0].style.opacity = '0';
      }
    });
    dropdownButCount[0].addEventListener('click', () => {
      dropdownAllCount = 0;
      formIn.placeholder = 'Сколько гостей';
      dropdownOut.innerHTML = 0;
    });
    dropdownButCount[1].addEventListener('click', () => {
      formIn.placeholder = ''
      formIn.value = dropdownAllCount;
      if (dropdownAllCount === 0) {
        formIn.placeholder = 'Сколько гостей';
      }
    });
  }
}
