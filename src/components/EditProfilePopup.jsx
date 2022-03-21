import React, { useState, useContext, useEffect } from 'react';
import { currentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './PopupWithForm.jsx';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState(''); // стейт имени
  const [description, setDescription] = useState(''); // стейт описания

  const currentUser = useContext(currentUserContext); // подписка на контекст

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleСhangeName(e) {
    setName(e.target.value)
  };

  function handleСhangeDescription(e) {
    setDescription(e.target.value)
  };

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <fieldset className="popup__info">
        <label className="popup__label">
          <input type="text" placeholder="Имя" name="name" value={name || ''} id="name" minLength="2" maxLength="40" required className="popup__input" onChange={handleСhangeName}/>
          <span className="popup__error" id="name-error"></span>
        </label>
        <label className="popup__label">
          <input type="text" placeholder="О себе" name="about" value={description || ''} id="about" minLength="2" maxLength="200" required className="popup__input" onChange={handleСhangeDescription}/>
          <span className="popup__error" id="about-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}
