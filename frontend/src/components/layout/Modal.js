import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className='ui active inverted dimmer'>
      <div onClick={e => e.stopPropagation()} className='ui active modal mini '>
        <div className='header'>{props.title}</div>
        <div className='content'>{props.content}</div>
        <div className='actions'>{props.actions}</div>
      </div>
    </div>, document.body
  );
};

export default Modal;
