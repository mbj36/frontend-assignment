import React from 'react';
import {
  ModalStyles,
  OverlayStyles,
  ModalHeader,
  ModalBody,
  Image,
  Heading,
  Text,
  Bold,
  CrossSvg,
} from './Modal.styles';

import crossIcon from './cross.svg';

function Modal({ movie, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <>
      <OverlayStyles />
      <ModalStyles>
        <ModalHeader>
          <Heading>{movie.title}</Heading>
          <CrossSvg height="15" src={crossIcon} alt="close" onClick={onClose} />
        </ModalHeader>

        <ModalBody>
          <Image
            src={`https://themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
            alt={movie.title}
          />

          <div>
            <Text>
              <Bold>Release Date</Bold>:{' '}
              {new Date(movie.release_date).toDateString().slice(4)}
            </Text>
            <Text>{movie.overview}</Text>

            <Text>
              <Bold>{movie.vote_average}</Bold>/10 ({movie.vote_count} total
              votes)
            </Text>
          </div>
        </ModalBody>
      </ModalStyles>
    </>
  );
}

export default Modal;
