import React, { Component } from 'react';
import { Backdrop, ModalWindow } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
    document.body.style.overflow = 'hidden';
  }

  onBackdropClick = evt => {
    this.props.handleModal();
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
    document.body.style.overflow = 'scroll';
  }
  closeModal = evt => {
    if (evt.code === 'Escape') {
      this.props.handleModal();
    }
  };
  render() {
    return (
      <Backdrop onClick={this.onBackdropClick}>
        <ModalWindow>
          <img src={this.props.largeImage} alt=""  />
        </ModalWindow>
      </Backdrop>
    );
  }
}
