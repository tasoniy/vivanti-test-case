import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './Form.module.scss';
import check from '../../assets/images/check.svg';

export default function Form({ formSubmit }) {
  const [errors, setErrors] = useState({
    surname: false,
    name: false,
    patronymic: false
  });

  const [formData, setFormData] = useState({
    surname: '',
    name: '',
    patronymic: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log('Form data:', formData);

      // Из задания, которое мне прислали не очень понятно надо ли иммировать
      // отправку данных именно на сервер, если вдруг надо, то прилагаю
      // закомментированный ниже код как эта отправка могла бы выглядеть

      // fetch('URL-на-который-нужно-отправить-данные', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      //   formSubmit();
      // })
      formSubmit();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    newErrors.surname = !formData.surname.trim();
    newErrors.name = !formData.name.trim();
    newErrors.patronymic = !formData.patronymic.trim();
    setErrors(newErrors);
    return !newErrors.surname && !newErrors.name && !newErrors.patronymic;
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form}`}>
      <input
        value={formData.surname}
        className={`${styles.form__input} ${errors.surname ? styles.form__input_error : ''}`}
        type="text"
        onChange={handleChange}
        name='surname'
        placeholder='Фамилия'
      />
      <input
        value={formData.name}
        className={`${styles.form__input} ${errors.name ? styles.form__input_error : ''}`}
        type="text"
        onChange={handleChange}
        name='name'
        placeholder='Имя'
      />
      <input
        value={formData.patronymic}
        className={`${styles.form__input} ${errors.patronymic ? styles.form__input_error : ''}`}
        type="text"
        onChange={handleChange}
        name='patronymic'
        placeholder='Отчество'
      />
      <Button type={'submit'} text={'Отправить'} className={`${styles.form__button}`}>
        <img src={check} alt="" />
      </Button>
    </form>
  )
}