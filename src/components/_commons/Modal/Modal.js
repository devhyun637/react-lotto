import PropTypes from 'prop-types';
import React from 'react';

import { ModalInnerDiv, ModalSection } from './Modal.style';
import { ModalCloseButton } from './ModalCloseButton/ModalCloseButton';

export const Modal = props => {
  const { children, onClick, ...rest } = props;

  const handleCloseModal = ({ currentTarget, target }) => {
    const isDimmedClicked = currentTarget === target;

    if (!isDimmedClicked) return;
    onClick();
  };

  return (
    <ModalSection
      role="dialog"
      aria-modal="true"
      aria-labelledby="title-dialog"
      onClick={handleCloseModal}
    >
      <ModalInnerDiv {...rest}>
        <ModalCloseButton onClick={onClick} />
        {children}
      </ModalInnerDiv>
    </ModalSection>
  );
};

Modal.prototype = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  css: PropTypes.object,
};
