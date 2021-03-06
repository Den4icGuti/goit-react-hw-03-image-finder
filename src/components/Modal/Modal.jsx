import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay,ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component { 

   //===Метод componentDidMount монтирует комопонет в DOM===//
  componentDidMount() { 
  //===Регистрирываем слушателя===//
  window.addEventListener('keydown',this.onHandleKeyDouwn)
  };


//===Метод  componentWillUnmount  выполняет размонтирование компонента  в DOM===//
  componentWillUnmount() { 
      //===Снимаем слушателя с регистрации===//
    window.removeEventListener('keydown',this.onHandleKeyDouwn)
  };

  //===Метод заклрывает модальное окно по клику в любом месте, кроме самого модального окна===//
  onHandleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  onHandleKeyDouwn = e => {
  
    if (e.code === 'Escape') {
      //===Пропс на метод закрития открытия модального окна===//
      this.props.onClose();
    }
  };

  render() { 

     //=== Рендерим модальное окно поверх всех документов, благодаля методу createPortal===//
    return createPortal(
      <Overlay onClick={this.onHandleBackdropClick}>
        <ModalImg>
          <img src={this.props.large} alt="" />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
