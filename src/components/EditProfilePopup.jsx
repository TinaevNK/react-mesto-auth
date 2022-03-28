import React, { useState, useContext, useEffect } from 'react';
import { currentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.jsx';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser, useEscapePress}) {
  const [userData, setUserData] = useState({
    name: '',
    about: ''
  });

  const {name, about} = userData;

  const currentUser = useContext(currentUserContext); // подписка на контекст

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setUserData(currentUser);
  }, [currentUser, isOpen]);

  function handleChange(e) {
    const {name, value} = e.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  // Передаём значения управляемых компонентов во внешний обработчик
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(userData);
  }

  return (
    <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} useEscapePress={useEscapePress}>
      <fieldset className="popup__info">
        <label className="popup__label">
          <input type="text" placeholder="Имя" name="name" value={name || ''} id="name" minLength="2" maxLength="40" required className="popup__input" onChange={handleChange}/>
          <span className="popup__error" id="name-error"></span>
        </label>
        <label className="popup__label">
          <input type="text" placeholder="О себе" name="about" value={about || ''} id="about" minLength="2" maxLength="200" required className="popup__input" onChange={handleChange}/>
          <span className="popup__error" id="about-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}
