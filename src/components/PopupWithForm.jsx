import React from "react";

export default function PopupWithForm({ name, title, isOpen, onClose, children, onSubmit, submitText="Сохранить" }) {
  function handleClickOverlay(e) {
    e.stopPropagation();
  }

  return(
    <div id={`popup-${name}`} className={`popup ${isOpen && "popup_opened"}`} onClick={onClose} >
      <div className="popup__container" onClick={handleClickOverlay}>
        <h2 className="popup__title">{title}</h2>
        <form id={`popup-${name}__form`} name={`${name}-popup`} noValidate className="popup__form" onSubmit={onSubmit}>
          {children}
          <button id={`popup-${name}__save-button`} type="submit" className="popup__save-button">
            {submitText}
          </button>
          <button type="button" className="popup__close-button popup__close-button_general" onClick={onClose}></button>
        </form>
      </div>
    </div>
  );
}
