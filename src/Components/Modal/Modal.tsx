import './Modal.scss';

import React, { useState } from 'react';

type ModalProps = {
  children: React.ReactNode;
  isModalOpen: boolean;
};

function Modal({ children, isModalOpen }: ModalProps): JSX.Element {
  console.log(isModalOpen)
  const [isOpen, setIsOpen] = useState(isModalOpen);

  const handleOpen = (): void => setIsOpen(true);
  const handleClose = (): void => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;

  