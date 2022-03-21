import PopupWithForm from './PopupWithForm.jsx';

export default function AcceptDeleteCardPopup({ isOpen, onClose, isAccept }) {
  function handleDeleteCard (e) {
    e.preventDefault();
    isAccept()
  }

  return(
    <PopupWithForm name="delete-card" title="Вы уверены?" submitText="Да" isOpen={isOpen} onClose={onClose} onSubmit={handleDeleteCard}/>
  )
}
