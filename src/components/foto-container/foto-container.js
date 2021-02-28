import React, { Component } from 'react';

import FotoService from '../../services/foto-service';
import ModalWindow from '../modal-window/modal-window';
import Spinner from '../spinner/spinnner';

import './foto-container.css';

export default class FotoContainer extends Component {

  service = new FotoService();

  state = {
    images: [],
    loading: true,
    modalWindow: false,
    id: null
  };

  componentDidMount() {
    this.getFotoArray();
  };

  openModalWindow = (id) => {
    this.setState({
      modalWindow: true,
      id: id
    })
  };

  imagesLoaded = (images) => {
    this.setState({
      images: images,
      loading: false
    })
  };

  closeModal = () => {

    this.service.getImagesArray()
      .then((images) => {
        this.setState({
          images: images,
          loading: false,
          modalWindow: false,
          id: null
        })
      });

    document.removeEventListener('keydown', (evt) => {

      if (evt.key !== 'Escape') {
        return;
      }

      this.props.closeModal();
    });
  };

  getFotoArray = () => {
    return this.service.getImagesArray()
      .then(this.imagesLoaded);
  };

  renderFotoCards = () => {
    const { images } = this.state;

    return images.map((item) => {
      return (
        <img
          className='foto-container__image'
          alt='foto'
          src={item.url}
          key={item.id}
          onClick={() => this.openModalWindow(item.id)} />
      )
    })
  };

  render() {

    const { loading, modalWindow, id } = this.state;
    const render = this.renderFotoCards();

    if (loading) {
      return <Spinner />;
    }

    if (modalWindow) {
      return (
        <div className='foto-container'>
          {render}
          <ModalWindow
            id={id}
            closeModal={this.closeModal} />
        </div>
      )
    }

    return (
      <div className='foto-container'>
        {render}
      </div>
    )
  };
};

