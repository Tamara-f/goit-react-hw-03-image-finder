import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('click', this.handleClick);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = e => {
    if (e.target.className === 'Backdrop') {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className='Backdrop'>
        <div className='Modal'>{this.props.children}</div>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
