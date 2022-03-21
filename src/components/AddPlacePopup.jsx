import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.jsx';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [nameCard, setNameCard] = useState('');
  const [linkCard, setLinkCard] = useState('');

  function handleСhangeCardName(e) {
    setNameCard(e.target.value)
  }

  function handleСhangeCardLink(e) {
    setLinkCard(e.target.value)
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: nameCard,
      link: linkCard
    })
  }

  // очищаем поля
  useEffect(() => {
    setNameCard("");
    setLinkCard("");
  }, [isOpen])

  return(
    <PopupWithForm name="create-card" title="Новое место" submitText="Создать" isOpen={isOpen} onClose={onClose} onSubmit={handleAddPlaceSubmit}>
      <fieldset className="popup__info">
        <label className="popup__label">
          <input type="text" placeholder="Название" name="name" value={nameCard} onChange={handleСhangeCardName} id="create-card__title" minLength="2" maxLength="30" required className="popup__input" />
          <span className="popup__error" id="create-card__title-error"></span>
        </label>
        <label className="popup__label">
          <input type="url" placeholder="Ссылка на картинку" name="link" value={linkCard} onChange={handleСhangeCardLink} id="create-card__link" required className="popup__input" />
          <span className="popup__error" id="create-card__link-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}


