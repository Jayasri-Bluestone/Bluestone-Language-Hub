import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <ModalContext.Provider value={{ isContactModalOpen, openContactModal, closeContactModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ModalProvider');
  }
  return context;
};
