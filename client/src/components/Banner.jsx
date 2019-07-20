import React from 'react';
import styles from '../styles/Grid.css';
import Modal from './Modal.jsx';

const Banner = ({
  handleKeyPress, onClickForward, onClickBack, index, modal, photos, handleImageClick,
}) => {
  const imgURL = [];
  { photos.map(photo => imgURL.push(photo)); }

  return (
    <div>
      <div className={styles.box0}>
        <img className={styles.banner} src={imgURL[1]} onClick={() => { handleImageClick(0); }} />
      </div>
      {modal && <Modal handleKeyPress={handleKeyPress} onClickForward={onClickForward} onClickBack={onClickBack} index={index} handleImageClick={handleImageClick} imgURL={imgURL} />}
    </div>
  );
};

export default Banner;
