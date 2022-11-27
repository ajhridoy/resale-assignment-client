import React from 'react';

const DeleteModal = ({title, message, closeModal, deleteAction, modalData}) => {
    return (
        <div>
{/* Put this part before </body> tag */}
<input type="checkbox" id="delete-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label onClick={() => deleteAction(modalData)} htmlFor="delete-modal" className="btn btn-warning">Delete</label>
      <button onClick={closeModal} className="btn btn-outline">Cancel</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteModal;