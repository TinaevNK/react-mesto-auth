import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.jsx';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [cardData, setCardData] = useState({
    name: '',
    link: ''
  })

  const {name, link} = cardData;

  function handleChange(e) {
    const {name, value} = e.target;
    setCardData({
      ...cardData,
      [name]: value
    })
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onAddPlace(cardData);
  }

  // очищаем поля
  useEffect(() => {
    setCardData({
      name: '',
      link: ''
    })
  }, [isOpen])

  return(
    <PopupWithForm name="create-card" title="Новое место" submitText="Создать" isOpen={isOpen} onClose={onClose} onSubmit={handleAddPlaceSubmit}>
      <fieldset className="popup__info">
        <label className="popup__label">
          <input type="text" placeholder="Название" name="name" value={name} onChange={handleChange} id="create-card__title" minLength="2" maxLength="30" required className="popup__input" />
          <span className="popup__error" id="create-card__title-error"></span>
        </label>
        <label className="popup__label">
          <input type="url" placeholder="Ссылка на картинку" name="link" value={link} onChange={handleChange} id="create-card__link" required className="popup__input" />
          <span className="popup__error" id="create-card__link-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}


