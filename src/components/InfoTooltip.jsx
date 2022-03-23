export default function InfoTooltip() {
  function handleClickOverlay(e) {
    e.stopPropagation();
  }

  return(
    <div id="popup-info-tooltip" className="popup">
      <div className="popup__container" onClick={handleClickOverlay}>
        <div className="popup__status popup__status_success"></div>
        <h2 className="popup__title popup__title_center">Вы успешно зарегистрировались!</h2>
        <button type="button" className="popup__close-button popup__close-button_general"></button>
      </div>
    </div>
  );
}
