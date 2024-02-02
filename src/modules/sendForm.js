const sendForm = ({ fornId, someElem = [] }) => {
  const form = document.getElementsByName(fornId)[0];
  const statusBlock = document.createElement('div');
  const fioUser = document.getElementsByName('fio');
  const phoneUser = document.getElementsByName('phone');

  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется.';
  const validText =
    'Данные не валидны! ФИО: только буквы латиницы или кириллицы. Номер телефона: только "+" и максимум 16 цифр';

  fioUser.forEach((key) => {
    key.setAttribute('required', true);
  });

  phoneUser.forEach((key) => {
    key.setAttribute('required', true);
  });

  const validate = (list) => {
    let validateName;
    let validatePhone;
    let success = true;

    list.forEach((key) => {
      if (key.name === 'fio') {
        validateName = /^[а-яА-Яa-zA-Z\s]+$/g.test(key.value);
      } else if (key.name === 'phone') {
        validatePhone = /^(\+|[0-9]{1})[0-9]{1,16}$/.test(key.value);
      } else {
      }
    });

    if (validateName === false || validatePhone === false) {
      success = false;
    }

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if ((elem.type === 'input') & (!element.value <= 0)) {
        formBody[elem.id] = element.value;
      }
    });

    const cleanTextContent = () => {
      statusBlock.textContent = '';
    };

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          statusBlock.style.color = '#00CC33';

          setTimeout(cleanTextContent, 4000);

          formElements.forEach((input) => {
            input.value = '';
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          statusBlock.style.color = '#FF5555';
        });
    } else {
      statusBlock.textContent = validText;
      statusBlock.style.color = '#C41E3A';
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму, пожалуйста))');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
