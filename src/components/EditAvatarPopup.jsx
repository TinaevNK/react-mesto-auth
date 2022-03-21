import React, { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.jsx';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef(); // записываем объект, возвращаемый хуком, в переменную

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value
    });
  }

  // очищаем поля
  useEffect(() => {
    inputRef.current.value = ''
  }, [isOpen])

  return(
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <fieldset className="popup__info">
        <label className="popup__label">
          <input ref={inputRef} type="url" placeholder="Ссылка на изображение" name="avatar" defaultValue="" id="avatar__link" required className="popup__input" />
          <span className="popup__error" id="avatar__link-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}

