import React, { Component } from 'react';

import FotoService from '../../services/foto-service';
import Spinner from '../spinner/spinnner';

import './modal-window.css';
import closeButton from './close__button_black.svg';

export default class ModalWindow extends Component {

  service = new FotoService();

  state = {
    url: null,
    comment: null,
    date: null,
    loading: true,
    valueName: '',
    valueComment: ''
  };

  componentDidMount() {
    this.escKey();
    this.getModalData();
  };

  getModalData = () => {
    const res = this.service.getResource(this.props.id);
    res.then((obj) => {
      this.setState({
        url: obj.url,
        comment: obj.comment,
        date: obj.date,
        loading: false
      })
    })
  };

  changeName = (evt) => {
    const term = evt.target.value;
    this.setState({ valueName: term });
  };

  changeComment = (evt) => {
    const term = evt.target.value;
    this.setState({ valueComment: term });
  };

  formButtonClick = (evt) => {
    const { id } = this.props;
    const { valueName, valueComment } = this.state;
    const res = this.service
      .postComments(id, { name: valueName, comment: valueComment });
    evt.preventDefault();
    return res;
  };

  escKey = () => {
    document.addEventListener('keydown', (evt) => {

      if (evt.key !== 'Escape') {
        return;
      }

      this.props.closeModal();
    });
  };

  render() {

    const {
      url,
      comment,
      date,
      loading,
      valueName,
      valueComment } = this.state;

    if (loading) {
      return (
        <div className="modal-window">
          <div className='modal-window__container'>
            <Spinner />
          </div>
        </div>
      )
    }

    return (
      <div className="modal-window">
        <div className='modal-window__container'>
          <TopBlock
            url={url}
            closeModal={() => this.props.closeModal}
            comment={comment}
            date={date} />
          <Form
            changeName={() => this.changeName}
            changeComment={() => this.changeComment}
            formButtonClick={() => this.formButtonClick}
            valueName={valueName}
            valueComment={valueComment} />
        </div>
      </div>
    )
  };
};

const TopBlock = ({ url, closeModal, comment, date }) => {

  return (
    <div className='modal-window__top-flex-block'>
      <img
        className="modal-window__image"
        src={url}
        alt="foto" />
      <button
        className='modal-window__close-button'
        onClick={closeModal()}
        style={{ backgroundImage: `url(${closeButton})` }} >
      </button>
      <div className='modal-window__comments-block'>
        <p className='modal-window__comments-date'>{date}</p>
        <p className='modal-window__comment'>{comment}</p>
      </div>
    </div>
  )
};

const Form = ({
  changeName,
  changeComment,
  formButtonClick,
  valueName,
  valueComment }) => {

  return (
    <form className='form'>
      <label className='form__label'>
        <input
          className='form__input'
          type='text'
          placeholder=' Ваше имя'
          required
          value={valueName}
          onChange={changeName()} />
      </label>
      <label className='form__label'>
        <input
          className='form__input'
          type='text'
          placeholder=' Ваш комментарий'
          value={valueComment}
          required
          onChange={changeComment()} />
      </label>
      <button
        className='form__button'
        type='button'
        onClick={formButtonClick()} >
        Оставьте коментарий
      </button>
    </form>
  )
};